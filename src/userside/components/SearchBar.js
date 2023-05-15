import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function SearchBar() {
    return (
        <div className='SearchBar'>
            <input type='search' placeholder='Companies Funds Search' />
            <div className='btn-container'>
                <div className='btn-drop'>
                    <div>
                        FILTER
                    </div>
                    <div className='d-flex w-100 justify-content-end'><ExpandMoreIcon /></div>
                </div>
                <div className='btn'>Export CSV</div>
                <div className='btn'>Add Investment</div>
            </div>
        </div>
    )
}
