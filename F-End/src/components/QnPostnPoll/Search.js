import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography } from '@material-ui/core';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            expanded: false
        }
    }

    handleChange = (panel) => (event, isExpanded) => {
        this.setState({
            expanded: isExpanded ? panel : false
        })
    };

    componentDidMount() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://recmonk.herokuapp.com/posts", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let FilteredTitle =
                    result.filter((item) => {
                        if (item.isQuestion == true)
                            return item.name.toLowerCase().includes(this.props.title.toLowerCase())
                    })
                this.setState({ data: FilteredTitle })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <Grid item xs={12}>
                <Accordion style={{ background: '#f2f2f2', boxShadow: 'none' }} expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        <Typography>{this.state.data.length} Similar Questions Found</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {
                                this.state.data.map(item => {
                                    return (
                                        <p>- {item.name}</p>
                                    )
                                })
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        )
    }
}

export default Search