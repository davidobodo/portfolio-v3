if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/391.db01b08cdd09a72a.js",revision:"db01b08cdd09a72a"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-8ba0688acd913e7a.js",revision:"8ba0688acd913e7a"},{url:"/_next/static/chunks/pages/404-4aeed60e6ae84686.js",revision:"4aeed60e6ae84686"},{url:"/_next/static/chunks/pages/_app-6bd30e6899911be8.js",revision:"6bd30e6899911be8"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/credits-bad2b6c3b9047fbf.js",revision:"bad2b6c3b9047fbf"},{url:"/_next/static/chunks/pages/index-6fb2c26566877202.js",revision:"6fb2c26566877202"},{url:"/_next/static/chunks/pages/letters-7874006f69aa254a.js",revision:"7874006f69aa254a"},{url:"/_next/static/chunks/pages/projects-2cd234ceabcef5a9.js",revision:"2cd234ceabcef5a9"},{url:"/_next/static/chunks/pages/projects/%5Bid%5D-6a8bb4ff5532c2b7.js",revision:"6a8bb4ff5532c2b7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-76e15ba1dd75c422.js",revision:"76e15ba1dd75c422"},{url:"/_next/static/css/44ffa814bfc56c43.css",revision:"44ffa814bfc56c43"},{url:"/_next/static/css/6cd7474395a346f5.css",revision:"6cd7474395a346f5"},{url:"/_next/static/css/8bf6484ad1432d1e.css",revision:"8bf6484ad1432d1e"},{url:"/_next/static/css/a7cf79e5dd6e2c01.css",revision:"a7cf79e5dd6e2c01"},{url:"/_next/static/css/bd457e7b6957aefe.css",revision:"bd457e7b6957aefe"},{url:"/_next/static/css/cf3023613f59aa4c.css",revision:"cf3023613f59aa4c"},{url:"/_next/static/css/fce9483a95fe9603.css",revision:"fce9483a95fe9603"},{url:"/_next/static/eqxpqRQsVLQcqnnnFdZc1/_buildManifest.js",revision:"2f05b03f747de0e126f397fc0b9322af"},{url:"/_next/static/eqxpqRQsVLQcqnnnFdZc1/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/eqxpqRQsVLQcqnnnFdZc1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/sf-pro/SFPRODISPLAYBOLD.OTF",revision:"644563f48ab5fe8e9082b64b2729b068"},{url:"/fonts/sf-pro/SFPRODISPLAYMEDIUM.OTF",revision:"51fd7406327f2b1dbc8e708e6a9da9a5"},{url:"/fonts/sf-pro/SFPRODISPLAYREGULAR.OTF",revision:"aaeac71d99a345145a126a8c9dd2615f"},{url:"/icon-192x192.png",revision:"a76119edf7581b9b930e8bf6bd11cb63"},{url:"/icon-256x256.png",revision:"d2473f4d3942f6e99ec2c8c676c4bb34"},{url:"/icon-384x384.png",revision:"2fd0f730da74e666ed19e3a180ca74fa"},{url:"/icon-512x512.png",revision:"e6a2d4a0f544082283103bd047a14790"},{url:"/icons/cancel.svg",revision:"92dff092b7249894e47656f0b9d7cc15"},{url:"/images/grain.png",revision:"62f64d5233f6333080c87c81a9a35f9d"},{url:"/images/noise.png",revision:"5058f6b59340f1f98757fdce96e77144"},{url:"/images/projects/bookmark.png",revision:"9b44b71e77baff5b64f30e69628e2692"},{url:"/images/projects/burger-builder.png",revision:"6832ba778e2ef6778546b082773c15ee"},{url:"/images/projects/cadmils.png",revision:"4c49d9b0fd040ed5dfae24e1ab8dd5f8"},{url:"/images/projects/d-chat.png",revision:"ac1c0f8ce3c1f02fb38eb80d4177b17b"},{url:"/images/projects/d-commerce.png",revision:"31dae7a0e903d9d751f813305ed6d1ee"},{url:"/images/projects/d-discus.png",revision:"553eda4316cfbd76f216a7acb17fc524"},{url:"/images/projects/d-productivity.png",revision:"11428677c015b034cd53bcc2bc51c697"},{url:"/images/projects/dashboard.png",revision:"2d72689985cd756bd103bdfb21968054"},{url:"/images/projects/developer.png",revision:"cdfe7842fbe28e16182647bb05c5a6be"},{url:"/images/projects/drum-machine.png",revision:"ff859f5f4d7f5a3b8451649b936c1886"},{url:"/images/projects/freebies.png",revision:"f00c0f1d9d5b36dc1109aaf8b78c4baa"},{url:"/images/projects/hospital-findr.png",revision:"b3af1acdc2960f3d6dfafc76bf7ac580"},{url:"/images/projects/pomodoro.png",revision:"4a55ec1a9eddc9a85ff18dc9760c2a15"},{url:"/images/projects/pv-1.png",revision:"3fb490dfe7d7dfc048d504d9201f835e"},{url:"/images/projects/quiz-ninja.png",revision:"be4d42388cb92a2ca3e6554e6f428406"},{url:"/images/projects/shortly.png",revision:"30c1061977af60590177291b1395c9cb"},{url:"/images/projects/test.jpg",revision:"a321d91cea64967632e5143aace7d2c7"},{url:"/manifest.json",revision:"84aa34a8bab40828fa7e7ec2e611af9a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
