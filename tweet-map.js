/*!
 * Twitter Sentiment Map v1.2
 * By Decoded for Data in a Day (http://decoded.com)
 *
 *
 * Copyright 2014 Decoded
 * Released under the MIT license
 *
 *
 */

function async_load (source, done){
  $.getScript(source, done);
}

var controller = window.controller || null;

document.addEventListener('DOMContentLoaded', function () {
  var sources = [
    'https://internal.decoded.com/data/twitter/js/TweetModel.js',
    'https://internal.decoded.com/data/twitter/js/MapModel.js',
    'https://internal.decoded.com/data/twitter/js/TweetMapController.js'
  ];
  var postLoad = function () {
    var mapConfigs = window.mapConfigs || {};
    mapConfigs.mainMarker = false;
    mapConfigs.url = 'wss://internal.decoded.com/data/twitter/stream/';
    mapConfigs.map = window.map;
    $('body').bind('controllerLoaded', window.pageControlsInit);
    controller = new TweetMapController(mapConfigs);
    $('body').trigger('controllerLoaded');
    if (typeof window.markerConfigs === 'object') {
      controller.setMarkerProperties(window.markerConfigs);
    }
  };

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  var i = 0;
  var loadSources = function () {
    async_load(sources[i], function () {
      i++;
      if (sources[i]) {
        loadSources();
      } else {
        postLoad();
      }
    });
  };

  var checkReady = function() {
    if (typeof $ !== 'undefined') {
      loadSources();
    }
    else {
      setTimeout(checkReady, 100);
    }
  };
  checkReady();
});