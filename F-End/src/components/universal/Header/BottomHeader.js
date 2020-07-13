import React from 'react'
import { Button } from '@material-ui/core'
import '../universal.css'
import Filter from './Filter'

function BottomHeader() {
    return (
        <div>
        <div className="BottomHeader">
            <form>
                <input type="search" name="search" placeholder="Question monk's wisdom, you seek!" />
                <button type="submit">
                    ASK
                </button>
            </form>
        </div>
        </div>
    )
}

export default BottomHeader
