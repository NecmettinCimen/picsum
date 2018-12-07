
export function fetchList() {
  return function(dispatch) {
    fetch("https://picsum.photos/list")
      .then(response =>
        dispatch({ type: "FETCH_PICSUM_FULLFIlLLED", payload: response.json() })
      );
  };
}
