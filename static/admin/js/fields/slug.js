import patternPath from '../utils/pattern-path.js'

export default {
    label: 'Slug',
    name: 'slug',
    widget: 'string',
    required: true,
    hint: 'The Slug is the text used in the URL specific to this item: https://example.com/my-slug ; where "my-slug", is the slug',
    pattern: patternPath
}
