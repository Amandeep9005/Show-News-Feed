import { compare } from "./SortFunction";
import React from "react";

describe("SortFunction", () => {
  test("check items based on Time", async () => {
    let item1 = {
      time: 1,
    };
    let item2 = {
      time: 2,
    };

    let result = compare(item1, item2);
    expect(result).toBe(1);
  });

  test("check items based on Time", async () => {
    let item1 = {
      time: 2,
    };
    let item2 = {
      time: 1,
    };

    let result = compare(item1, item2);
    expect(result).toBe(-1);
  });

  test("check items based on comments if times are equal", async () => {
    let item1 = {
      comments_count: 1,
      time: 2,
    };
    let item2 = {
      comments_count: 2,
      time: 2,
    };

    let result = compare(item1, item2);
    expect(result).toBe(1);
  });

  test("check items based on comments if times are equal", async () => {
    let item1 = {
      comments_count: 2,
      time: 2,
    };
    let item2 = {
      comments_count: 1,
      time: 2,
    };

    let result = compare(item1, item2);
    expect(result).toBe(-1);
  });
});
