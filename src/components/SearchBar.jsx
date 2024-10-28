import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <input
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Search'
            className='search-input bg-gray-200 rounded-full px-5 py-1 mr-10 outline-none placeholder-black'
        />
    )
}

export default SearchBar;