const countingDuplicates = ({ text }) => {
  const result = text
    .toLowerCase()
    .split('')
    .reduce(
      (acc, item) => {
        const isExist = acc[item];
        return isExist
          ? {
              ...acc,
              [item]: acc[item] + 1,
              value: isExist > 1 ? acc.value : acc.value + 1,
            }
          : { ...acc, [item]: 1, value: acc.value };
      },
      { value: 0 }
    );

  return result.value;
};

export default countingDuplicates;
