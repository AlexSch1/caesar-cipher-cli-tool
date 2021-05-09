module.exports.isIntegerNum = (value) => {
  if (value instanceof Number) value = value.valueOf();

  return isFinite(value) && value === parseInt(value, 10);
};

module.exports.isNAN = (value) => {
  return (value instanceof Number||typeof value === 'number') && !isNaN(value);
}
