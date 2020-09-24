import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'
import '../universal.css'
import Filter from './Filter'

function BottomHeader() {

    const history = useHistory();

    const [field, setForm] = useState({
        data: ''
    });

    const handleChange=e=>{
        setForm({
            ...field,
            [e.target.name]: e.target.value
          });
    };

    const finalStep = e=>{
        e.preventDefault();

        if(field.data == null)
        {
            alert('Please write to search')
        }
        else
        {
            history.push(`/add-post/${field.data}`)
        }
    }

    return (
        <div>
        <div className="BottomHeader">
            <form className="myForm" onSubmit={finalStep}>
                <input type="search" name='search' value={field.data} onChange={handleChange} required placeholder="Question monk's wisdom, you seek!" />
                <button type="submit">
                    Ask
                </button>
            </form>
        </div>
        </div>
    )
}

export default BottomHeader
