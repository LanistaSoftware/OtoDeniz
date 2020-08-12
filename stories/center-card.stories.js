import { withKnobs, text, number } from '@storybook/addon-knobs'
export default {
  title: 'centercard',
  decorators: [withKnobs]

}

export const centercard = () => ({
  props: {
    textVariant: {
      default: text('Text Variant', 'text-dark')
    },
    bgVariant: {
      default: text('Background Variant', 'bg-yellow')
    }
  },
  template: '<center-card></center-card>'
})