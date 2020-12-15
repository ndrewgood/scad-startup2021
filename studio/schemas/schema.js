// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import partner from './documents/partner'
import team from './documents/team'
import faq from './documents/faq'
import schedule from './documents/schedule'
import startupTeamMember from './documents/startupTeamMember'
import seoSettings from './documents/seoSettings'

// Object types
import simplePortableText from './objects/simplePortableText'





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'startup',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    partner,
    team,
    faq,
    schedule,
    startupTeamMember,
    seoSettings
  ])
})
