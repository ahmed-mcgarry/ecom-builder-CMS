export default defineEventHandler(() => {
  return {
    id: '',
    attributes: {
      slug: '/',
      title: 'Homepage',
      published: true,
      widgets: [
        {
          is: 'BannerSmall',
          name: 'Banner Small',
          content: 'Free standard delivery when you spend £45 or more!',
          id: 1,
          parentId: 'root',
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          name: 'Container Carousel',
          id: 14,
          parentId: 'root',
          slots: [2],
          children: [],
          options: {
            perPage: 1
          },
          showArrows: false,
          fullBleed: true,
          class: 'hero'
        },
        {
          is: 'BannerLarge',
          name: 'Banner Large',
          id: 2,
          parentId: '14',
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          name: 'Container Carousel',
          title: 'Shop Latest Drops',
          subtitle: 'Mens',
          id: 3,
          parentId: 'root',
          slots: [4],
          children: [],
          class: 'pl-4 pr-0 lg:p-4',
          options: {
            perPage: 3
          }
        },
        {
          is: 'CardSimple',
          name: 'Card Simple',
          id: 4,
          parentId: 3,
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          name: 'Container Carousel',
          title: 'Shop by Category',
          subtitle: 'Mens',
          id: 5,
          parentId: 'root',
          slots: [6],
          children: []
        },
        {
          is: 'CardSimple',
          name: 'Card Simple',
          id: 6,
          parentId: 3,
          slots: [],
          children: []
        },
        {
          is: 'BannerSmall',
          name: 'Banner Small',
          content: 'Free standard delivery when you spend £45 or more!',
          id: 7,
          parentId: 'root',
          slots: [],
          children: []
        },
        {
          is: 'BannerLarge',
          name: 'Banner Large',
          id: 8,
          parentId: 'root',
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          name: 'Container Carousel',
          title: 'Shop Latest Drops',
          subtitle: 'Womens',
          id: 9,
          parentId: 'root',
          slots: [10],
          children: []
        },
        {
          is: 'CardSimple',
          name: 'Card Simple',
          id: 10,
          parentId: 9,
          slots: [],
          children: []
        },
        {
          is: 'ContainerCarousel',
          name: 'Container Carousel',
          title: 'Shop by Category',
          subtitle: 'Womens',
          id: 11,
          parentId: 'root',
          slots: [12],
          children: [],
          options: {
            perPage: 3
          }
        },
        {
          is: 'CardSimple',
          name: 'Card Simple',
          id: 12,
          parentId: 11,
          slots: [],
          children: []
        },
        {
          is: 'BannerLarge',
          name: 'Banner Large',
          id: 13,
          parentId: 'root',
          slots: [],
          children: []
        }
      ]
    }
  }
})
