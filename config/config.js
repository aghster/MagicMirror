/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0",   // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [],                                       // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",
	serverOnly:  true ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar_monthly",
			position: "top_left",
			config: {
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: 'darksky',
				apiBase: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net',
				weatherEndpoint: '/forecast',
				apiKey: '19cbc3b59ada2c4e714717dc7862151c',
				lat: 47.9817,
				lon: 7.8959,
				type: 'current'
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: 'darksky',
				apiBase: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net',
				weatherEndpoint: '/forecast',
				apiKey: '19cbc3b59ada2c4e714717dc7862151c',
				lat: 47.9817,
				lon: 7.8959,
				type: 'forecast'
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "FAZ",
						url: "http://www.faz.net/rss/aktuell/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: false,
				broadcastNewsUpdates: false,
				showDescription: true,
				updateInterval: 30000
			}
		},
		{
			module: 'MMM-SoccerLiveScore',
			position: 'top_left',
			config: {
				leagues: [35],
				showNames: true,
				showLogos: false,
				showTables: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
