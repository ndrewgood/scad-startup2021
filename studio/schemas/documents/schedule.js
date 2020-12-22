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
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'requiredAttendance',
      title: 'Required Attendance Text',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'imagePosition',
      title: 'Image Right?',
      type: 'boolean',
    },
    {
      name: 'size',
      title: 'Card Width (Desktop)',
      type: 'string',
      options: {
        list: [{title: '50%', value: '5'}, {title:'40%', value: '4'}, {title:'60%', value: '6'}, {title:'100%', value: 'full'}],
        layout: 'radio'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'background',
      title: 'Gradient Background',
      type: 'boolean',
      validation: Rule => Rule.required(),
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
