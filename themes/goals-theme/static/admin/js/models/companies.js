import title from '../fields/comanies/title.js'
import slug from '../fields/comanies/slug.js'
import description from '../fields/comanies/description.js'
import tags from '../fields/comanies/tags.js'
import companyUrl from '../fields/comanies/companyUrl.js'
import jobBoardUrl from '../fields/comanies/jobBoardUrl.js'
import jobBoardProvider from '../fields/comanies/jobBoardProvider.js'
import jobBoardHostname from '../fields/comanies/jobBoardHostname.js'
import twitterUrl from '../fields/comanies/twitterUrl.js'
import linkedinUrl from '../fields/comanies/linkedinUrl.js'
import instagramUrl from '../fields/comanies/instagramUrl.js'
import facebookUrl from '../fields/comanies/facebookUrl.js'
import cities from '../fields/comanies/cities.js'
import positions from '../fields/comanies/positions.js'
import createdAt from '../fields/comanies/createdAt.js'
import updatedAt from '../fields/comanies/updatedAt.js'

const companies  = {
    name: 'companies',
    label: 'Companies',
    label_singular: 'Company',
    folder: 'companies',
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
	tags,
	companyUrl,
	jobBoardUrl,
	jobBoardProvider,
	jobBoardHostname,
	twitterUrl,
	linkedinUrl,
	instagramUrl,
	facebookUrl,
	cities,
	positions,
	createdAt,
	updatedAt,
    ]
}

export default companies
