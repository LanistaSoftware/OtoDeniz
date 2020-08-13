import { withKnobs, text } from '@storybook/addon-knobs'
export default {
  title: 'input',
  decorators: [withKnobs]

}

export const input = () => ({
  props: {
    title: {
      default: text('title', 'Bölgenin en geniş yedek parça ağı')
    },
    img: {
      default: text('img', '1.svg')
    }
  },
  template: '<d-input sm/>'
})
export const searchinput = () => ({
  props: {
    title: {
      default: text('title', 'Bölgenin en geniş yedek parça ağı')
    },
    img: {
      default: text('img', '1.svg')
    }
  },
  template: '<d-search />'
})