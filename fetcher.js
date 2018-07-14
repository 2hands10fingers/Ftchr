var fetch = require('node-fetch');
const print = (promise) => promise.then(console.log)

const Ftchr = (link) => {

	function jsonReturn() {
		
		return fetch(link)
				.then( response => response.json() )
				.then( jsonData => jsonData )
	}

	function fetchThis(selection) {
		return fetch(link)
				.then( response => response.json() )
				.then( data 	=> data.map( i => i[selection]) )
	}	

	function show(object) {
		var settings
			defaultSettings = { prettify: false, tabs: null };

		if (typeof object === undefined) 
			object = null

		function formatJSON(jsonData) {
			if (defaultSettings.prettify) {
				return JSON.stringify(jsonData, null, settings.tabs)	
			} else {
				return jsonData
			}
		}

		if (typeof object === 'object') {
			settings = Object.assign(defaultSettings, object)
		} else {
			defaultSettings = Object.assign(defaultSettings, defaultSettings)
		}
		
		return fetch(link)
				.then( response => response.json())
				.then( data 	=> formatJSON(data))
	}

	return {
		getThis: data   => fetchThis(data),
		show: 	 object => show(object),
		json:  jsonData => jsonReturn()
	}
}








  