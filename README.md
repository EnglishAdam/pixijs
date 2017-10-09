# pixijs
This respository is for the development of PixiJS

## Installation
PixiJS runs within the \<canvas\> tag of an html file. To view these on your desktop, you'll need to self host the files on an http server. An easy way to do this is to use 'http-server', installing it globally, then running it to host your PixiJS projects.

```javascript
npm install http-server -g
```

## Start Server
Within the PixiJS folder, start up a console/command prompt, then start the http server via:

```javascript
http-server
```

## View Projects
Simple go to the url presentd by 'http-server' and navigate to the project.

### Notes
* If you are view these while offline, you'll need to relink the PixiJS library from Node Modules, as currently it is retrieved from the online CDN.