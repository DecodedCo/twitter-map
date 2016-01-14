Twitter Map Library
===========

A library for creating a map of tweets, live, from the Twitter API.

This library will allow you to add tweets onto a Google Map, and to perform live sentiment analysis on each tweet that comes in. There are two functions that come with the library:

## Google Maps API - Simple Map

Use the Google Maps API to embed a map in your webpage. Google requires an API key for the map to work. 
Change the latitude, longitude and zoom level of your map. You can style your map very easily, for example using snazzy maps.

## JavaScript

Add the javascript code (tweet-map.js) to your webpage.

## Accessing Twitter

Just below `var map;`, paste:

```
var controller = {};

//Settings for twitter. What lat/lon should it look for? Withing which radius?
var mapConfigs = {
   latitude: 51.5044477,
   longitude: -0.130291,
   radius: 500
}; 
      
function pageControlsInit () {
  //this function will access access the twitter api
}

```

## addMarker


The addMarker adds a marker to a Google Map on your page. To use this function, supply a latitude, longitude and some text. If you want sentiment analysis to be performed on the text then add a sentiment value. It should look something like this:

```
function pageControlsInit () {
  
  //this function will access access the twitter api
  controller.addMarker(51, -0.1, 'This is so great');
  controller.addMarker(51, -0.1, 'This is so great', 'sentiment');

}

```

## Editing the styling of the markers

We can personalise the colours of the bubbles as follows. Above var mapConfigs, paste:

```
var markerConfigs = {
  positive: {
    color: 'rgb(43, 24, 92)',
    strength: 0.5,
    size: 50
  },
  neutral: {
    color: 'rgb(255, 255, 255)',
    strength: 0.8,
    size: 20
  },
  negative: {
    color: 'rgb(0, 0, 0)',
    strength: 0.8,
    size: 20
  }
}
```

## startStream

The startStream function will get all live tweets from an area and the map to update in real time. For sentiment analysis to be performed on the text then add a sentiment value - imdb for analysis using machine learning, and dictionary for analysis using dictionary words. See the difference at sentiment.decoded.com


```
function pageControlsInit () {
  //this function will access access the twitter api
  controller.addMarker(51, -0.1, 'This is so great');
  controller.addMarker(51, -0.1, 'This is so great', 'sentiment');
  
  // Start twitter.
  controller.startStream({
    sentiment: 'imdb'
  });
}

```

