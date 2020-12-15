import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import Emoji from 'react-emoji-render'

const hiddenDocTypes = listItem =>
  !['partner', 'team', 'faq', 'startupTeamMember', 'schedule', 'seoSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('scadstartup.com')
    .items([
      S.listItem()
        .title('SEO Settings')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="⚙️" />)
        .child(
          S.editor()
            .id('seoSettings')
            .schemaType('seoSettings')
            .documentId('seoSettings')
        ),
      S.listItem()
        .title('Partners')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="🤝" />)
        .schemaType('partner')
        .child(S.documentTypeList('partner').title('Partners')),
      S.listItem()
        .title('Showcase Teams')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="🏆" />)
        .schemaType('team')
        .child(S.documentTypeList('team').title('Teams')),
      S.listItem()
        .title('FAQ Blocks')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="❓" />)
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('FAQ Blocks')),
      S.listItem()
        .title('StartUp Team')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="💛" />)
        .schemaType('startupTeamMember')
        .child(S.documentTypeList('startupTeamMember').title('StartUp Team')),
      S.listItem()
        .title('Schedule Blocks')
        .icon(() => <Emoji style={{ fontSize: 30 }} text="🗓" />)
        .schemaType('schedule')
        .child(S.documentTypeList('schedule').title('Schedule Blocks')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
