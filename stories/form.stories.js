import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "dform",
  decorators: [withKnobs]
};

export const dform = () => ({
  template: "<d-form sm/>"
});
