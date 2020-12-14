// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import partner from './documents/partner'
import siteSettings from './documents/siteSettings'
import collaborators from './documents/collaborators'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import simplePortableText from './objects/simplePortableText'
import contentImage from './objects/contentImage'
import content from './objects/content'
import contentBar from './objects/contentBar'
import driveVideo from './objects/driveVideo'





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'startup',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    simplePortableText,
    contentImage,
    content,
    contentBar,
    driveVideo,
    // The following are document types which will appear
    // in the studio.
    partner,
    siteSettings,
    collaborators
  ])
})
