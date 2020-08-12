import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "productcard",
  decorators: [withKnobs]
};

export const productcard = () => ({
  props: {
    title: {
      default: text("title", "Bölgenin en geniş yedek parça ağı")
    },
    img: {
      default: text("img", "1.svg")
    }
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" }
      ]
    }
  },
  template: "<product-card> </product-card>"
});
productcard.story = {
  parameters: {
    backgrounds: [{ name: "dark background", value: "#F9F9F9", default: true }]
  }
};
