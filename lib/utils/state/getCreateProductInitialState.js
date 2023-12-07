import formatToBrowserDateFormat from "../date/formatToBrowserDateFormat";

const getCreateProductInitialState = () => {
  const supportedDateFormat = formatToBrowserDateFormat(
    new Date().toLocaleDateString()
  );
  return {
    name: "",
    price: 0,
    description: "",
    createdAt: supportedDateFormat
  };
};

export default getCreateProductInitialState;