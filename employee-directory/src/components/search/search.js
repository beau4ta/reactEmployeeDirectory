import React from 'react';
import './search.css'

const Search = (props) => {
    return (
        <div className='search d-flex justify-content-center'>
            <form>
                <input
                placeholder='Search..'
                name='search'
                type='text'
                className='form-control-lg'
                onChange={(e) => props.startSort(e)}
                />
            </form>
        </div>
    )
}

export default Search;