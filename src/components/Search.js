import React from 'react';


const Search = (props) => (
    <form onSubmit={props.getCoin}>
        <input type="text" name="searchName"></input>
        <button type="submit">Search</button>
    </form>
)

export default Search;