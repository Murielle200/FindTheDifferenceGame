// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const String baseUrl = 'http://localhost:3000';

const Map<String, dynamic> environment = {
  'production': false,
  'serverUrl': '$baseUrl/api',
  'uploadUrl': '$baseUrl/uploads',
  'socketUrl': baseUrl,
  'googleClientId':
      '1016759648975-if5phimnog4do0g4dkd2ankimtrkslvb.apps.googleusercontent.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.