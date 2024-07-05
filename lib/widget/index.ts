abstract class Widget {
  id: string
  parentId: string
  slots: string[]
  children: string[]

  constructor (parentId: string) {
    this.id = '0'
    this.parentId = parentId
    this.slots = []
    this.children = []
  }

    abstract createInstance(): Widget;
    abstract getAttributes(): string[];

    addChild (widget: Widget): this {
      this.children.push(widget.id)
      return this
    }

    removeChild (id: string): this {
      this.children = this.children.filter((child: string) => child !== id)
      return this
    }

    appendSlot (widget: string): this {
      this.slots.push(widget)
      return this
    }

    removeSlot (id: string): this {
      this.slots = this.slots.filter((slot: string) => slot !== id)
      return this
    }

    updateParentId (id: string): this {
      this.parentId = id
      return this
    }
}

class BannerSmall extends Widget {
  content: string

  constructor (parentId: string = '') {
    super(parentId)
    this.content = ''
  }

  updateContent (content: string): this {
    this.content = content
    return this
  }

  createInstance (): BannerSmall {
    return new BannerSmall(this.parentId)
  }

  getAttributes (): any[] {
    return [{ attribute: 'AttributeContent', description: 'Update small banner content', placeholder: 'Update content here' }]
  }
}

class CardSimple extends Widget {
  constructor (parentId: string = '') {
    super(parentId)
  }

  createInstance (): CardSimple {
    return new CardSimple(this.parentId)
  }

  getAttributes (): string[] {
    return ['TextWidget']
  }
}

export const createWidget = (is: string, parentId: string = 'root'): Widget | null => {
  switch (is) {
    case 'BannerSmall':
      return new BannerSmall(parentId)
    case 'CardSimple':
      return new CardSimple(parentId)
    default:
      console.error(`Error creating ${is}`)
      return null
  }
}

export const getWidgetAttributes = (is: string): any[] | null => {
  switch (is) {
    case 'BannerSmall':
      return new BannerSmall().getAttributes()
    case 'CardSimple':
      return new CardSimple().getAttributes()
      // Add other cases here for different types of Widgets
    default:
      console.error(`Error getting ${is} attributes`)
      return null
  }
}

// Usage example:
const banner = createWidget('BannerSmall')
if (banner instanceof BannerSmall) {
  banner.updateContent('Hello World')
}
