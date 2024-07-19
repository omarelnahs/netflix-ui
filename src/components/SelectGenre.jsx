import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store/store";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.target.value, type }));
      }}
    >
      {genres.map((genre) => {
        return (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 0.2rem;
  outline: none;
  option {
    background-color: black;
  }
`;
