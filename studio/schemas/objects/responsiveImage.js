export default {
    title: 'Responsive Image',
    name: 'responsiveImage',
    type: 'object',
    description: 'An image that has a different apperance on web vs. tablet vs. mobile. For example, padding removed on the mobile version.',
    fields: [
      {name: 'imageWeb', type: 'image', title: 'Web Image'},
      {name: 'imageTablet', type: 'image', title: 'Tablet Image'},
      {name: 'imageMobile', type: 'image', title: 'Mobile Image'},
    ]
}