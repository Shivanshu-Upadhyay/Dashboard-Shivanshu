const findOne = (objArray = [], filter = {}) => {
  const element = objArray.find((data, index) => {
    const key = Object.keys(filter)[0];
    console.log("condition", data[key] === filter[key]);
    return data[key] === filter[key];
  });
  return element;
};
export default findOne;
