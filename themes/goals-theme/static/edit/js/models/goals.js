import title from '../fields/title.js'
import slug from '../fields/slug.js'
import description from '../fields/description.js'
import weight from '../fields/weight.js'

const goals  = {
    name: 'goals',
    label: 'Goals',
    label_singular: 'Goal',
    folder: 'content/goals',
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

export default goals
