import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProfQues from './ProfQues'

function Contributions(props) {

    let q = props.props.questions;
    console.log(q);

    const [state, setState] = React.useState({
        row: 1
    });

    const showMore = () => {
        let dataLength = state.row;
        setState({ row: dataLength += 1 });
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="contribute-section">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography><span>{q.length} </span>Questions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="drop-down">
                        {
                            q.slice(0, state.row).map((data) => {
                                return (
                                    <ProfQues props={data} />
                                );
                            })
                        }
                        {(state.row >= q.length) ?
                            (<div><p className="load-more">No more questions</p></div>) : (<div align="center">
                                <p className="load-more" onClick={showMore}>View more <span className="fa fa-angle-down"></span></p>
                            </div>)
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography><span>{props.props.points} </span>Points</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Contributions;