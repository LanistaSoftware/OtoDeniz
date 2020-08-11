import { withKnobs, text, number } from '@storybook/addon-knobs'
export default {
  title: 'dbutton',
  decorators: [withKnobs]

}

export const Button = () => ({
  props: {
    textVariant: {
      default: text('Text Variant', 'text-dark')
    },
    bgVariant: {
      default: text('Background Variant', 'bg-yellow')
    }
  },
  template: '<d-button :textVariant="textVariant" :bgVariant="bgVariant">Test</d-button>'
})