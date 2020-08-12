import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'ContentCard',
  decorators: [withKnobs]

}

export const Content_Card = () => ({
  components: {
  },
  props: {
    buttontext: {
      default: text('buttontext', 'Hemen arayın')
    },
    img: {
      default: text('img', '1.png')
    },
    img: {
      default: text('img', '1.png')
    },
    title: {
      default: text('title', 'Bölgedeki en iyi yedek parçaları keşfedin')
    }
  },
  template: '<content-card :title="title" :buttontext="buttontext" :img="img">Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin en iyi yedek parça marketi Deniz Oto ve Yedek Parça da haftanın her günü bulabilirsiniz.</content-card>'
})