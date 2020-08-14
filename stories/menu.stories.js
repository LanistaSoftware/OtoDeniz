import { withKnobs } from "@storybook/addon-knobs";
export default {
  title: "menu",
  decorators: [withKnobs]
};

export const menu = () => ({
  template: "<header-menu/>"
});
