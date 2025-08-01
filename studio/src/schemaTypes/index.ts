import {person} from './documents/person'

import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'

import {link} from './objects/link'
import {blockContent} from './objects/blockContent'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  // settings,
  // Documents
  post,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
