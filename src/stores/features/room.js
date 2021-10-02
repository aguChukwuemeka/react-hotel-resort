import { createSlice } from "@reduxjs/toolkit";
import data from "../api/data";

export const getCurrentState = () => {
  let rooms = formatData(data);
  let featuredRooms = rooms.filter((room) => room.featured === true);
  let maxPrice = Math.max(...rooms.map((item) => item.price));
  let maxSize = Math.max(...rooms.map((item) => item.size));
  const state = {
    rooms,
    featuredRooms,
    sortedRooms: rooms,
    isLoading: false,
    price: maxPrice,
    maxPrice,
    size: maxSize,
    maxSize,
  };
  return state;
};

function formatData(items) {
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
}

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  isLoading: true,
  type: "all",
  capacity: "select",
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: null,
  pets: null,
};

const slice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRoom: (rooms, action) => {
      console.log("object :", rooms);
      return {
        ...rooms,
        isLoading: action.payload.isLoading,
        rooms: action.payload.rooms,
        featuredRooms: action.payload.featuredRooms,
        sortedRooms: action.payload.sortedRooms,
        price: action.payload.price,
        maxPrice: action.payload.maxPrice,
        maxSize: action.payload.maxSize,
      };
    },

    sortedRoomsByTypes: (state, { payload }) => {
      state.type = payload;
      state.sortedRooms =
        payload === "all"
          ? state.rooms
          : state.rooms.filter((room) => room.type === payload);
    },

    sortedRoomsByCapacity: (state, { payload }) => {
      state.capacity = payload;
      state.sortedRooms =
        payload === "select"
          ? state.rooms
          : state.rooms.filter((room) => room.capacity === payload);
    },

    sortedRoomsByPrice: (state, { payload }) => {
      state.price = payload;
      state.sortedRooms = state.rooms.filter((room) => room.price <= payload);
    },

    sortedRoomsByMaxSize: (state, { payload }) => {
      state.maxSize = payload.maxSize;
      state.sortedRooms = state.rooms.filter((room) => room.size <= payload);
    },

    sortedRoomsByMinSize: (state, { payload }) => {
      // console.log(payload);
      state.minSize = payload.minSize;
      state.sortedRooms = state.rooms.filter((room) => room.size >= payload);
    },

    sortedRoomsByBreakfast: (state, { payload }) => {
      state.sortedRooms =
        payload === false
          ? state.rooms
          : state.rooms.filter((room) => room.breakfast === payload);
    },

    sortedRoomsByPets: (state, { payload }) => {
      state.sortedRooms =
        payload === false
          ? state.rooms
          : state.rooms.filter((room) => room.pets === payload);
    },
  },
});

export const {
  setRoom,
  sortedRoomsByTypes,
  sortedRoomsByCapacity,
  sortedRoomsByPrice,
  sortedRoomsByMaxSize,
  sortedRoomsByMinSize,
  sortedRoomsByBreakfast,
  sortedRoomsByPets,
} = slice.actions;
export default slice.reducer;
