import { withKnobs, text, number } from '@storybook/addon-knobs'
export default {
  title: 'loginbutton',
  decorators: [withKnobs]

}

export const loginbutton = () => ({
  props: {
    textVariant: {
      default: text('Text Variant', 'text-dark')
    },
    bgVariant: {
      default: text('Background Variant', 'bg-yellow')
    }
  },
  template: '<login-button ></login-button>'
})