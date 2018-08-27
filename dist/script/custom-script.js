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
	                { btClass: 'is-default', url: 'https://github.com/private-ryan23', content: 'Tweet', icons: 'fab fa-facebook-messenger' },
	                { btClass: 'is-primary', url: '', content: 'Download', icons: 'fas fa-download' }
	            ]
	        }
		}
	}

	var Helper = function() { }
	Helper.prototype = {
		init: function() { }
	}

})(window)

