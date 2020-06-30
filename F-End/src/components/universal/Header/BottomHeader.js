import React from 'react'
import { Button } from '@material-ui/core'
import '../universal.css'

function BottomHeader() {
    return (
        <div className="BottomHeader">
            <form>
                <input type="search" name="search" placeholder="Question monk's wisdom, you seek!" />
                <button type="submit">
                    ASK
                </button>
            </form>
        </div>
    )
}

export default BottomHeader
