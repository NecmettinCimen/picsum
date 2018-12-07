export default function reducer(
  state = {
    pictures: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
){
  switch (action.type) {
    case "FETCH_PICSUM": {
      return { ...state, fetching: true };
    }
    case "FETCH_PICSUM_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_PICSUM_FULLFIlLLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        pictures: action.payload
      };
    }
    default:
      return state;
  }
};
