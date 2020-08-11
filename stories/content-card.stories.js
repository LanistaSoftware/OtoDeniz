import { withKnobs, text, number } from '@storybook/addon-knobs'

export default {
  title: 'ContentCard',
  decorators: [withKnobs]

}

export const Content_Card = () => ({
  components: {
  },
  props: {
    textVariant: {
      default: text('Text Variant', 'text-dark')
    },
    bgVariant: {
      default: text('Background Variant', 'bg-yellow')
    }
  },
  template: '<content-card/>'
})