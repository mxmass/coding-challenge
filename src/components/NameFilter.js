import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useDebouncedEffect } from "../hooks/useDebouncedEffect";
import { setName } from "../reducers/filters";

const NameFilter = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useDebouncedEffect(() => dispatch(setName(search)), 300, [search]);

  return (
    <input
      type="text"
      name="nameFilter"
      id="nameFilter"
      placeholder="search"
      onChange={handleChange}
    />
  );
};

export default NameFilter;
