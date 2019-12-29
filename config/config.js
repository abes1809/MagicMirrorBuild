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
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_left"
		},
		{
		    module: 'MMM-3Day-Forecast',
		    position: 'top_right',
			config: {
				api_key: '17dfde244e72472cbbb047648f090eb0',
				lat: 41.881832,
				lon: -87.623177,
				units: 'I',
				lang: 'en',
				interval: 900000,
			}
		},
		 {
			module: 'MMM-CTA',
			position: 'bottom_left',
			config: {
				updateTime: 60000, // 1 minute, the API does not update much more often so going below this is unnecessary
				ctaApiKey: 'dnjV5cnuFmjQE4U5qEY9kK79u',
				busStopName: 'Halsted & 31st',  // String value, Name your bus stop
				stopId: 16050, // Bus station ID: Chicago and Milwaukee example; go to http://www.transitchicago.com/riding_cta/systemguide/default.aspx to find your stop ID
				maxResult: 1,  // The maximum number of incoming bussesy you want to display for bus stops
				ctaApiKeyTrain: '271161f8ac984a84a88210339a06f553',
				trainStopName: 'Halsted',  //String value, name your train stop
				trainStationID: 41130, //Train station ID:  Chicago Blue line example; http://www.transitchicago.com/developers/ttdocs/default.aspx#_Toc296199909
				maxResultTrain: 5, // Max number of incoming trains to disply
				moduleInstance: 1, // To run multiple instances of this module
			},
		 }
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}