import React,{useState} from 'react'
import TuneIcon from '@material-ui/icons/Tune';

function Filter() {

    const [click, setClick] = useState('false');

    const showList = () =>{
        setClick('true');
    }
    const hideList =()=>{
        setClick('false')
    }

    const displayItem = (e)=>{
        return(
            <div className="btmFilter">
                <p>Category</p>
                <p>Last Week</p>
            </div>
        )
    }
    
    return (
        <div className="Filter" container>
            <div className="topFilter">
                 <p>My Feed</p>
                 <TuneIcon size="small" onClick={click == 'false' ? showList : hideList} style={{color:'#000'}}/>
            </div>
            {click == 'true' ? displayItem() : hideList}
        </div>
    )
}

export default Filter
