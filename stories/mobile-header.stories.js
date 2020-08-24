import { withKnobs} from "@storybook/addon-knobs";
export default {
  title: "mobile header",
  decorators: [withKnobs]
};

export const mobile_header = () => ({
  template: "<mobile-header />"
});
