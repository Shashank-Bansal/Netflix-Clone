/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
"use strict";

var precacheConfig = [
  ["Cover/cover.png", "a4eed9351bf45aaee0014f946830a362"],
  ["Images/3i.png", "5fe02a577ba2ab0d8f2f6b6f9ac1efd8"],
  ["Images/Batman.png", "5fcaeeca1af110f67f7fb908e18ea5c0"],
  ["Images/DarkKnight.png", "00552a6dbf7330b0802ccfe384f5be69"],
  ["Images/Spiderman.png", "4b43d22c4919b6a0612f09810c57b4be"],
  ["Images/adam.png", "aa7e6cdbedbd1a7bb81f9c5f48d0568c"],
  ["Images/anotherlife.png", "60a81352861c10054691ebfa223fd9ca"],
  ["Images/audio.png", "bb6f6c5d1b859b743d228ffd0025b38b"],
  ["Images/av.png", "e752f706c736f50cbc0c7be3136c6033"],
  ["Images/bbt.png", "f687343560bb0d4c650c9c885b7c62f2"],
  ["Images/dkRises.png", "eed833ecc9e887a7254791f85e1b321e"],
  ["Images/extraction.png", "d27e970e937ea725d436a15ecdd91e5b"],
  ["Images/gk.png", "1955edb2e02b9380eb33cd7e56ecd741"],
  ["Images/gotham.png", "900cc746fa13a9182b8f67139f0452ad"],
  ["Images/hd.png", "9c5eab2892d385d468d417da553232e9"],
  ["Images/hulk.png", "1ccc44a49d8d2c142b8b978554f9b676"],
  ["Images/image.png", "e1e3be73f63f0d6c4bae943d757b1a96"],
  ["Images/imitationGame.png", "1d90b3d50995f7c69bd5f667f3eaccaf"],
  ["Images/inception.png", "2a04621af18b712e68feb8340ef11635"],
  ["Images/intern.png", "032d7ce30d5984084ead2c1636d5eb1c"],
  ["Images/kk.png", "f9433595f9a8ade986feb4004d2afd68"],
  ["Images/lupin.png", "7c25fa4cd318011d08a4237a3e3ff046"],
  ["Images/mi.png", "7bb0eedbd63b2cb52f1005d312b50cbc"],
  ["Images/money.png", "56c79d1d30140663cf2d67bd44bab231"],
  ["Images/office.png", "efa2dcae3a60d2c4a8128c72452dfd20"],
  ["Images/planet.png", "bec90ec5f1bf7fecd66ab8c908174b1b"],
  ["Images/queens.png", "8c69aaa21e4534643d729cfacd02f9e9"],
  ["Images/rrr.png", "a07ced93f1669b4469b91dcdbfddc915"],
  ["Images/sg.png", "f479e74dcb315b8c1ad4187b0356d006"],
  ["Images/slient.png", "c30872aed2a066c6b8c28eec7b207f0a"],
  ["Images/spaceforce.png", "6ad79f35b4895b7f6051843651c70f78"],
  ["Images/suits.png", "5cd4b4008b3e12e686837ab09580f97b"],
  ["Images/witcher.png", "9124318fd974ed7e304305ea5d44ee39"],
  ["Poster/Blackmirror.jpg", "585aa1be99b571f46d23dc2c843353b2"],
  ["Poster/Edge-of-Tomorrow.jpg", "1bd5332452a4da6866c965b686b5643d"],
  ["Poster/Khakee.jpg", "4d208b85f8cbb54b7da719674323a6a0"],
  ["Poster/Source-Code.jpg", "a9513fa1c0a6a35c81f0611ad2e4e52f"],
  ["Poster/Tenet.jpg", "19a75213e4e4833c6cb7da44afe350e5"],
  ["Poster/Witcher.jpg", "a704ddf133bc94c6985935a41b0b4e67"],
  ["Poster/alice.jpg", "c3ba8c0a11669c9bddcbea6d9d6017fa"],
  ["Poster/daredevil.jpg", "3e960f6d885e3692441ef2df31111b29"],
  ["Poster/dontbreathe.jpg", "f389053919f31dac36266267b6d466eb"],
  ["Poster/fauda.jpg", "66af26335b030573651bcdfd691d9682"],
  ["Poster/gotham.jpg", "2e9ce7b957397c7d50a2f88a35fa38f0"],
  ["Poster/imitationGame.jpg", "1f3ed639f39d8e6a97b8e4d0598dac65"],
  ["Poster/inception.jpg", "93d3ed8fe3d451391f6135cb20e1b6ca"],
  ["Poster/junge.jpg", "be34514b1554244e84bb4f26925c6cf8"],
  ["Poster/kaleidoscope.jpg", "5a4b9890933891c42a5a677efd87ccc1"],
  ["Poster/kantara.jpg", "7e069ba79855a20394bf508ee1ef62e4"],
  ["Poster/kungFuPanda.jpg", "fc6b19c9ca5d7cd4ce2d582efa1a24e7"],
  ["Poster/lastofus.jpg", "95f805a9ddfc10a41a9ad97738ffbdfd"],
  ["Poster/matrix.jpg", "60442aa71a7b3dace226b0d275b83693"],
  ["Poster/office.jpg", "853ef165a539dcbb4eaa217cbb61a2d3"],
  ["Poster/panda.jpg", "8d5de6a67afaa30390bd8ebbbf9b42e2"],
  ["Poster/quietPlacejpg.jpg", "0f4a683706e616e1b4c4050d0b1f9560"],
  ["Poster/rrr.jpg", "143c835b05cdff42683d3c9feacdd50f"],
  ["Poster/sherlock.jpg", "cf22207f55189c95be168afff95f56c9"],
  ["Poster/vv.jpg", "8d1d59f19b79800eb0e30d631d1f4c59"],
  ["Poster/wednesday.jpg", "3c131fdbb8b04e088981eec046c94008"],
  ["Profile/Children.png", "eb7e9d8415bbecc741d23e3ee742a749"],
  ["Profile/Profile.png", "5cad8c55243d161108ac63d47be334cb"],
  ["Profile/Profile2.png", "e012cd2591fecdd8b0c7d98bdb7b9451"],
  ["Profile/Profile3.png", "237c713ca072fec59387a7380c611e07"],
  ["Profile/Profile4.png", "45b05023be6881b8a82715357830b68c"],
  ["README.md", "286d7c35d8894b69f7b5776f6b00cdcd"],
  ["Rank/eight.png", "a24d1d1c0aa4b6adfaf67ec59a863e69"],
  ["Rank/five.png", "a0edd0156142a625073f58d2e4263810"],
  ["Rank/four.png", "6330b4eb514b03d14b8a0e6d04e3d73a"],
  ["Rank/nine.png", "16731f212239e71820fb93a4e2a1e558"],
  ["Rank/one.png", "22c7e950073fecbb6bd43afb50197416"],
  ["Rank/seven.png", "3d3884eb573d39919078845f7738ef07"],
  ["Rank/six.png", "37d47e5dd76e8b583e8ec1c5fdc7ce0c"],
  ["Rank/ten.png", "b94856c093c4150e6a54ebe9235ea0ba"],
  ["Rank/three.png", "d7d08993495ddaf520eb5975d2925a59"],
  ["Rank/two.png", "140930458e1fe6d9078662f216f653b3"],
  ["index.html", "6f449a66ca97ee663c618463a862035c"],
  ["index.js", "d7a3e71f6ac5a8841fe2ae127f475c19"],
  ["logo192.png", "9e46e0e8e35adee39a554e379c430906"],
  ["logo512.png", "2dbb56657e18b3de14d8617cc524a8db"],
  ["manifest.json", "a07eb07d2c4d71bda4f34eceb10048d1"],
  ["netflixLogo.ico", "70f86887d6405c63f6df93128480d449"],
  ["netflix_official_logo.png", "aa747adb35dc86f6211c7b48cee79552"],
  ["package-lock.json", "09d444609eaf482477003ab8a05891f4"],
  ["package.json", "a33fd6ac85d03190442ef98e0d184b73"],
  ["style.css", "7be566cf80d2840fc2c1b495bbfd5c23"],
];

