import { withKnobs, text, number } from "@storybook/addon-knobs";
export default {
  title: "productcard",
  decorators: [withKnobs]
};

export const productcard = () => ({
  props: {
    title: {
      default: text("title", "MOTOR PARÇALARI")
    },
    subtitle: {
      default: text("subtitle", "Krank Mili")
    },
    bodytext: {
      default: text("bodytext", "Chevrolet Cruze 2013 1.6 Benzinli")
    },
    buttontext: {
      default: text("buttontext", "Hemen Arayın")
    },
    img: {
      default: text("img", "2.png")
    }
  },
  template: "<product-card :img='img' :subtitle='subtitle' :bodytext='bodytext' :buttontext='buttontext' :title='title'> </product-card>"
});
productcard.story = {
  parameters: {
    backgrounds: [{ name: "dark background", value: "#F9F9F9", default: true },]
  }
};
