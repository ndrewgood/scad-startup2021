export default {
    title: 'Responsive Image',
    name: 'responsiveImage',
    type: 'object',
    description: 'An image that has a different apperance on web vs. tablet vs. mobile. For example, padding removed on the mobile version.',
    fields: [
      {name: 'imageWeb', type: 'image', title: 'Web Image', validation: Rule => Rule.required()},
      {name: 'imageMobile', type: 'image', title: 'Mobile Image', validation: Rule => Rule.required()},
    ]
}