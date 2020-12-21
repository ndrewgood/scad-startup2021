/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'simplePortableText'
 *  }
 */
export default {
    title: 'Question & Answer',
    name: 'qna',
    type: 'object',
    fields: [
      {name: 'question', type: 'string', title: 'Question'},
      {name: 'answer', type: 'string', title: 'Answer'},
    ],
    preview: {
      select: {
        title: 'question',
        subtitle: 'answer'
      }
    }
}
  