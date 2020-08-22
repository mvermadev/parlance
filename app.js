var createError = require('http-errors');
var express = require('express');
var path = require('path');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var LocalStrategy = require("passport-local").Strategy;
var GoogleStrategy = require('passport-google-oauth20');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var auth = require("./config/auth");
var User = require("./models/user");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require("./routes/post");
const passport = require("passport");
var mongoose = require("mongoose");
const multer = require("multer");
var Content = require('./models/content');
const jwt = require("jsonwebtoken");
var cors = require('cors');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postRouter);


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: (req,file,cb)=>{
    cb(null,/*new Date().toISOString()+'-'+*/file.originalname);
  }
});

const fileFilter = (req,file,cb)=>{
  if(file.mimetype === 'application/pdf' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    cb(null,true);
  else
    cb(null,false);
};

app.all('*', function(req, res, next) {
     var origin = req.get('origin');
     res.header('Access-Control-Allow-Origin', origin);
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.use(passport.initialize());
require('./config/passport')(passport);

var upload = multer({ storage: storage });

mongoose.connect("mongodb://pdcoder:pdcoder1!@ds031972.mlab.com:31972/naac", { useNewUrlParser: true, useUnifiedTopology: true });

passport.use(new LocalStrategy((username, password,done)=>{
  User.findOne({
    username: username
  }, (err,user)=>{

    if (err) return done(err);

    // When user is not found
    if (!user) return done(null, false);

    bcrypt.compare(password,user.password,(err,res)=>{
      if (err) return done(err);
      if (res === false) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    });
  });
}));

passport.use(new LinkedInStrategy({
      clientID: auth.linkedin.clientID,
      clientSecret: auth.linkedin.clientSecret,
      callbackURL: auth.linkedin.callbackURL,
      scope: ['r_emailaddress', 'r_basicprofile'],
    }, function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        User.findOne({"username": profile.emails[0].value}, function(err, founduser){
          if (err) {
            return done(err);
          } else {
            if (founduser) {
              return done(null, founduser);
            } else {
              User.findOne({ 'linkedInUserId' : profile.id }, function(err, user) {
                if (err)
                  return done(err);
                if (user) {
                  // if a user is found, log them in
                  return done(null, user);
                } else {
                  // if the user isnt in our database, create a new user
                  var newUser = new User();
                  // set all of the relevant information
                  newUser.linkedInUserId = profile.id;
                  newUser.name  = profile.displayName;
                  newUser.username = profile.emails[0].value;
                  newUser.avatar = gravatar.url(newUser.username, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                  });
                  // save the user

                  User.create(new User(newUser), function(err) {
                    jwt.sign(
                        payload,
                        'secret',
                        { expiresIn: 3600 },
                        (err, token) => {
                          res.json({
                            success: true,
                            token: 'Bearer ' + token
                          });
                        }
                    );
                    if (err)
                      throw err;
                    return done(null, newUser);
                  });
                }
              });
            }
          }
        });
        // try to find the user based on their google id
      });
    })
);


passport.use(
    new GoogleStrategy({
      clientID:auth.googleAuth.clientID,
      clientSecret:auth.googleAuth.clientSecret,
      callbackURL:auth.googleAuth.callbackURL
    },(accessToken, refreshToken, profile, done)=>{
      process.nextTick(function() {
        User.findOne({"username": profile.emails[0].value}, function(err, founduser){
          if (err) {
            return done(err);
          } else {
            if (founduser) {
              return done(null, founduser);
            } else {
              User.findOne({ 'googleUserId' : profile.id }, function(err, user) {
                if (err)
                  return done(err);
                if (user) {
                  // if a user is found, log them in
                  return done(null, user);
                } else {
                  // if the user isnt in our database, create a new user
                  var newUser = new User();
                  // set all of the relevant information
                  newUser.googleUserId    = profile.id;
                  newUser.name  = profile.displayName;
                  newUser.username = profile.emails[0].value;
                  newUser.avatar = gravatar.url(newUser.username, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                  });
                  User.create(new User(newUser), function(err) {

                    const payload = { username: newUser.username, avatar: newUser.avatar }; // Create JWT Payload

                    jwt.sign(
                        payload,
                        'secret',
                        { expiresIn: 3600 },
                        (err, token) => {
                          res.json({
                            success: true,
                            token: 'Bearer ' + token
                          });
                        }
                    );
                    if (err)
                      throw err;
                    return done(null, newUser);
                  });
                }
              });
            }
          }
        });
        // try to find the user based on their google id
      });
    })
);

app.post('/upload',upload.single('pic'), async function(req,res){

  var check = await Content.findOne({title : req.body.title});
  if(check)
  {
    res.send("File exists", 200);
  }
  else{
    var image1 = '/images/'+req.file.filename;
    var filteredout = (req.body.category).filter(function (el) {
      return el != "";
    });

    var detail={
      uploaded_by:req.user.id,
      category:req.body.category,
      title:req.body.title,
      pdf:image1,
      video: req.body.video
    };
    console.log(detail);
    Content.create(detail,function(err,newB){
      if(err){
        res.send(500)
      }
      else{
        res.send("Successfully uploaded", 200);
      }
    });
  }
});

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
});

app.get('/auth/linkedin', passport.authenticate('linkedin'),
    (req, res)=>{
      res.send(req.user);
    });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
