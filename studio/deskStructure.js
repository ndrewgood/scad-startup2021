import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import Emoji from 'react-emoji-render'

const hiddenDocTypes = listItem =>
  !['partner', 'siteSettings', 'collaborators'].includes(listItem.getId())

export default () =>
  S.list()
    .title('scadstartup.com')
    .items([
      S.listItem()
        .title('Settings')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="⚙️" />)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Partners')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="🤝" />)
        .schemaType('partner')
        .child(S.documentTypeList('partner').title('Partner')),
      S.listItem()
        .title('Collaborators')
        .schemaType('collaborators')
        .child(S.documentTypeList('collaborators').title('Collaborators')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
