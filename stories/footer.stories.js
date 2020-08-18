import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "footer",
  decorators: [withKnobs]
};

export const footer = () => ({
  template: "<d-footer />"
});
