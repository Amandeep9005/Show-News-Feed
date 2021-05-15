import News from "./News";
import React from "react";
import { render } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

jest.mock("react-router-dom", () => ({
  useHistory: jest.fn(),
}));
jest.mock("react-redux");

let initialState = {};
describe("NewsPage", () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => () => {});
    initialState = {
      theme: "",
      newsPageCounter: 1,
      data: [
        {
          id: 27164131,
          title: "Oxide: The Essence of Rust (2020)",
          points: 53,
          user: "VitalyAnkh",
          time: 1621076190,
          time_ago: "6 hours ago",
          comments_count: 13,
          type: "link",
          url: "https://arxiv.org/abs/1903.00982",
          domain: "arxiv.org",
        },
        {
          id: 27160983,
          title: "The Return of Fancy Tools",
          points: 397,
          user: "typeofnandev",
          time: 1621036981,
          time_ago: "17 hours ago",
          comments_count: 180,
          type: "link",
          url: "https://macwright.com/2021/03/16/return-of-fancy-tools.html",
          domain: "macwright.com",
        },
        {
          id: 27164476,
          title: "Tech audit of Colonial Pipeline found ‘glaring’ problems",
          points: 48,
          user: "jtdev",
          time: 1621080376,
          time_ago: "5 hours ago",
          comments_count: 22,
          type: "link",
          url: "https://apnews.com/article/va-state-wire-technology-business-1f06c091c492c1630471d29a9cf6529d",
          domain: "apnews.com",
        },
        {
          id: 27151233,
          title:
            "Reconstruction of ancient microbial genomes from the human gut",
          points: 28,
          user: "Petiver",
          time: 1620972378,
          time_ago: "a day ago",
          comments_count: 2,
          type: "link",
          url: "https://www.nature.com/articles/s41586-021-03532-0",
          domain: "nature.com",
        },
      ],
      fetchingNews: "false",
      fetchingError: "false",
    };
  });

  test("Should display successfully linked page when the component is rendered", async () => {
    useSelector.mockImplementation((stateFunction) =>
      stateFunction(initialState)
    );
    const { getByText } = render(<News />);

    expect(getByText(/The Return of Fancy Tools/)).toBeInTheDocument();
  });
});
