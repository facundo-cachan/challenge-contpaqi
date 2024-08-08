const dateFormat = (date: string) => {
  // Example: "2021-09-03" -> "Sep 03 2021"
  return new Date(date).toString().split(" ").slice(1, 4).join(" ");
};

export { dateFormat };
