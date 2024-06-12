import React, { useState } from 'react';
import "./searchbox.css"

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleChange}
      />
      <button type="submit" className='search'>Search</button>
    </form>
  );
};

export default SearchBox;