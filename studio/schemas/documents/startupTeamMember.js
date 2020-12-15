import React from 'react'

export default {
  name: 'startupTeamMember',
  title: 'Team Member',
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
      name: 'picture',
      title: 'Picture',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
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
      name: 'name',
      title: 'title',
      media: 'picture'
    },
    prepare({name = '...', title, media}) {
      return {
        title: name,
        subtitle: title,
        media
      }
    }
  }
}
