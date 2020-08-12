import { withKnobs, text, number } from '@storybook/addon-knobs'
export default {
  title: 'centercard',
  decorators: [withKnobs]

}

export const centercard = () => ({
  props: {
    title: {
      default: text('title', 'Bölgenin en geniş yedek parça ağı')
    },
    img: {
      default: text('img', '1.svg')
    }
  },
  template: '<center-card :title="title" :img="img"> Van ve çevre iller bazında mevcut en geniş yedek parça ağı</center-card>'
})