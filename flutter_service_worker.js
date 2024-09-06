'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "4f7ae3bcc8a84648ee2a471a4cf614bf",
"assets/AssetManifest.bin.json": "a8f87ffef3dcb66435ed5ed250e90ba3",
"assets/AssetManifest.json": "110f204750bf344398978cd2f34e08a4",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/images/avatar.png": "10d4f88889fcca32f5762fb10c059987",
"assets/assets/images/icon.webp": "03a89a43102b288fb4ec4c8cf476dd9d",
"assets/assets/images/iconblack.png": "5aad4603b50b367a5a80b68ab0467a22",
"assets/assets/images/iconwhite.png": "c6a078c9bb854f13a93ef776c209f41f",
"assets/assets/images/image.png": "0440611201cd54b05c9df0d90228b782",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/svg/admin.svg": "bf623aadd80cf45ef0da260c14040144",
"assets/assets/svg/approve.svg": "1ec42690419bfa334e7d300d26321aba",
"assets/assets/svg/burn.svg": "17878d64166afc53d13e59310ef0715c",
"assets/assets/svg/cab.svg": "039ccc5c25c0fb922d0279a9917165d1",
"assets/assets/svg/dashboard.svg": "df580df3fdd7a52a019b06c9252f542b",
"assets/assets/svg/distance.svg": "04ebe03355fa88675711ef92640eff04",
"assets/assets/svg/exercise.svg": "742d6c5a839fbdd352ba279d7a41a86c",
"assets/assets/svg/history.svg": "86fcbe39b9bce9664e88283b1a260b98",
"assets/assets/svg/home.svg": "cf6b258752d57b52ec605c3eb56d4936",
"assets/assets/svg/logout.svg": "a51327865391c26ead0b34283350c727",
"assets/assets/svg/more.svg": "beac4b50442fde8b2e171116f03f0b4e",
"assets/assets/svg/newtravel.svg": "10823640696af2db5bc933c7259294a3",
"assets/assets/svg/pending.svg": "c1929b6ce6acdefd067ab270a6dfc430",
"assets/assets/svg/profile.svg": "4c8bbe7a24e05b79fd5228d16f8346d8",
"assets/assets/svg/registered.svg": "7c1b947524d8c21ed5dfe24ded3bd701",
"assets/assets/svg/reject.svg": "1d6a21c0ea3e7adc5dc21fc7a5cb4e30",
"assets/assets/svg/rejectt.svg": "0799384f78af54db8bb28a61b3f644fc",
"assets/assets/svg/rejecttt.svg": "0799384f78af54db8bb28a61b3f644fc",
"assets/assets/svg/search.svg": "93908ae1d286be70b16bbb2e4f44ef52",
"assets/assets/svg/setting.svg": "45d4d8a6a8dbdc4c57b46de74ae672bd",
"assets/assets/svg/signout.svg": "f00d50221b54596fcc1f85ac83590583",
"assets/assets/svg/travel.svg": "8e6be1b2e044583a0f52dbd5bbc297ff",
"assets/assets/svg/user.svg": "35424c9976deac74b3274bf6e386e877",
"assets/FontManifest.json": "b5cd4c088b3ef990f903f7ff847f0d52",
"assets/fonts/MaterialIcons-Regular.otf": "9ceb06b45939429be0b8404f7d584a59",
"assets/NOTICES": "462e1037cf5c48451e8f61780f1f75e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d41d8cd98f00b204e9800998ecf8427e",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "2b3e02608e852c3fb4ae17d4df123b0f",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "fb2a7dedbadaeceb3859c62860abfe27",
"/": "fb2a7dedbadaeceb3859c62860abfe27",
"main.dart.js": "57a027f2b5c1b7f834b5eb1414758552",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "a7525fa6cd1a642de282fef4e18852cd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
