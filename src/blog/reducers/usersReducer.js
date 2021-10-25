export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

// export const usersReducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_USERS":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };

// export const usersReducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_USER":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
