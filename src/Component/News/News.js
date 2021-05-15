import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchNews,
  INCREMENT_PAGE_COUNTER,
  DECREMENT_PAGE_COUNTER,
} from "./ReducerActions/NewsReducer";

const News = () => {
  const dispatch = useDispatch();

  const { data, newsPageCounter } = useSelector((state) => ({
    data: state.data,
    newsPageCounter: state.newsPageCounter,
  }));

  useEffect(() => {
    dispatch(FetchNews());
  }, [dispatch, newsPageCounter]);

  return (
    <div>
      News
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
