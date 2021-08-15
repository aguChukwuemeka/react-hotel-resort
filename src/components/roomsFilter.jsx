import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "./title";
import {
  getTypes,
  sortedRoomsByTypes,
  sortedRoomsByCapacity,
} from "../stores/features/room";

// setting  unique values
function getUnique(items, value) {
  return [...new Set(items.map((item) => item[value]))];
}

export default function RoomsFilter({ props_rooms }) {
  const roomState = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  console.log(roomState);
  const {
    rooms,
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
  let checking = false;

  useEffect(
    (props) => {
      checking = props;
      filterRoomFunc();
    },
    [checking]
  );

  // get unique types. the data to check: (rooms[], value checking)
  let types = getUnique(props_rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let people = getUnique(props_rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  function handleChange(event) {
    filterRoomFunc();
    dispatch(getTypes({ [event.target.name]: event.target.value }));
  }

  function filterRoomFunc() {
    console.log(type);
    let tempRooms = [...rooms];

    // types
    if (type !== "all") {
      let filterRoomsByTypes = tempRooms.filter((room) => room.type === type);
      dispatch(sortedRoomsByTypes(filterRoomsByTypes));
    }

    // capacity:people
    let people = parseInt(capacity);
    if (people !== 1) {
      let filterRoomsByCapacity = tempRooms.filter(
        (room) => room.people >= people
      );
      console.log('object : ', filterRoomsByCapacity)
      dispatch(sortedRoomsByCapacity(filterRoomsByCapacity));
    }
  }

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
            onChange={handleChange}
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
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        <div className="custom-form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="custom-form-control"
            type='range'
            max={maxPrice}
            min={minPrice}
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
