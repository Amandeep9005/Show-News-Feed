import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  FetchNews,
  INCREMENT_PAGE_COUNTER,
  DECREMENT_PAGE_COUNTER,
} from "./ReducerActions/NewsReducer";

import {
  PaginationBar,
  styleButton,
  headerStyles,
  aboutStyles,
} from "./NewsStyled";

const News = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, newsPageCounter, fetchingError } = useSelector((state) => ({
    data: state.data,
    newsPageCounter: state.newsPageCounter,
    fetchingError: state.fetchingError,
  }));

  useEffect(() => {
    console.log(
      "News page loaded fetching news with page index as",
      newsPageCounter
    );
    dispatch(FetchNews());
  }, [dispatch, newsPageCounter]);

  useEffect(() => {
    if (fetchingError === true) {
      console.log("there was an error while fetching the news api");
      history.push("/Error");
    }
  }, [fetchingError, history]);

  return (
    <div>
      <div style={headerStyles}>
        <div onClick={() => history.push("/news")}>News</div>
        <div onClick={() => history.push("/about")}>About</div>
      </div>
      <br />
      <PaginationBar>
        <button
          disabled={newsPageCounter === 1 ? true : false}
          onClick={() => dispatch({ type: DECREMENT_PAGE_COUNTER })}
        >{`< prev`}</button>
        <button
          style={styleButton}
          onClick={() => dispatch({ type: INCREMENT_PAGE_COUNTER })}
        >{`next >`}</button>
      </PaginationBar>
      <ol>
        {data &&
          data.length > 0 &&
          data.map((currElement) => {
            return (
              <li key={currElement.id}>
                <div>
                  <h4>{currElement.title}</h4>
                  <div>
                    <p>
                      {currElement.points} points by {currElement.user}{" "}
                      {currElement.time_ago} | {currElement.comments_count}{" "}
                      comments
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default News;
