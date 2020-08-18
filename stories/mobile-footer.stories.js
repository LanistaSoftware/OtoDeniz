import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "mobile footer",
  decorators: [withKnobs]
};

export const mobile_footer = () => ({
  template: "<mobile-footer />"
});
