import React from 'react'

export default {
  name: 'faq',
  title: 'Faq Blocks',
  type: 'document',
  fields: [
    {
      name: 'shown',
      title: 'Shown?',
      type: 'boolean',
      validation: Rule => Rule.required(),

    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'simplePortableText',
    },
    {
      name: 'qnaList',
      title: 'Question List',
      type: 'array',
      of: [{type: 'qna'}]
    }
  ],
  orderings: [
    {
      title: 'Order, Desc',
      name: 'orderDesc',
      by: [
        {field: 'order', direction: 'desc'}
      ]
    },
    {
      title: 'Order, Acs',
      name: 'orderDesc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order'
    },
    prepare({title = '...', order}) {
      const letters = [" ", "A","B","C","D","E","F","G","H","I","J","K"]

      return {
        title: title,
        media: <span style={{fontSize: '1.5rem'}}>{order ? letters[order] : '.'}</span>
      }
    }
  }
}
