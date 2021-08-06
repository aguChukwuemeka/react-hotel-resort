import { createSlice } from "@reduxjs/toolkit";
import data from "../api/data";

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  isLoading: true,
};

export const getCurrentState = () => {
  let rooms = formatData(data);
  //   console.log(rooms)
  let featuredRooms = rooms.filter((room) => room.featured === true);
  const state = {
    rooms,
    featuredRooms,
    sortedRooms: rooms,
    isLoading: false,
  };
  // console.log(state);
  return state;
};

function formatData(items) {
  //   console.log(items)
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  // console.log(tempItems);
  return tempItems;
}

const slice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRoom: (rooms, action) => {
      return{
    rooms: action.payload.rooms,
        featuredRooms: action.payload.featuredRooms,
        sortedRooms: action.payload.sortedRooms,
        isLoading: action.payload.isLoading,
      };
    },

    // getSinglePage: (rooms, action) => {
    //   const index = rooms.rooms.find((room) => room.slug === action.payload.slug);
    //   console.log(index)
    //   // rooms[index].completed = action.payload.completed;
    //   // console.log(action.payload.completed);
    // },

    // todoRemoved: (todos, action) => {
    //   const index = todos.findIndex((todo) => todo.id !== action.payload.id);
    //   todos.pop(todos[index]);
    // },
  },
});

export const { setRoom } = slice.actions;
export default slice.reducer;
