import {format} from 'date-fns'

export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    {
      name: 'display',
      title: 'Displayed?',
      type: 'boolean'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'link',
      title: 'URL Link',
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'name',
      type: 'type',
      media: 'logo'
    },
    prepare({title = '...', type, media}) {
      return {
        title,
        media,
        type
      }
    }
  }
}
