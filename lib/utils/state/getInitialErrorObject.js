const getInitialErrorObject = values =>
  Object.fromEntries(Object.keys(values).map(key => [key, ""]));

export default getInitialErrorObject;
