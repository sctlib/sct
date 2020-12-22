class ThemeSelect extends HTMLElement {
    constructor() {
	super()
	this.site = document.querySelector('.Site')
	this.themeClass = 'Site--dark'
    }
    connectedCallback() {
	this.render()
    }

    handleClick = () => {
	const isDark = this.site.classList.contains(this.themeClass)
	if (isDark) {
	    this.site.classList.remove(this.themeClass)
	} else {
	    this.site.classList.add(this.themeClass)
	}
    }
    
    render() {
	const $switcher = document.createElement('input')
	$switcher.type = 'checkbox'
	$switcher.title = 'Change Site theme'
	$switcher.onclick = this.handleClick
	this.append($switcher)
    }
}

export default ThemeSelect
