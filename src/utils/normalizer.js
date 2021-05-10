function normalizer(key, value) {
  return (data, item) => {
    // eslint-disable-next-line no-param-reassign
    data[item[key]] = item[value];
    return data;
  };
}
export default normalizer;
