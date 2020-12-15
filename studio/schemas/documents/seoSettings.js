export default {
  name: 'seoSettings',
  type: 'document',
  title: 'SEO Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
