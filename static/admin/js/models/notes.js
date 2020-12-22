import title from '../fields/title.js'
import slug from '../fields/slug.js'
import description from '../fields/description.js'
import body from '../fields/body.js'

const notes  = {
    name: 'notes',
    label: 'Notes',
    label_singular: 'Note',
    folder: 'content/notes',
    media_folder: '',
    path: '{{slug}}/index',
    create: true,
    slug: '{{title}}',
    editor: {
	preview: false
    },
    fields: [
	title,
	slug,
	description,
	body
    ]
}

export default notes
