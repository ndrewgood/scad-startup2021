import React from 'react'

export default {
  name: 'schedule',
  title: 'schedule',
  type: 'document',
  fields: [
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
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'linkShown',
      title: 'Link Shown?',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Zoom Link',
      type: 'url'
    }
  ],
  orderings: [
    {
      title: 'Date, Desc',
      name: 'orderDesc',
      by: [
        {field: 'order', direction: 'desc'}
      ]
    },
    {
      title: 'Order, Acs',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      time: 'time',
      link: 'linkShown'
    },
    prepare({title = '...', time, link}) {

      return {
        title: title,
        subtitle: time,
        media: <span style={{fontSize: '1.5rem'}}>{link ? '✅' : '⏳'}</span>
      }
    }
  }
}
