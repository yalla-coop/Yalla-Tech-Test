const consecutiveStrings = ({ strarr, k }) => {
  if (k <= 0 || k > strarr.length || !strarr) return '';
  let result = '';

  for (let i = 0; i < strarr.length; i++) {
    const combinedStr = strarr.slice(i, i + k).join('');
    if (combinedStr.length > result.length) {
      result = combinedStr;
    }
  }

  return result;
};

export default consecutiveStrings;
