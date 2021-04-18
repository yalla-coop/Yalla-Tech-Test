import functions from '../functions';
import testCases from '../test-cases';

const test = (id, inputType, outputType) => {
  const cb = functions[id];
  const inputs = testCases[id].inputs;
  const outputs = testCases[id].outputs;
  const result = inputs.map((item, index) => {
    const caseResult = cb(item);
    const passed = caseResult === outputs[index];
    return passed
      ? { passed, expected: caseResult }
      : { passed, expected: outputs[index], got: caseResult };
  });
  return result;
};

export default test;
