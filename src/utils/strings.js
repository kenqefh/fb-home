const extractAbbreviate = (name) =>
  name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2);

export { extractAbbreviate };
