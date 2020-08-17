import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "logo-slide",
  decorators: [withKnobs]
};

export const logoslide = () => ({
  props: {
    img: {
      default: text("img", "Bmw.svg")
    }
  },
  template: "<logo-slide/>"
});
