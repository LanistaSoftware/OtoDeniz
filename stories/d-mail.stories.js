import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "d-mail",
  decorators: [withKnobs]
};

export const dform = () => ({
  template: "<d-mail />"
});
