import title from '../fields/title.js'
import slug from '../fields/slug.js'
import description from '../fields/description.js'
import weight from '../fields/weight.js'

const targets  = {
    name: 'targets',
    label: 'Targets',
    label_singular: 'Target',
    folder: 'content/targets',
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
	weight
    ]
}

export default targets
