import title from '../fields/title.js'
import slug from '../fields/slug.js'
import description from '../fields/description.js'

const actions  = {
    name: 'actions',
    label: 'Actions',
    label_singular: 'Action',
    folder: 'actions',
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
    ]
}

export default actions
