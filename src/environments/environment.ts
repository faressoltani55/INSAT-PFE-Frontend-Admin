// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: 'a328841a-c099-41ba-9c1b-fb97786d8463',
  authority: 'https://login.microsoftonline.com/57a826bb-a381-4a6f-8cff-87e6376672e9/',
  redirectUrl: 'http://localhost:4200/profile',
  apiBase: 'http://localhost:3000'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
