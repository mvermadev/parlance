import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddQuestion from './AddQuestionForm';
import AddPoll from './AddPollForm';
import { useParams } from 'react-router-dom'
import './posting.css';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`post-tabpanel-${index}`}
            aria-labelledby={`post-tab-${index}`}
            className="post-tabpanel"
        >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

function Post() {
    const [value, setValue] = React.useState(0);

    const { data } = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="ask-tab" align="center">
            <div className="ask-tab-forms">
                <Tabs value={value} onChange={handleChange} aria-label="post-tabs" className="post-tabs" >
                    <Tab label="Add Question" />
                    <Tab label="Poll" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <AddQuestion data={data} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AddPoll data={data} />
                </TabPanel>
            </div>
        </div>
    );
}

export default Post;