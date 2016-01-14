Twitter Map Library
===========

A library for creating a map of tweets, live, from the Twitter API.

This library will allow you to add tweets onto a Google Map, and to perform live sentiment analysis on each tweet that comes in. There are two functions that come with the library:

## Google Maps API - Simple Map

Use the Google Maps API to embed a map in your webpage. Google requires an API key for the map to work. 
Change the latitude, longitude and zoom level of your map.

## addMarker

The addMarker adds a marker to a Google Map on your page. To use this function, supply a latitude, longitude and some text. If you want sentiment analysis to be performed on the text then add a sentiment value. It should look something like this:

addMarker(latitude,longitude,text,sentiment)

addMarker(48.8580119,2.34294, "Hello")

## getTweets

The getTweets function will get all live tweets from an area. To use this function, supply a latitude, longitude, radius and say whether you want the map to update in real time. If you want sentiment analysis to be performed on the text then add a sentiment value - imdb for analysis using machine learning, and dictionary for analysis using dictionary words. See the difference at sentiment.decoded.com

Please make sure you set up your stream at twitter.decoded.com/setup before you use the below functions!

It should look something like this:

getTweets(latitude, longitude, radius, sentiment)

getTweets(48.8580119,2.34294, 500, "update", "imdb")

getTweets(48.8580119,2.34294, 500, "update", "dictionary")
