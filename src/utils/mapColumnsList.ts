export const mapColumnsList = (data) =>
  data.columns.reduce((acc, curr) => {
    if (!acc[curr.function]) {
      acc[curr.function] = [];
    }
    acc[curr.function].push(curr.name);
    return acc;
  }, {});
