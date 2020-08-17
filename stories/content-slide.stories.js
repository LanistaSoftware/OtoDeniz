import { withKnobs, text } from '@storybook/addon-knobs'
export default {
  title: 'contentslide',
  decorators: [withKnobs]

}

export const contentslide = () => ({
  props: {
    title: {
      default: text('title', 'Bölgenin en geniş yedek parça ağı')
    },
    img: {
      default: text('img', '1.svg')
    }
  },
  template: '<content-slide></content-slide>'
})