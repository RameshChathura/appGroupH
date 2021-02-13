const Reducer = (state, action) => {
  console.log('work 5');
  console.log(action.payload.name);
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
