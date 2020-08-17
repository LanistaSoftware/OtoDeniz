import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "center-card-slide",
  decorators: [withKnobs]
};

export const centercardslide = () => ({
  props: {
    img: {
      default: text("img", "Bmw.svg")
    }
  },
  template: "<center-card-slide/>"
});
