import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "header",
  decorators: [withKnobs]
};

export const header = () => ({
  props: {
    img: {
      default: text("img", "Bmw.svg")
    }
  },
  template: "<d-header />"
});
