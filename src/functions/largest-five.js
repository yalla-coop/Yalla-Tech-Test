const largestFive = ({ digits }) => {
  //todo
  console.log({ digits });
  let fiveDigitsNumbers = [];
  const digitsArray = digits.split('');

  digitsArray.forEach((number, index) => {
    if (index + 5 > digitsArray.length) return;
    const fiveDigitNumber = digitsArray.slice(index, index + 5).join('');
    fiveDigitsNumbers = [...fiveDigitsNumbers, fiveDigitNumber];
  });

  const result = Math.max(...fiveDigitsNumbers);
  console.log({ result });
  return result;
};

export default largestFive;
