import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  FetchNews,
  INCREMENT_PAGE_COUNTER,
  DECREMENT_PAGE_COUNTER,
} from "./ReducerActions/NewsReducer";

const News = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, newsPageCounter, fetchingError } = useSelector((state) => ({
    data: state.data,
    newsPageCounter: state.newsPageCounter,
    fetchingError: state.fetchingError,
  }));

  useEffect(() => {
    dispatch(FetchNews());
  }, [dispatch, newsPageCounter]);

  useEffect(() => {
    if (fetchingError === true) {
      history.push("/Error");
    }
  }, [fetchingError, history]);

  return (
    <div>
      <span>News</span>
      <span>
        About<button onClick={() => history.push("/about")}></button>
      </span>
      <div>
        <button
          disabled={newsPageCounter === 1 ? true : false}
          onClick={() => dispatch({ type: DECREMENT_PAGE_COUNTER })}
        >{`<`}</button>
        <button
          onClick={() => dispatch({ type: INCREMENT_PAGE_COUNTER })}
        >{`>`}</button>
      </div>
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
