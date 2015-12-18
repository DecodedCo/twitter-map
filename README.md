Twitter Map Library
===========

A library for creating a map of live tweets from the Twitter API.

This library will allow you to add tweets onto a Google Map, and to perform live sentiment analysis on each tweet that comes in. There are two functions that come with the library, `addMarker()` and `startStream()`:

## configure your stream

You can configure a number of settings for the tweets you display.

To set default parameters for your map when the map loads:

```
var controller = {};

var mapConfigs = {
   latitude: 51.5044477,
   longitude: -0.130291,
   radius: 5000,
   sentiment: 'imdb' // can be 'dictionary' or 'imdb'
};

function pageControlsInit () {
  // This is where the addMarker() and/or startStream() functions go.
};
```

To configure sentiment marker settings:

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
};
```


## addMarker

The `addMarker()` function adds a single marker to a Google Map on your page. This function needs to be added within the `pageControlsInit()` function. To use `addMarker()`, supply a latitude, longitude and some text. If you want sentiment analysis to be performed on the text then add either 'dictionary' or 'imdb'. It should look something like this:

```
controller.addMarker(latitude,longitude,text,sentiment);

controller.addMarker(48.8580119,2.34294,'Hello'); // without sentiment analysis

controller.addMarker(48.8580119,2.34294,'Hello','dictionary'); // with sentiment analysis
```

## startStream

Starting the stream will open a twitter stream to your browser and will display many tweets on your map using the parameters you provide. This function needs to be added within the `pageControlsInit()` function. If you don't pass any arguments, the stream will use the default settings you have already set up for your map. Otherwise, you can pass a new latitude and longitude, radius and sentiment.

To start the stream using defaults:

```
controller.startStream();
```

To start the stream using new settings:

```
startStream({
  latitude: 48.8580119,
  longitude: 2.34294,
  radius: 500, // in km
  sentiment: 'imdb' // can be 'dictionary' or 'imdb'
});
```
