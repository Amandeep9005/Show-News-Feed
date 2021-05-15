export const compare = (item1, item2) => {
  // Sort by items
  // If the first item has a higher timestamp, move it down
  // If the first item has a lower timestamp, move it up
  if (item1.time > item2.time) return -1;
  if (item1.time < item2.time) return 1;

  // If the timestamp is same between both items, sort by comments count desc
  if (item1.comments_count > item2.comments_count) return -1;
  if (item1.comments_count < item2.comments_count) return 1;
};
