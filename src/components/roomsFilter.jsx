import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "./title";
import {
  sortedRoomsByTypes,
  sortedRoomsByPrice,
  sortedRoomsByMinSize,
  sortedRoomsByMaxSize,
  sortedRoomsByCapacity,
  sortedRoomsByBreakfast,
  sortedRoomsByPets,
} from "../stores/features/room";

// setting  unique values
function getUnique(items, value) {
  return [...new Set(items.map((item) => item[value]))];
}

export default function RoomsFilter({ filterRooms }) {
  
  const roomState = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  let {
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
  } = roomState;

  // get unique types. the data to check: (rooms[], value checking)
  let types = getUnique(filterRooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  // get unique types. the data to check: (rooms[], value checking)
  let people = getUnique(filterRooms, "capacity");
  people = ["select", ...people];
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const handleTypeChange = ({ target }) =>
    dispatch(sortedRoomsByTypes(target.value));

  const handleCapacityChange = ({ target }) =>
    dispatch(sortedRoomsByCapacity(parseInt(target.value)));

  const handlePriceChange = ({ target }) =>
    dispatch(sortedRoomsByPrice(parseInt(target.value)));

  const handleSizeChange = ({ target }) => {
    if (target.name === "minSize")
      dispatch(sortedRoomsByMinSize(parseInt(target.value)));
    else if (target.name === "maxSize")
      dispatch(sortedRoomsByMaxSize(parseInt(target.value)));
  };

  const handleBreakfastChange = ({ target }) =>
    dispatch(sortedRoomsByBreakfast(target.checked));

  const handlePetsChange = ({ target }) =>
    dispatch(sortedRoomsByPets(target.checked));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="custom-form-group">
          <label htmlFor="type">room type</label>
          <select
            className="custom-form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleTypeChange}
          >
            {types}
          </select>
        </div>
        <div className="custom-form-group">
          <label htmlFor="capacity">guests</label>
          <select
            className="custom-form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleCapacityChange}
          >
            {people}
          </select>
        </div>
        <div className="custom-form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="custom-form-control"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handlePriceChange}
            style={{ padding: "0em" }}
          />
        </div>
        <div className="custom-form-group">
          <label htmlFor="capacity">Size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleSizeChange}
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleSizeChange}
            />
          </div>
        </div>
        <div className="custom-form-group">
          <div className="single-extra">
            <input
              className="size-input"
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleBreakfastChange}
              style={{ width: "1em" }}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              className="size-input"
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handlePetsChange}
              style={{ width: "1em" }}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
