# GSK Tech Hub
A central tech hub for GSK Employees. An efficient way to manage all company notifications in one platform. 

Reach out to me at vml39@cornell.edu if you have any questions! 

To run the app:
1. Download the code 
2. On Google Chrome, visit [chrome://extensions](chrome://extensions)
3. Turn on developer mode
4. Load Unpacked - unpack the extension and app separately
5. The extension should pop up on the top right of your browser (next to the current page URL)
6. Visit the app by going to [chrome://apps](chrome://apps) - it'll download on your computer's HomeDirectory/Applications/Chrome Apps

## Current Progress
* Prototype of extension & web app
* Sketch of mobile app
* UI of extension & web app 
* Hard-coded data and screenshots in place of real data


## Next steps
Note: Follow GSK's style guide on Marketplace after its launch.

### Extension
* Integrate external apps - [Chrome Identity API](http://developer.chrome.com/apps/identity.html)
* Implement notifications

### Web App
* Consider moving the app off of Chrome - research Chrome's limitations on integrating external apps
* If possible, integrate external apps to allow users to send & recieve messages from the app
* Connect the bookmarks function with Chrome: when a user bookmarks a page on their browser, they can add it to the Tech Hub app
* Create a backend API for the exchange of data on each user's customized hub (which apps are enabled, personal bookmarks, etc.)
* Allow users to select WorkPlace groups to display in their hub

### Mobile App
* Design & implement!

### Additional Features
* Tasks (see Wunderlist as an example) & Reminders
* Push notifications: [Google Developers](https://developers.google.com/web/fundamentals/push-notifications/how-push-works), [Chrome Samples](https://github.com/GoogleChrome/samples/blob/gh-pages/push-messaging-and-notifications/index.html)
* Integration of search functions
* Integration of chatbots (Kay)
* Do not disturb on mobile 


## Resources
* [Manifest file](https://developer.chrome.com/apps/manifest) - essential to all Chrome apps
* [Mobile Chrome apps](https://developer.chrome.com/apps/chrome_apps_on_mobile)
* [Chrome app examples](https://github.com/GoogleChrome/chrome-app-samples)
* Registering the app with [Microsoft](https://docs.microsoft.com/en-us/outlook/rest/get-started)
* Using the [Microsoft Graph API](https://docs.microsoft.com/en-us/outlook/rest/javascript-tutorial)
* Chrome app authentication [example](https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/github-auth) with Github
* Learn from the Cisco WebEx Ext+App