import React from "react";
import styled from "styled-components";

const Search = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
  return (
    <SearchComponent>
      <input
        type="text"
        placeholder="Search Your Movie"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button onClick={fetchMovieData}>Search</button>
    </SearchComponent>
  );
};

const SearchComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;

  input {
    padding: 1rem;
    width: 50%;
    font-size: 1.5rem;
    border: none;
    outline: none;
    border-radius: 0.5rem 0 0 0.5rem;
    font-weight: 600;
  }
  button {
    width: 10rem;
    background-color: gray;
    color: black;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    outline: none;
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

export default Search;
