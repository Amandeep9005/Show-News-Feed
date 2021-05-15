import produce from "immer";
import { registerReducer } from "../../StateSetup/RootReducer";
import { compare } from "../../../Utils/SortFunction";

export const REQUEST_ACTION_NAME = "ACTION_FETCHING_NEWS_REQUEST";
export const RESPONSE_ACTION_NAME = "ACTION_FETCHING_NEWS_RESPONSE";
export const ERROR_ACTION_NAME = "ACTION_FETCHING_NEWS_ERROR";

export const INCREMENT_PAGE_COUNTER = "ACTION_INCREMENT_PAGE_COUNTER";

export const DECREMENT_PAGE_COUNTER = "ACTION_DECREMENT_PAGE_COUNTER";

export const FetchNews = () => async (dispatch, getState) => {
  dispatch({ type: REQUEST_ACTION_NAME });
  const newsPageCounter = getState().newsPageCounter;

  const response = await fetch(
    `https://api.hackerwebapp.com/news?page=${newsPageCounter}`,
    {
      method: "GET",
    }
  );

  if (response.status === 200) {
    const data = await response.json();
    data.sort(compare);
    dispatch({ type: RESPONSE_ACTION_NAME, data });
  } else {
    dispatch({ type: ERROR_ACTION_NAME });
  }
};

export const RequestReducer = produce((state, action) => {
  state.fetchingNews = true;
});

export const ResponseReducer = produce((state, action) => {
  state.fetchingNews = false;
  state.data = action.data;
});

export const ErrorReducer = produce((state, action) => {
  state.fetchingNews = false;

  state.fetchingError = true;
});

export const IncrementPageCounter = produce((state, action) => {
  state.newsPageCounter += 1;
});

export const DecrementPageCounter = produce((state, action) => {
  state.newsPageCounter -= 1;
});
registerReducer(REQUEST_ACTION_NAME, RequestReducer);
registerReducer(RESPONSE_ACTION_NAME, ResponseReducer);
registerReducer(ERROR_ACTION_NAME, ErrorReducer);

registerReducer(INCREMENT_PAGE_COUNTER, IncrementPageCounter);

registerReducer(DECREMENT_PAGE_COUNTER, DecrementPageCounter);
