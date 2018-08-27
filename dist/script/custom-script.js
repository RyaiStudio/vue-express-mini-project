"use strict";

(function(window) {
	window.elnav = function(){ }
	window.elnav.prototype = {
		data: {
			brand: {
	            url: '/',
	            logo: 'https://bulma.io/images/bulma-logo.png',
	            imgalt: 'Bulma: a modern CSS framework based on Flexbox'
	        },
	        menu: {
	            right: [
	                { url: '', content: 'home', nosub: true, subs: [] },
	                { url: '/about', content: 'about', nosub: false, subs: [
	                    { url: '/overview', content: 'overview' },
	                    { url: '/icons', content: 'icons' }
	                ] }
	            ],
	            buttons: [
	                { btClass: 'is-default', url: 'https://github.com/private-ryan23', content: 'Git', icons: 'fab fa-github' },
	                { btClass: 'is-primary', url: '', content: 'Download', icons: 'fas fa-download' }
	            ],
	            sidebar: [
	            	{ 
	            		label: 'GENERAL',
	            		links: [
	            			{ url: '', content: 'Link One' },
	            			{ url: '', content: 'Link Two' }
	            		]
	            	},
	            	{ 
	            		label: 'ADMIN',
	            		links: [
	            			{ url: '', content: 'Link One' }
	            		]
	            	}
	            ]
	        }
		}
	}

	var Helper = function() { }
	Helper.prototype = {
		init: function() { }
	}

})(window)

