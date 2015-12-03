Twitter Map Library
===========

A library for creating a map of tweets, live, from the Twitter API.

This library will allow you to add tweets onto a Google Map, and to perform live sentiment analysis on each tweet that comes in. There are two functions that come with the library:

## configure your stream

You can configure a number of settings for your client.

To set default parameters for your map on load:

```
var mapConfigs = {
   latitude: 51.5044477,
   longitude: -0.130291,
   radius: 5000,
   sentiment: 'sentiment'
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

The addMarker adds a marker to a Google Map on your page. To use this function, supply a latitude, longitude and some text. If you want sentiment analysis to be performed on the text then add a sentiment value. It should look something like this:

```
controller.addMarker(latitude,longitude,text,sentiment)

controller.addMarker(48.8580119,2.34294, "Hello")
```

## startStream

Starting the stream will open a twitter stream to your browser. If you don't pass any arguments, the stream will use the default settings you have already set up for your map. Otherwise, you can pass a new lattitude and longitude, radius and sentiment.

To start the stream using defaults:

```
controller.startStream();
```

To start the stream using new settings:

```
startStream({
  lattitude: 48.8580119, //e.g.
  longitude: 2.34294,
  radius: 500, //== 500 km
  sentiment: 'sentiment' //acceptible arguments are 'sentiment' and 'imdb'
});
```
