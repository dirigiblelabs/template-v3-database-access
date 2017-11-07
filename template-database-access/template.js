exports.getTemplate = function() {
	return {
		"name": "Database Access",
		"description": "Database Access Template",
		"sources": [{
			"location": "/template-database-access/service.js.tmpl", 
			"action": "generate",
			"rename": "{{fileName}}.js"
		}],
		"parameters": []
	};
};
