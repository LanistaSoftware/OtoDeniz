import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "dlogo",
  decorators: [withKnobs]
};

export const dlogo = () => ({
  props: {
    img: {
      default: text("img", "Bmw.svg")
    }
  },
  template: "<d-logo :img='img'/>"
});