var cacheName =
  "sw-precache-v3-sw-precache-" +
  (self.registration ? self.registration.scope : "");

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === "/") {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise =
    "body" in originalResponse
      ? Promise.resolve(originalResponse.body)
      : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (
  originalUrl,
  paramName,
  paramValue,
  dontCacheBustUrlsMatching
) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (
    !dontCacheBustUrlsMatching ||
    !url.pathname.match(dontCacheBustUrlsMatching)
  ) {
    url.search +=
      (url.search ? "&" : "") +
      encodeURIComponent(paramName) +
      "=" +
      encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (
  originalUrl,
  ignoreUrlParametersMatching
) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = "";

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split("&") // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split("="); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join("="); // Join each [key, value] array into a 'key=value' string
    })
    .join("&"); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = "_sw-precache";
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {
                  credentials: "same-origin",
                });
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error(
                      "Request for " +
                        cacheKey +
                        " returned a " +
                        "response with status " +
                        response.status
                    );
                  }

                  return cleanResponse(response).then(
                    function (responseToCache) {
                      return cache.put(cacheKey, responseToCache);
                    }
                  );
                });
              }
            })
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            })
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(
      event.request.url,
      ignoreUrlParametersMatching
    );
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = "index.html";
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = "";
    if (
      !shouldRespond &&
      navigateFallback &&
      event.request.mode === "navigate" &&
      isPathWhitelisted([], event.request.url)
    ) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache
              .match(urlsToCacheKeys.get(url))
              .then(function (response) {
                if (response) {
                  return response;
                }
                throw Error(
                  "The cached response that was expected is missing."
                );
              });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              event.request.url,
              e
            );
            return fetch(event.request);
          })
      );
    }
  }
});
