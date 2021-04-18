import Result from '.';

export default {
  title: 'Common Components/Result',
  component: Result,
  argTypes: {
    cases: [true, true, true, false],
  },
};

const ResultContainer = (args) => (
  <div style={{ width: 400 }}>
    <Result {...args}>Heading 1</Result>
  </div>
);

export const Case1 = ResultContainer.bind({});
ResultContainer.args = {
  cases: [true, true, true, false],
};
