import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [querry, setQuerry] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${querry}`);
  };

  return (
    <div>
      <h1>Flickr search</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setQuerry(e.target.value)} type="text" />
        <button>search</button>
      </form>

      <Outlet />
    </div>
  );
};

export default SearchPage;
