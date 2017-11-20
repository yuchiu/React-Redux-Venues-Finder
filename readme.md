# Travel Hotspots
Displaying travel hotspot on Google Map based on locations and keywords.


demo:

### view live on [link](https://travel-hotspots.surge.sh)



![demo](https://github.com/yuchiu/travel-hotspots/blob/master/demo.gif)


### Usage 
#### 1. First install package cross-env globally

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost
develop environment, run webpack dev server

```
npm start

```
This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 3b. build dist directory
production environment, run webpack

```
npm run build

```
The minified JS bundle files including the output html file will be store in dist directory.
