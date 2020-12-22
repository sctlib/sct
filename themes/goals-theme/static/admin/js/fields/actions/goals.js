export default {
    label: 'Goals',
    name: 'goals',
    widget: 'list',
    required: false,
    hint: 'A list of Goals, this action is related to.',
    field: {
	label: 'Goal',
	name: 'goal',
	widget: 'relation',
	collection: 'goals',
	searchFields: ['title', 'slug', 'description'],
	valueField: 'slug',
	displayFields: ['title'],
	hint: 'To which Goal belong this action?'
    }
}
