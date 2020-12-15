import React from 'react'

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'shown',
      title: 'Shown?',
      type: 'boolean',
      validation: Rule => Rule.required(),

    },
    {
      name: 'teamName',
      title: 'Team Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'zoomLink',
      title: 'Zoom Link',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'track',
      title: 'Track',
      type: 'string',
      options: {
        list: [{title: 'Entrepreneurship', value: 'global'}, {title:'Local Business', value: 'local'}],
        layout: 'radio'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'slogan',
      title: 'Slogan/Product Name',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'teamName',
      slogan: 'slogan',
      track: 'track'
    },
    prepare({title = '...', slogan, track}) {
      return {
        title: title,
        subtitle: slogan,
        media: <span style={{fontSize: '1.5rem'}}>{track == "global" ? '🌐' : track == "local" ? '🏡' : '.'}</span>
      }
    }
  }
}
