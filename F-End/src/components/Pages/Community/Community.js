import React, { Component } from 'react';
import { Grid, Link, Button } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './community.css';
import '../Page.css';
import Loader from '../../universal/Loader'

function Monks(props) {
    
    let n = [];
    props.props.map((data) => {
        if (data.points > 100)
            n.push(data);
    })

    const [state, setState] = React.useState({
        row: 5
    });

    const showMore = () => {
        let dataLength = state.row;
        setState({ row: dataLength += 5 });
    }
    return (
        <div>
            {
                n.slice(0, state.row).map((data) => {
                    return (
                        <Grid container style={{ marginBottom: '20px' }} >
                            <Grid item>
                                <Avatar style={{ width: '60px', height: '60px' }} src="" />
                            </Grid>
                            <Grid item style={{ marginTop: '-5px', marginLeft: '20px' }}>
                                <Typography className="community-username">{data.name}<span><img alt="Verified" title="Verified" src="assets/images/verified.png" /></span></Typography>
                                <Typography variant="caption">Engagement Score: {data.points}</Typography>
                            </Grid>
                        </Grid>
                    );
                })
            }
            { (state.row >= n.length ) ? 
                (<div></div>) : (<div align="center">
                    <p className="load-more" onClick={showMore}>View more <span className="fa fa-angle-down"></span></p>
                </div>)
            } 
            </div>
    );
}

function Users(props) {

    const [state, setState] = React.useState({
        row: 5
    });

    const showMore = () => {
        let dataLength = state.row;
        setState({ row: dataLength += 5 });
    }

    let n = [];

    props.props.map((data) => {
        if (data.points > 0 && data.points <= 10)
            n.push(data);
    })

    if(n.length == 0) {
        return(
            <Loader style={{ width: '100vw', height: '100vh' }} />
        );
    }
    
    return (
        <div>
            {
                n.slice(0, state.row).map((data) => {
                    return (
                        <Grid container style={{ marginBottom: '20px' }} >
                            <Grid item>
                                <Avatar style={{ width: '60px', height: '60px' }} src="" />
                            </Grid>
                            <Grid item style={{ marginTop: '-5px', marginLeft: '20px' }}>
                                <Typography className="community-username">{data.name}</Typography>
                                <Typography variant="caption">Engagement Score: {data.points}</Typography>
                            </Grid>
                        </Grid>
                    );
                })
            }
            { (state.row >= n.length) ?
                (<div></div>) : (<div align="center">
                    <p className="load-more" onClick={showMore}>View more <span className="fa fa-angle-down"></span></p>
                </div>)
            }
        </div>
    );
}

function Enlightners(props) {

    let n = [];
    props.props.map((data) => {
        if (data.points > 10 && data.points <= 100)
            n.push(data);
    })

    const [state, setState] = React.useState({
        row: 5
    });

    const showMore = () => {
        let dataLength = state.row;
        setState({ row: dataLength += 5 });
    }
    return (
        <div>
            {
                n.slice(0, state.row).map((data) => {
                    return (
                        <Grid container style={{ marginBottom: '20px' }} >
                            <Grid item>
                                <Avatar style={{ width: '60px', height: '60px' }} src="" />
                            </Grid>
                            <Grid item style={{ marginTop: '-5px', marginLeft: '20px' }}>
                                <Typography className="community-username">{data.name}</Typography>
                                <Typography variant="caption">Engagement Score: {data.points}</Typography>
                            </Grid>
                        </Grid>
                    );
                })
            }
            { (state.row >= n.length) ?
                (<div></div>) : (<div align="center">
                    <p className="load-more" onClick={showMore}>View more <span className="fa fa-angle-down"></span></p>
                </div>)
            }
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`community-tabpanel-${index}`}
            aria-labelledby={`community-tab-${index}`}
            className="community-tabpanel"
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

class Community extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            data: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/members", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ data: result })
            })
            .catch(error => console.log('error', error));
    }

    handleChange = (event, index) => {
        this.setState({
            value: index
        });
    };

    render() {
        return (
            <div className="Community" style={{ paddingBottom: '50px' }}>
                <Tabs value={this.state.value} onChange={this.handleChange} aria-label="community-tabs" className="community-tabs" >
                    <Tab className="community-label" label="Members" />
                    <Tab className="community-label" label="Enlighteners" />
                    <Tab className="community-label" label="Monks" />
                </Tabs>
                <Typography className="community-tabs-info" variant="caption">Ranked based on insightful engagement. <Link>Details</Link></Typography>

                <TabPanel value={this.state.value} index={0}>
                    <Users props={this.state.data} />
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <Enlightners props={this.state.data} />
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    <Monks props={this.state.data} />
                </TabPanel>
            </div>
        );
    }
}

export default Community;