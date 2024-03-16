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
  ["node_modules/ansi-align/CHANGELOG.md", "b865a5c97d471d7dda30eb82183a49eb"],
  ["node_modules/ansi-align/README.md", "04600bbc663c6268e48296f631b37009"],
  ["node_modules/ansi-align/index.js", "9d8d67a21a71064383a9f031707a076c"],
  ["node_modules/ansi-align/package.json", "dc598ba1a3c38bae7528d144b4e2b187"],
  ["node_modules/ansi-regex/index.js", "1bf088f361526f057c62dd90bb045f2d"],
  ["node_modules/ansi-regex/package.json", "6dd5b04b0165eb3c9a80b1b776432c87"],
  ["node_modules/ansi-regex/readme.md", "91bc94e0c79a04280efa0fdd63f396d2"],
  ["node_modules/ansi-styles/index.js", "746f0fd174c4c54a26dfe0b5ef52c25e"],
  ["node_modules/ansi-styles/package.json", "50f97f15be9377b1110c7a68f76fff0f"],
  ["node_modules/ansi-styles/readme.md", "e2d0225f4d7da4301f56c7f295a5dbbc"],
  [
    "node_modules/array-find-index/index.js",
    "a19a7b6671943fe3f99fecdb60ac106d",
  ],
  [
    "node_modules/array-find-index/package.json",
    "0a444c011d895396a227bb3ac1282fcd",
  ],
  [
    "node_modules/array-find-index/readme.md",
    "fb54891bdc5f1c6bd39789a218aadcfc",
  ],
  [
    "node_modules/balanced-match/LICENSE.md",
    "7fa99ddc3424107350ca6e9a24552085",
  ],
  ["node_modules/balanced-match/README.md", "542c17f304c9e7e2dbcb23506d9ab583"],
  ["node_modules/balanced-match/index.js", "32722fe5688aa4937b71d77bbd45b026"],
  [
    "node_modules/balanced-match/package.json",
    "fa13802cf9109f23db7cc107f33cbf0a",
  ],
  ["node_modules/boxen/index.js", "22cdcd0ecd5d3f597b94f4c9670e8791"],
  [
    "node_modules/boxen/node_modules/camelcase/index.js",
    "e68852f4b0f58cdc886aa9d92bd7e171",
  ],
  [
    "node_modules/boxen/node_modules/camelcase/package.json",
    "be9ba7da55d65d2d5e3f5c03a2731385",
  ],
  [
    "node_modules/boxen/node_modules/camelcase/readme.md",
    "e5d1499ff6b8b385d8d5c11207fb90a0",
  ],
  ["node_modules/boxen/package.json", "5c05328cb47c470a606dfe1533493f3b"],
  ["node_modules/boxen/readme.md", "1baebef8ea6bd0bc920fd4c8f40fd91e"],
  [
    "node_modules/brace-expansion/README.md",
    "80409515a04eece16a027dfb7ac13e7e",
  ],
  ["node_modules/brace-expansion/index.js", "2e265baed5f4147160f144389684af9c"],
  [
    "node_modules/brace-expansion/package.json",
    "effd91994b1b7ddb8a33060ad4541e6a",
  ],
  ["node_modules/camelcase-keys/index.js", "c558ce41088691f6c3a4f79625809061"],
  [
    "node_modules/camelcase-keys/package.json",
    "3cd20bf668eb8b39c4e421729e5b01df",
  ],
  ["node_modules/camelcase-keys/readme.md", "47508c9695c6d00d7f9f4fcffa09366d"],
  ["node_modules/camelcase/index.js", "760ce1ead8f37c3ffc9f948288be5944"],
  ["node_modules/camelcase/package.json", "dea8d66e97c13f69e0be80d37ae2c4b9"],
  ["node_modules/camelcase/readme.md", "720828d016c10e1a1eb88f2734a86bf8"],
  [
    "node_modules/capture-stack-trace/index.js",
    "5bd00d46fc732fbef2873d15a676fb92",
  ],
  [
    "node_modules/capture-stack-trace/package.json",
    "99193d9f5589341760c6cd86cc84cd22",
  ],
  [
    "node_modules/capture-stack-trace/readme.md",
    "9062ad0061eb208798db0092b7d66e38",
  ],
  ["node_modules/chalk/index.js", "bb573269345dcfe1ad7b10a6db19ee9f"],
  ["node_modules/chalk/index.js.flow", "ed1e3e6f99a0c9cef5ba734fe28136f2"],
  ["node_modules/chalk/package.json", "a21f60da989d4bf1cd5396df6c638a98"],
  ["node_modules/chalk/readme.md", "b2f60f8b9448a39b5a8450174676bb89"],
  ["node_modules/chalk/templates.js", "4b69ee87432f991d3f1f1e90d5facd1e"],
  ["node_modules/chalk/types/index.d.ts", "608cb8aa723538a97479c8e6051c19fa"],
  ["node_modules/ci-info/CHANGELOG.md", "95db35b52745b95d4b9ab44c5ba986cb"],
  ["node_modules/ci-info/README.md", "ef899d5dfbad429a357f41040bb612d0"],
  ["node_modules/ci-info/index.js", "e031f06d3959d46755c347a5016440c6"],
  ["node_modules/ci-info/package.json", "ac19436b56491c6dd7e0a11890c8c101"],
  ["node_modules/ci-info/vendors.json", "0eea8079cbeb14280799e5600c481d11"],
  ["node_modules/cli-boxes/boxes.json", "d32ddcfc743a4f96a3d29a13bfefb5dd"],
  ["node_modules/cli-boxes/index.js", "066d19e3172de9e194b90bce14a034dd"],
  ["node_modules/cli-boxes/package.json", "2ed253c5a1f12de4b3824856d24cb771"],
  ["node_modules/cli-boxes/readme.md", "8309020cb3a3d7271b33987fd8d2a749"],
  [
    "node_modules/color-convert/CHANGELOG.md",
    "8bfdde6c27aefd62f810963029ec43ad",
  ],
  ["node_modules/color-convert/README.md", "60a4a31985e24f1b41d77b595e9ae8c9"],
  [
    "node_modules/color-convert/conversions.js",
    "1e739864ba89e9876b4a06d1105c3f15",
  ],
  ["node_modules/color-convert/index.js", "3dd0a1f66c1d90dd2692e1bfa7eeb05a"],
  [
    "node_modules/color-convert/package.json",
    "51a202f6ab9b016f0f7219701f1f5e70",
  ],
  ["node_modules/color-convert/route.js", "ec324515d5dff142da623cfca2c08c01"],
  ["node_modules/color-name/README.md", "8ec277916ba8eca636dad97c034af307"],
  ["node_modules/color-name/index.js", "405840ec3052209f357288fe4c0f4414"],
  ["node_modules/color-name/package.json", "7599aecb8597ca603c711d49a83dab59"],
  ["node_modules/color-name/test.js", "4d018d689a1a257a1c4e09bb296dbb9e"],
  [
    "node_modules/concat-map/README.markdown",
    "3de808d1c878e1d12f12c8d849710db2",
  ],
  [
    "node_modules/concat-map/example/map.js",
    "42b2341e75e2e29012793c31222c2783",
  ],
  ["node_modules/concat-map/index.js", "8ef754ba23fdd37b3e8a1c52739ace80"],
  ["node_modules/concat-map/package.json", "85d8a674998927862b17adef4aa6a7b1"],
  ["node_modules/concat-map/test/map.js", "a8e1d80e4629945216de220e4b580cf5"],
  ["node_modules/configstore/index.js", "4287d212a46625cc850d145b5dc8ad2a"],
  ["node_modules/configstore/package.json", "326b27bc9461d5e110d3c1e193211859"],
  ["node_modules/configstore/readme.md", "23cecc7f3ccb4ced17505d2b0eb88e4d"],
  [
    "node_modules/create-error-class/index.js",
    "01b3d186b7197f97f9730e505f27e7f1",
  ],
  [
    "node_modules/create-error-class/package.json",
    "43fc026bb0890d17a732a401a2a0faa6",
  ],
  [
    "node_modules/create-error-class/readme.md",
    "7299393a48891c01dd5484e1de032674",
  ],
  ["node_modules/cross-spawn/CHANGELOG.md", "bc27e857d6206a58abd356387469c080"],
  ["node_modules/cross-spawn/README.md", "b815d4e925af7a37543b70b488398a9f"],
  ["node_modules/cross-spawn/index.js", "862c4662263149ade884e65cdaa7640d"],
  [
    "node_modules/cross-spawn/lib/enoent.js",
    "ddfebbd9b053338f918133a5cc8ccd9b",
  ],
  ["node_modules/cross-spawn/lib/parse.js", "51bcbd433ef00fe51233186f34af21c2"],
  [
    "node_modules/cross-spawn/lib/util/escapeArgument.js",
    "24716d66f62383f8b9b23f05f551f393",
  ],
  [
    "node_modules/cross-spawn/lib/util/escapeCommand.js",
    "cf649e90aa13566a5cb0710a36ced576",
  ],
  [
    "node_modules/cross-spawn/lib/util/hasEmptyArgumentBug.js",
    "ca48ad8b6e95aa58d09529e350c5f601",
  ],
  [
    "node_modules/cross-spawn/lib/util/readShebang.js",
    "5bbb63e606aef58d17ea4a069b2f8655",
  ],
  [
    "node_modules/cross-spawn/lib/util/resolveCommand.js",
    "3775aefe705eae2d9590e9c5ad1cede0",
  ],
  ["node_modules/cross-spawn/package.json", "404cd32e2ba0c4a0f252ac60dbc71938"],
  [
    "node_modules/crypto-random-string/index.js",
    "6450648a342648077a779431b44331cd",
  ],
  [
    "node_modules/crypto-random-string/package.json",
    "094fb6d15075611f19990050ebd30f3b",
  ],
  [
    "node_modules/crypto-random-string/readme.md",
    "a8afea8f4e3ff2183d9047a99508cf53",
  ],
  [
    "node_modules/currently-unhandled/browser.js",
    "f85cd6f6159c1a744096dd98d0a8692c",
  ],
  [
    "node_modules/currently-unhandled/core.js",
    "2e6014188dde097d5dc79ece92235eda",
  ],
  [
    "node_modules/currently-unhandled/index.js",
    "2f869c32daa8065f4ebe6f9c2cf69f87",
  ],
  [
    "node_modules/currently-unhandled/package.json",
    "79e19096d2d396f4c9e84a9ccc33c9e8",
  ],
  [
    "node_modules/currently-unhandled/readme.md",
    "20db8e3cc5aaf49c3ee1892b3137950b",
  ],
  ["node_modules/decamelize/index.js", "983084e6146528df1707b0aa3ff6cd9a"],
  ["node_modules/decamelize/package.json", "494b4faeb16e12979e988b49de7684d6"],
  ["node_modules/decamelize/readme.md", "71b1684a019e2f3d5cc76429939db237"],
  ["node_modules/deep-extend/CHANGELOG.md", "c3ec3d73826002053091bb01d3c78277"],
  ["node_modules/deep-extend/README.md", "559d1638e49f79d6e92b3c616fc62822"],
  ["node_modules/deep-extend/index.js", "5df64d39a44871d832aa71f608878417"],
  [
    "node_modules/deep-extend/lib/deep-extend.js",
    "1e96e9b3c69a843ef83a44bbb961beb1",
  ],
  ["node_modules/deep-extend/package.json", "843d8bcf451f015c3a6b3930e0b6eaee"],
  ["node_modules/dom-urls/README.md", "f9bf68aac4f4920939e16768f6cfa11c"],
  ["node_modules/dom-urls/index.js", "43629b92a6fe6b72e85a1e4c3ca5391e"],
  ["node_modules/dom-urls/package.json", "4c3141ba808cd5d18e32e01d8cab4404"],
  ["node_modules/dot-prop/index.js", "d8589a4adf1260d924d3caf706b4ca61"],
  ["node_modules/dot-prop/package.json", "5bd68249e3638baa0c7da743c6256d10"],
  ["node_modules/dot-prop/readme.md", "d309771ab968368814de98a198632de6"],
  ["node_modules/duplexer3/index.js", "c4b02835550dc48c5d70a7f6d8da3d50"],
  ["node_modules/duplexer3/package.json", "4374e01978e00cb8cc1dcd558719b845"],
  ["node_modules/duplexer3/readme.md", "044bf98e6685aa606d6be69de15b8cbb"],
  ["node_modules/error-ex/README.md", "fb8ffd816db556d2ea5ee059ba89b298"],
  ["node_modules/error-ex/index.js", "1482cafe9d17dc7e0444ded2b307b05c"],
  ["node_modules/error-ex/package.json", "0663755e17d14453332b4e48c7aea9d4"],
  ["node_modules/es6-promise/CHANGELOG.md", "c0415c579ca17123a56286f6c0eb4026"],
  ["node_modules/es6-promise/README.md", "fda58f5d835c0c7aba1fd325e6a70b07"],
  ["node_modules/es6-promise/auto.js", "b516758151252729f6a24303df6c1a77"],
  [
    "node_modules/es6-promise/dist/es6-promise.auto.js",
    "9f56eaea1fbe61f8f3734a511ecc089a",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.auto.map",
    "3b8a9675521e1cff4fac36693794df75",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.auto.min.js",
    "889f6a354b79c38bdf62a8792a65329d",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.auto.min.map",
    "d8edce4af123cc085bf5739aba06ea39",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.js",
    "855125e6f54fbf40f3f3afadba7daab7",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.map",
    "55d629d0ae97b6fcb86972ff927da3df",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.min.js",
    "898c9f48be8c5545ccdd50879d3f902a",
  ],
  [
    "node_modules/es6-promise/dist/es6-promise.min.map",
    "6d7004cf45fef63e7d4fe9149005e614",
  ],
  [
    "node_modules/es6-promise/es6-promise.d.ts",
    "687f615a53e2b39ef41afe20e125b4cc",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise.auto.js",
    "b66fba58cb90b3260b0b6159d8611457",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise.js",
    "9feb6700624e50ecbddb13d1e502a0b1",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/-internal.js",
    "4984e04b2a01a2716478c705d415dea0",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/asap.js",
    "5a036ec15c1e4aec7379ba3ec5549f61",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/enumerator.js",
    "1bd0b45ffba1704887a16a9c78a628bb",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/polyfill.js",
    "40beef37eac0eb04b2b948d36245065f",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/promise.js",
    "04ae59027e8470173bf7b23e58de4420",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/promise/all.js",
    "3b322588b808ef29090698e5d47d7d05",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/promise/race.js",
    "f3134eff4fad30ef5396989302920704",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/promise/reject.js",
    "4926bda3b87c32f9608a3c145ff636d2",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/promise/resolve.js",
    "bcdb088cd3b029540ae383e793fe4934",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/then.js",
    "6bce50765808193773ab54791f030b45",
  ],
  [
    "node_modules/es6-promise/lib/es6-promise/utils.js",
    "84a5510bbc30f7029c3dde0df162c197",
  ],
  ["node_modules/es6-promise/package.json", "249bc582b538002ee0185f5f7cdf2190"],
  [
    "node_modules/escape-string-regexp/index.js",
    "7b366c6d23641eabb9d8f46fa9008535",
  ],
  [
    "node_modules/escape-string-regexp/package.json",
    "6050cf06c06dcb38dce670ff96b21aa9",
  ],
  [
    "node_modules/escape-string-regexp/readme.md",
    "16e18082bcf52d79e8ef430b7f8cc150",
  ],
  ["node_modules/execa/index.js", "1f3e4a1e6d2ecf6af197984b9c1c4b23"],
  ["node_modules/execa/lib/errname.js", "2df305dc66502aa6016e0bc03d1e7ce8"],
  ["node_modules/execa/lib/stdio.js", "760972df95d68978ebb0a4cf36afb64f"],
  ["node_modules/execa/package.json", "dfefe854d13efcb90cab5daecd4ad60d"],
  ["node_modules/execa/readme.md", "8b2a297add6bc397555fb762c0d9fa52"],
  ["node_modules/find-up/index.js", "273b843d5994136674f491d7a2c5ecfe"],
  ["node_modules/find-up/package.json", "0cf732628b5625d7eb74849a3e6a5732"],
  ["node_modules/find-up/readme.md", "74183eb5676ad6df10dd4c5597ccdf14"],
  ["node_modules/fs.realpath/README.md", "b0e79f63ca0f7b8904b2b0e01b8aa1ed"],
  ["node_modules/fs.realpath/index.js", "81443ae283d9031000862ce501c9f964"],
  ["node_modules/fs.realpath/old.js", "8c3d2bd3edf5d8918b7cbf3c93b3ba32"],
  ["node_modules/fs.realpath/package.json", "3aa3d67ce378e330e293496dd3b9a506"],
  [
    "node_modules/function-bind/CHANGELOG.md",
    "3623b76f4135f25494e1ab7a9b1fce05",
  ],
  ["node_modules/function-bind/README.md", "e9cf820d7fdaacfefa8a583a32d1bbd5"],
  [
    "node_modules/function-bind/implementation.js",
    "90ffc505f9a898a56dab665f19bd1798",
  ],
  ["node_modules/function-bind/index.js", "80c4b0103888a6175e5579dedbab1ea3"],
  [
    "node_modules/function-bind/package.json",
    "325c50acb9dd3d834589c1aeb318c9a8",
  ],
  [
    "node_modules/function-bind/test/index.js",
    "9786942aeefcdc12b2f841895ede1647",
  ],
  ["node_modules/get-stdin/index.js", "c82d99b0454e15c5319dc5b1e37527e3"],
  ["node_modules/get-stdin/package.json", "fece3a0288ccb9c90fe481fd1daa21d0"],
  ["node_modules/get-stdin/readme.md", "66e9c35acf0e22691b69f94f59f99edb"],
  [
    "node_modules/get-stream/buffer-stream.js",
    "8dd75e5047274804a38d499ee1f14caa",
  ],
  ["node_modules/get-stream/index.js", "0a140fe572211ce5bbb465c28fec0aaa"],
  ["node_modules/get-stream/package.json", "f2e252f08ed3f170360f5bdc1d9029eb"],
  ["node_modules/get-stream/readme.md", "37034bc591e05a502632e4ec3ceae19f"],
  ["node_modules/glob/README.md", "019b7a754624b82fc77c0f6a38d22d57"],
  ["node_modules/glob/common.js", "f2666e73a5bb8ee95d180ca20a95b49c"],
  ["node_modules/glob/glob.js", "102835deed0aaa75740f60c41a4d4a7a"],
  ["node_modules/glob/package.json", "f3dafd17154522e1916560c13533b2fc"],
  ["node_modules/glob/sync.js", "04c59a035f41d0ec358f2a35079b4440"],
  ["node_modules/global-dirs/index.js", "1932f88ca8085e2a0be97b923c25f3b2"],
  ["node_modules/global-dirs/package.json", "fe2c9e36bed6caf46935e93cbe61ec88"],
  ["node_modules/global-dirs/readme.md", "5f4634ea2908de0ea704efb53356e739"],
  ["node_modules/got/index.js", "81e481447fd6ea40c5164f52e9d9e713"],
  ["node_modules/got/package.json", "f4d1264742ce0daa8bbc90b5d4cf176d"],
  ["node_modules/got/readme.md", "1e79a2ef6ec7824e787665ff60c6175b"],
  ["node_modules/graceful-fs/README.md", "5039e23004b030d4f02c610822aafc8a"],
  ["node_modules/graceful-fs/clone.js", "f8b8f88d8550294c47ee5cc6e8ec141c"],
  [
    "node_modules/graceful-fs/graceful-fs.js",
    "63d49916c84e2bbda13d6563d9dc18b5",
  ],
  [
    "node_modules/graceful-fs/legacy-streams.js",
    "620fc152dc9bfa087f9901703b1e2616",
  ],
  ["node_modules/graceful-fs/package.json", "babc4604a4e9958a063e1941f873d11f"],
  ["node_modules/graceful-fs/polyfills.js", "14cbbf8e8d0632089994286844259752"],
  ["node_modules/has-flag/index.js", "a5a0a76afed750bf24321951974305f9"],
  ["node_modules/has-flag/package.json", "73cc8d1e96c19ce85a7abb8f9468a86c"],
  ["node_modules/has-flag/readme.md", "6b4aa2db6dac2140722d7fcce3d2922e"],
  ["node_modules/hasown/CHANGELOG.md", "bdcf700bea58c1524dc1a503391a47c6"],
  ["node_modules/hasown/README.md", "fee8da12add9e228e0e81304b4e93ffd"],
  ["node_modules/hasown/index.d.ts", "d479f40517e58a21b3e6be1d00315536"],
  ["node_modules/hasown/index.js", "58e3b71ae6d84d4371dd90900b2b7f01"],
  ["node_modules/hasown/package.json", "e1b6e64cea1f71881fabb0759bac0d43"],
  ["node_modules/hasown/tsconfig.json", "5847303e067654a0b80f57e167d826b6"],
  [
    "node_modules/hosted-git-info/CHANGELOG.md",
    "87692584723d46fc5749a1b6c5d61211",
  ],
  [
    "node_modules/hosted-git-info/README.md",
    "50dd8dc66ebfc9071a42c2534e7eb74c",
  ],
  [
    "node_modules/hosted-git-info/git-host-info.js",
    "81616d8ffc724caeab4e1d30fa19c32b",
  ],
  [
    "node_modules/hosted-git-info/git-host.js",
    "4cfba4c7a9a62443219984e78c86ca0a",
  ],
  ["node_modules/hosted-git-info/index.js", "b3e613946b5fa86bce1579690a55bf13"],
  [
    "node_modules/hosted-git-info/package.json",
    "2a8c73592cbe4265502d43c27a631010",
  ],
  ["node_modules/import-lazy/index.js", "56c892b5aaf06cfd051949517e8d7c19"],
  ["node_modules/import-lazy/package.json", "037abcd7d20cdb8ad4ed2913181f89b2"],
  ["node_modules/import-lazy/readme.md", "8616ac526a86c28736b3bb6287db1d35"],
  ["node_modules/imurmurhash/README.md", "c1fd47197ecab8a0852a47c5876c059e"],
  [
    "node_modules/imurmurhash/imurmurhash.js",
    "929efbc5c5675bc0e4d2b544fec5d84c",
  ],
  [
    "node_modules/imurmurhash/imurmurhash.min.js",
    "52d2eb410de1c9e0758ef562289289fa",
  ],
  ["node_modules/imurmurhash/package.json", "feb3f37f4780f79e5fdb5ff0870f1057"],
  ["node_modules/indent-string/index.js", "b3a3b06e58214f950cb0d0fe34533da8"],
  [
    "node_modules/indent-string/package.json",
    "8502f743ffb3ceebef4bd0e1d05ce1b7",
  ],
  ["node_modules/indent-string/readme.md", "cc2ed38405f80830212136a10f78375c"],
  ["node_modules/inflight/README.md", "0a30dbf89df03dc7c954f830946f66d8"],
  ["node_modules/inflight/inflight.js", "42bbc3622abfefca5862fd0d12441a15"],
  ["node_modules/inflight/package.json", "85ba25624378c23e1ee9b33d3d103bf0"],
  ["node_modules/inherits/README.md", "de7eab94959b05c9765cad499ab092db"],
  ["node_modules/inherits/inherits.js", "9ced637189714b8d21d34aeb50b42ae8"],
  [
    "node_modules/inherits/inherits_browser.js",
    "184872b18b759a37285bee13cd1cd0e4",
  ],
  ["node_modules/inherits/package.json", "f73908dab55d4259f3ed052ce9fb2fbb"],
  ["node_modules/ini/README.md", "e335094d46b5e72d0faf8848c6e43475"],
  ["node_modules/ini/ini.js", "58cce3fbc0154c304130f7f0997529a8"],
  ["node_modules/ini/package.json", "b613cca593420ef7097ea40ac8705690"],
  ["node_modules/is-arrayish/README.md", "29707858a2c6eb8e14e3ca822ce48fb6"],
  ["node_modules/is-arrayish/index.js", "37d2f8bf6f5eaa32af9695936e137f8c"],
  ["node_modules/is-arrayish/package.json", "c7d062aad2809fdef776f85e4da00eb5"],
  ["node_modules/is-ci/README.md", "0a137ec2b4c0381fff80666d5397c46d"],
  ["node_modules/is-ci/bin.js", "c28bff52efeabbc3f7fa91db9f07b99d"],
  ["node_modules/is-ci/index.js", "93d8442adc7fa187a65bd4e34857ba63"],
  ["node_modules/is-ci/package.json", "548eea0e8952e49f09efd9d4d6a37957"],
  [
    "node_modules/is-core-module/CHANGELOG.md",
    "b6c23666bc87d24ab04a82ff467ed039",
  ],
  ["node_modules/is-core-module/README.md", "cd04f1e7e9e51f3b2f8d30c40a0c9aa2"],
  ["node_modules/is-core-module/core.json", "49e95e84e429668738695df34d545b9b"],
  ["node_modules/is-core-module/index.js", "2b8cb63c074407a4d87419f752966ff8"],
  [
    "node_modules/is-core-module/package.json",
    "f83a262915f666fa09cc2a491d20b61f",
  ],
  [
    "node_modules/is-core-module/test/index.js",
    "9434e7ee575518cb07633b0ae1d32989",
  ],
  ["node_modules/is-finite/index.js", "5247d13bf467f7835623412f8b8fa5d9"],
  ["node_modules/is-finite/package.json", "55cf3d1be1901b4b8656a31101ab668f"],
  ["node_modules/is-finite/readme.md", "dc8ab094294292919809745d6bc15a86"],
  [
    "node_modules/is-fullwidth-code-point/index.js",
    "38c7b39620fd5322e9cd5bdca5a9b5ad",
  ],
  [
    "node_modules/is-fullwidth-code-point/package.json",
    "e199d7053a4c1508b8654c3965a58b20",
  ],
  [
    "node_modules/is-fullwidth-code-point/readme.md",
    "a499de3bda1124af893f9b64c5a62b53",
  ],
  [
    "node_modules/is-installed-globally/index.js",
    "5055206c9513e9865d8f3720b53aeda6",
  ],
  [
    "node_modules/is-installed-globally/package.json",
    "19ba4409c5bfa4c26a6a605f84cc1686",
  ],
  [
    "node_modules/is-installed-globally/readme.md",
    "59fe571f26e30afdf34fa9c0f0a2b3cc",
  ],
  ["node_modules/is-npm/index.js", "bc4b18b0c8c32b94883d6fc1d675e919"],
  ["node_modules/is-npm/package.json", "c843e88ecb274d5d573c71be330bff8b"],
  ["node_modules/is-npm/readme.md", "a743e0abf08c28a37ecc4bef4dc02f8c"],
  ["node_modules/is-obj/index.js", "66d4241b89050b1324ef6b5c3d7d6cb5"],
  ["node_modules/is-obj/package.json", "7819d32a04b1014d3b9b82a5258e7372"],
  ["node_modules/is-obj/readme.md", "ea3a1560019edaa8d12595056e7f0d5e"],
  ["node_modules/is-path-inside/index.js", "32cfc9fb62f5e2712c94596997227faa"],
  [
    "node_modules/is-path-inside/package.json",
    "ca23cb9406011c7a82e7757e4163c19c",
  ],
  ["node_modules/is-path-inside/readme.md", "328755f3b79b37e247decdd20fb7c285"],
  ["node_modules/is-redirect/index.js", "44edfdcf7fbdbd68cdcd95a860d1719e"],
  ["node_modules/is-redirect/package.json", "bac99ecfc5ace6a9b7c58d01dcd9442a"],
  ["node_modules/is-redirect/readme.md", "0686837395384c2637527ec4283a036c"],
  [
    "node_modules/is-retry-allowed/index.js",
    "ebb56b3a373bf37f1bbba2bfc8c1cfc0",
  ],
  [
    "node_modules/is-retry-allowed/package.json",
    "46f88852bde05671f60f2701a2509e98",
  ],
  [
    "node_modules/is-retry-allowed/readme.md",
    "93ca70faa7862d6bade4d9541f54ee0c",
  ],
  ["node_modules/is-stream/index.js", "2778ccebb8b27fdf4e858b11e9f96e2f"],
  ["node_modules/is-stream/package.json", "85ba3dbdbccd3e5f8505dd02a538db06"],
  ["node_modules/is-stream/readme.md", "d2197994b1bc1bc55576a83239c83ba1"],
  ["node_modules/is-utf8/README.md", "d23a180a7623cd8e4c28a4bd204ca9a6"],
  ["node_modules/is-utf8/is-utf8.js", "d6bf49d9e457e9f115559194aca1e975"],
  ["node_modules/is-utf8/package.json", "5536fcf7d97590fded41db7d91f63136"],
  ["node_modules/isarray/README.md", "d2f2d4e0c886ba00c26b830c666554f7"],
  ["node_modules/isarray/build/build.js", "d3005169d2c46521802b587ddc12bfb0"],
  ["node_modules/isarray/component.json", "32fed65eac22c95ae43ddfd1729b9bf3"],
  ["node_modules/isarray/index.js", "e8460ef833145a9652fba1bb4c47ede7"],
  ["node_modules/isarray/package.json", "b0687e3b16a90d54d57edc86b31a496d"],
  ["node_modules/isexe/README.md", "e20cc7a8815fa01cdc32e08409ed778c"],
  ["node_modules/isexe/index.js", "1a5f173769c2c3b82a211ab81ebb13b9"],
  ["node_modules/isexe/mode.js", "e4ae002fd14a8bf3666fe9b2c811e8bb"],
  ["node_modules/isexe/package.json", "b7340828ee0e123814f9b855953de714"],
  ["node_modules/isexe/test/basic.js", "d6149183bc6a5ee3220291b53e5f4567"],
  ["node_modules/isexe/windows.js", "2a44bcc05f54dddeb33a1776ee7e481a"],
  ["node_modules/latest-version/index.js", "47189a6116f678efb95dc3ba1a5e77fb"],
  [
    "node_modules/latest-version/package.json",
    "63eac32f0ecc7ee4febd8bdf42cf39f4",
  ],
  ["node_modules/latest-version/readme.md", "fd2c187b04a28596a64e24c924039354"],
  ["node_modules/load-json-file/index.js", "b5b58c5d7d67c11d10cad6af497bcbc1"],
  [
    "node_modules/load-json-file/package.json",
    "5cf52d447cd2d91f190198b29c4623a2",
  ],
  ["node_modules/load-json-file/readme.md", "89694e455d0e132738a6a69d68424910"],
  [
    "node_modules/lodash._reinterpolate/LICENSE.txt",
    "ad20573d95563085adde70ee845966ea",
  ],
  [
    "node_modules/lodash._reinterpolate/README.md",
    "f0b313c16f8ec10dc782d827be010ff3",
  ],
  [
    "node_modules/lodash._reinterpolate/index.js",
    "d109289b492310fb94da2cae11126800",
  ],
  [
    "node_modules/lodash._reinterpolate/package.json",
    "639b990c1a76736011f6636f0edef543",
  ],
  [
    "node_modules/lodash.defaults/README.md",
    "56372a9407630abf28197a8335985853",
  ],
  ["node_modules/lodash.defaults/index.js", "bc5e8d4b69b077619971c2d8a3bdf315"],
  [
    "node_modules/lodash.defaults/package.json",
    "1a3537c1a0ac525c4ace038a2143e827",
  ],
  [
    "node_modules/lodash.template/README.md",
    "25747e6d007a0c7c6dd85d3479e5969d",
  ],
  ["node_modules/lodash.template/index.js", "4098e7040db997f2ff14931e8486a130"],
  [
    "node_modules/lodash.template/package.json",
    "4c1711bd6c9a7747af2072477509d646",
  ],
  [
    "node_modules/lodash.templatesettings/README.md",
    "8584b398cb2d4408370aee0daba4d840",
  ],
  [
    "node_modules/lodash.templatesettings/index.js",
    "dc46550ed2fd78e0b69b874235555af9",
  ],
  [
    "node_modules/lodash.templatesettings/package.json",
    "44a095acf6265474066025539c7e33ae",
  ],
  ["node_modules/loud-rejection/api.js", "fb03c580c6296df18b39350e22f0bd97"],
  ["node_modules/loud-rejection/index.js", "3288863ed82f117ea85d432a09974ce0"],
  [
    "node_modules/loud-rejection/package.json",
    "c8db373230425cc627922a5f598fbf59",
  ],
  ["node_modules/loud-rejection/readme.md", "80d2f05fe951b3c139e1ed00cb7578a3"],
  [
    "node_modules/loud-rejection/register.js",
    "7308489c82a9faa09f4534df9098004c",
  ],
  ["node_modules/lowercase-keys/index.js", "799e7f74999f8f795fd2191dbb08a1b7"],
  [
    "node_modules/lowercase-keys/package.json",
    "178ca96ff779a0ac1a60d2b50b81956c",
  ],
  ["node_modules/lowercase-keys/readme.md", "c110b9920324cf6e2546b289df35ad03"],
  ["node_modules/lru-cache/README.md", "1bc6a9e969ff40fe4a6f36631a363024"],
  ["node_modules/lru-cache/index.js", "ffa0620db9e1a83a4bf08ef15370b835"],
  ["node_modules/lru-cache/package.json", "4d588d28a52a177c16510f7ec66b22d0"],
  ["node_modules/make-dir/index.js", "decd9ab047f50dce71b91c72023e5cf9"],
  [
    "node_modules/make-dir/node_modules/pify/index.js",
    "d57492330e7bd53172c7d1cb2a1a15de",
  ],
  [
    "node_modules/make-dir/node_modules/pify/package.json",
    "63e7015fcc61d661929de7e27f1f1f1f",
  ],
  [
    "node_modules/make-dir/node_modules/pify/readme.md",
    "4bcac71875782eb2b52f73f4e79924a7",
  ],
  ["node_modules/make-dir/package.json", "8a69e3752bb35efcd7672c8da7936b34"],
  ["node_modules/make-dir/readme.md", "8aeca4b3c943fad39399fb908e431292"],
  ["node_modules/map-obj/index.js", "2dbf2e519cb8026186d624ca503ca6e3"],
  ["node_modules/map-obj/package.json", "d481dae9c74bde8b76ad525fbd692136"],
  ["node_modules/map-obj/readme.md", "cb8ea918916d2c1c65a605a36775cac8"],
  ["node_modules/meow/index.js", "7d6747a9bc20191e44606431fe4658e2"],
  ["node_modules/meow/package.json", "323c0cda235efcfece5d28d6dc8ce903"],
  ["node_modules/meow/readme.md", "4f1ff998325cd8bd7d371ebc7ed25c0f"],
  ["node_modules/minimatch/README.md", "6252bb5744780350f68bf9e11891fb5f"],
  ["node_modules/minimatch/minimatch.js", "43855baa9189d8dd645c44afc4132ec1"],
  ["node_modules/minimatch/package.json", "9f31a54ef78d345b4d57907429129cd7"],
  ["node_modules/minimist/CHANGELOG.md", "2416be68ed4cc1bacc164bc008a49939"],
  ["node_modules/minimist/README.md", "4ad58e834523cb2cd4541c4fe4adb93f"],
  [
    "node_modules/minimist/example/parse.js",
    "87ac674f45cfaa436dbb99446ec10fd8",
  ],
  ["node_modules/minimist/index.js", "f4d1d3ed7659962c2423fb5c2fd22f5b"],
  ["node_modules/minimist/package.json", "e6feae58c61551b9ff51d4da975fcc61"],
  [
    "node_modules/minimist/test/all_bool.js",
    "0760ebb3d89c37370beb0bdfebaacefa",
  ],
  ["node_modules/minimist/test/bool.js", "689cb0c5bc3f6463d6b02d9057b84cb4"],
  ["node_modules/minimist/test/dash.js", "f15cf3ee24154a7efed0051cc46e5b3a"],
  [
    "node_modules/minimist/test/default_bool.js",
    "332bead7d85cd216fcc1ec8341ad071b",
  ],
  ["node_modules/minimist/test/dotted.js", "124757afa130a59cc080e5f82cd8520c"],
  [
    "node_modules/minimist/test/kv_short.js",
    "6fdb64d6ef17f56f84521f34cf8d6cf7",
  ],
  ["node_modules/minimist/test/long.js", "0a0c54c5d272fa3ea229ca51b24e95ff"],
  ["node_modules/minimist/test/num.js", "ecd9ab3dc03e7e699da428ecfc5e5c7d"],
  ["node_modules/minimist/test/parse.js", "54b954779cc0499739da3a75790a2297"],
  [
    "node_modules/minimist/test/parse_modified.js",
    "c2764553764414545bab146e3901dfd0",
  ],
  ["node_modules/minimist/test/proto.js", "832bc1ef0a23247f6fd10c82f88ae6a7"],
  ["node_modules/minimist/test/short.js", "6c7b2212c3141dff1b8d1f4c7fc5bcc0"],
  [
    "node_modules/minimist/test/stop_early.js",
    "3a53cb1852862afd3003442398202ee0",
  ],
  ["node_modules/minimist/test/unknown.js", "48856ce464b217eb5b7e26ef2f7abc94"],
  [
    "node_modules/minimist/test/whitespace.js",
    "920ac448c2acf8cad0cbef8a565b07e6",
  ],
  ["node_modules/mkdirp/bin/cmd.js", "9ef5fb33a1a94773afb7dc52b0dfbb5d"],
  ["node_modules/mkdirp/bin/usage.txt", "29298f0efcb0c0454a851886b91e00e2"],
  ["node_modules/mkdirp/index.js", "e36e567ac2f73f4f3edefbf77ca598b4"],
  ["node_modules/mkdirp/package.json", "65a9c81d4f8abb72f51e7ea6a7f02957"],
  ["node_modules/mkdirp/readme.markdown", "dfd7f97586f4e042de011b15014ec8cb"],
  [
    "node_modules/normalize-package-data/README.md",
    "58a9956ad696ea7b9e0b15ddc436d200",
  ],
  [
    "node_modules/normalize-package-data/lib/extract_description.js",
    "5c523c4ab369586f32d49c6caed99c2e",
  ],
  [
    "node_modules/normalize-package-data/lib/fixer.js",
    "cd23b87cc699461c96200df9bcb49d4c",
  ],
  [
    "node_modules/normalize-package-data/lib/make_warning.js",
    "3b87184568b3ba806d38233c904ac250",
  ],
  [
    "node_modules/normalize-package-data/lib/normalize.js",
    "d7c8d95c23842d8eda85fa2ff5ff5e7d",
  ],
  [
    "node_modules/normalize-package-data/lib/safe_format.js",
    "7d5529faadfd4a28c0d3064d404e902e",
  ],
  [
    "node_modules/normalize-package-data/lib/typos.json",
    "8598638c133c563f5322eba9c17be4fc",
  ],
  [
    "node_modules/normalize-package-data/lib/warning_messages.json",
    "20e768e3962566757a16c67d7ad22991",
  ],
  [
    "node_modules/normalize-package-data/package.json",
    "ef1b0b1c2f14d0c0b61b193ead64bc5b",
  ],
  ["node_modules/npm-run-path/index.js", "ccd7be3a8d5534f49e480d7ebd108e17"],
  [
    "node_modules/npm-run-path/package.json",
    "accdf7ebabfc9ba8d04808f263d0b89e",
  ],
  ["node_modules/npm-run-path/readme.md", "79fecc6db1d972d20aaadb9ae327b3a8"],
  ["node_modules/object-assign/index.js", "4eb3c1a156ce2effd67b37a2dfedc632"],
  [
    "node_modules/object-assign/package.json",
    "2854c33ba575a9ebc613d1a617ece277",
  ],
  ["node_modules/object-assign/readme.md", "dfa47f4fb28896ff0b929f4e7dac3705"],
  ["node_modules/once/README.md", "58f1e04252b1477aacd25268d88d5d50"],
  ["node_modules/once/once.js", "d1d6962324348ad89bf780a233952c61"],
  ["node_modules/once/package.json", "afb6ea3bdcad6397e11a71615bd06e3b"],
  ["node_modules/p-finally/index.js", "801ef3e7cc0a0f5ba05bebbfef80787a"],
  ["node_modules/p-finally/package.json", "48bdb4e7489f258943b736ea0487bd13"],
  ["node_modules/p-finally/readme.md", "edd42042f0c6edba8f53d4fe6c506657"],
  ["node_modules/package-json/index.js", "0ff8ef5c39e8ec824eb4e806c32fb2d8"],
  [
    "node_modules/package-json/package.json",
    "19ce651a43867d2a149722344e54eada",
  ],
  ["node_modules/package-json/readme.md", "bcf64c1155eaba5c127f1d30f0632273"],
  ["node_modules/parse-json/index.js", "dd63e2a84ff455d36be56cbeafd79c70"],
  ["node_modules/parse-json/package.json", "8c60533f01154efc5e33af0a4b1f4272"],
  ["node_modules/parse-json/readme.md", "a31d173dd9a021737afdc955aeab49d7"],
  [
    "node_modules/parse-json/vendor/parse.js",
    "567dcd8a04b7e0506a7a945285a711df",
  ],
  [
    "node_modules/parse-json/vendor/unicode.js",
    "fe199b3c69703e7b7468b8cd01b68052",
  ],
  ["node_modules/path-exists/index.js", "22728ba7b6566e930e7c96d80c8a7d9a"],
  ["node_modules/path-exists/package.json", "fa5349c9bcd48d75e3d0418fb1f7291f"],
  ["node_modules/path-exists/readme.md", "d62c92c69e0de8cacf22661c70e88354"],
  [
    "node_modules/path-is-absolute/index.js",
    "135a9dc74dc76b698c2abeaaa165f889",
  ],
  [
    "node_modules/path-is-absolute/package.json",
    "ef6e018bdf67b82ab1285bc799b5367b",
  ],
  [
    "node_modules/path-is-absolute/readme.md",
    "77dcaf91010aea98f54e727c5c34a297",
  ],
  [
    "node_modules/path-is-inside/LICENSE.txt",
    "8de5f23be471b6814f19b2ad82a5208a",
  ],
  [
    "node_modules/path-is-inside/lib/path-is-inside.js",
    "8c0895bb34d0317b22ed7749bb83cd28",
  ],
  [
    "node_modules/path-is-inside/package.json",
    "1927645fc6dbe6c4bb5452bcf168a801",
  ],
  ["node_modules/path-key/index.js", "5dba0819faf7e33637edf7bf750d48e4"],
  ["node_modules/path-key/package.json", "a9bda66c8caf7e0ac15a63d36c72f535"],
  ["node_modules/path-key/readme.md", "faaa9d07d0f92acadeb7537d26c08215"],
  ["node_modules/path-parse/README.md", "716e39f18c8dadd37b49a9f63ccd61d6"],
  ["node_modules/path-parse/index.js", "35a8542db6ae043c3caad7fac18fa62c"],
  ["node_modules/path-parse/package.json", "e225588668693d527d2a82f0db68088c"],
  [
    "node_modules/path-to-regexp/History.md",
    "f54c68eba1a66b4d5f9eaa4ae25e1b97",
  ],
  ["node_modules/path-to-regexp/Readme.md", "611b080406aa74cb00020b81a6c780fa"],
  [
    "node_modules/path-to-regexp/index.d.ts",
    "88e9995ca308bd9ef41e21dae68819bd",
  ],
  ["node_modules/path-to-regexp/index.js", "4afea22c036e29c0b8da09ebb37df753"],
  [
    "node_modules/path-to-regexp/package.json",
    "890930a29b38b544b921cfb31a086aab",
  ],
  ["node_modules/path-type/index.js", "476274d39c1908aa028e5e12797cd010"],
  ["node_modules/path-type/package.json", "172d0c581d2f22d5334a1484efeb1bd2"],
  ["node_modules/path-type/readme.md", "96c45a09c84a290eafca38434057ef2c"],
  ["node_modules/pify/index.js", "d3aa656ec8bdc1a98d648d1ceebb9267"],
  ["node_modules/pify/package.json", "7a3ceb7098f6f6bd3fd58e9957f599c8"],
  ["node_modules/pify/readme.md", "f9471563ef6dd27f1d4df6b6aa28a21b"],
  ["node_modules/pinkie-promise/index.js", "6ad58f1f9e09b5d24f1c002f0c591030"],
  [
    "node_modules/pinkie-promise/package.json",
    "6b1a768dbc0d6416d3bbae9c4cf0e75b",
  ],
  ["node_modules/pinkie-promise/readme.md", "f42f5e165147cb487eee1d73bd9fca4e"],
  ["node_modules/pinkie/index.js", "ea130eba60f416a698c21d01b2ee5067"],
  ["node_modules/pinkie/package.json", "3f35dc060ffed961606280c0c1171fe2"],
  ["node_modules/pinkie/readme.md", "46b3ebc6617f8f45e28cb3bb4b2b1646"],
  ["node_modules/prepend-http/index.js", "3ad257429eccedbd2670db2548a3e073"],
  [
    "node_modules/prepend-http/package.json",
    "7061b533d4288287b7f3ce74a4dcc802",
  ],
  ["node_modules/prepend-http/readme.md", "4889b29b03519c7f28ea542cf6c16652"],
  ["node_modules/pretty-bytes/index.js", "8c32204d3f73d82d5ec972ddae260a59"],
  [
    "node_modules/pretty-bytes/package.json",
    "f632409dd6a121d47ad4f9fe8fb831de",
  ],
  ["node_modules/pretty-bytes/readme.md", "1cf0330216fe484a3dbe07f2f72fab88"],
  ["node_modules/pseudomap/README.md", "c9f3908ac26b9a5f0f92fa5f06675e46"],
  ["node_modules/pseudomap/map.js", "7f678bc2d9d0ece6d4702713a4dbdc15"],
  ["node_modules/pseudomap/package.json", "2126b7cc5be08ab6d1489f20c3e677b8"],
  ["node_modules/pseudomap/pseudomap.js", "ffb83ef6b42486f5b1399991260b500a"],
  ["node_modules/pseudomap/test/basic.js", "54cdf7b00f4e8ba0831d0122e5249279"],
  ["node_modules/rc/LICENSE.APACHE2", "ffcf739dca268cb0f20336d6c1a038f1"],
  ["node_modules/rc/LICENSE.BSD", "e7a2a325a0069e82aff675bbf74464a0"],
  ["node_modules/rc/LICENSE.MIT", "e0f70a42adf526e6f5e605a94d98a420"],
  ["node_modules/rc/README.md", "a46e452256ca8db3294329efacbe3db1"],
  ["node_modules/rc/browser.js", "8cb80d9dc185db3e7faca27feafb3d52"],
  ["node_modules/rc/cli.js", "9740b165e41579140bcf6401deb9db43"],
  ["node_modules/rc/index.js", "665b0bd0e6dffd6575b3549ac2440ebc"],
  ["node_modules/rc/lib/utils.js", "b825abe4a237e7d9145f56904069b49a"],
  ["node_modules/rc/package.json", "dcf8f74e9fad2b9d45a0c5d70eba335d"],
  ["node_modules/rc/test/ini.js", "5d5914db7bc21136f83c05703927cd4c"],
  [
    "node_modules/rc/test/nested-env-vars.js",
    "27d5644f0925b3f2b7c082b4d07fd175",
  ],
  ["node_modules/rc/test/test.js", "8ab5665379909d30b99dc0c59b09d470"],
  ["node_modules/read-pkg-up/index.js", "22fe3248b00dc24bd50d9e9bd2aa881f"],
  ["node_modules/read-pkg-up/package.json", "44ddb940c333f161a14a8b3f2c2f0a12"],
  ["node_modules/read-pkg-up/readme.md", "73be48cd22894fd48790cdbf61496a1e"],
  ["node_modules/read-pkg/index.js", "6c4d8c6fdb256d7d4cdd4c8fa4586853"],
  ["node_modules/read-pkg/package.json", "ced9b299b91433515dad9f9e63cd6f0b"],
  ["node_modules/read-pkg/readme.md", "95dc25f6abd054344df752eae84aace5"],
  ["node_modules/redent/index.js", "652b88d0e4684ccc2c9412e222112f32"],
  ["node_modules/redent/package.json", "2d715efc8cba447750ba4f7c59d1cab9"],
  ["node_modules/redent/readme.md", "3f05080d4138c3c2fdb7e17247afb01c"],
  [
    "node_modules/registry-auth-token/CHANGELOG.md",
    "609d7429d64a5fdf778049f1229ad72c",
  ],
  [
    "node_modules/registry-auth-token/README.md",
    "c1dcc324e6b73dd79c24c58f94516e58",
  ],
  [
    "node_modules/registry-auth-token/base64.js",
    "7a307c15cf41e2e2ec24354944455003",
  ],
  [
    "node_modules/registry-auth-token/index.js",
    "c9bc0e8f913ad45b17b391d8a43188e2",
  ],
  [
    "node_modules/registry-auth-token/package.json",
    "9f7a248f5cea0f8fed1ceb68f31a63dd",
  ],
  [
    "node_modules/registry-auth-token/registry-url.js",
    "83aa45991788df37bef9055b312f30d9",
  ],
  [
    "node_modules/registry-auth-token/test/auth-token.test.js",
    "63870f36c804bf130a9c60bef0471adc",
  ],
  [
    "node_modules/registry-auth-token/test/registry-url.test.js",
    "e214c549b7580dcecfbfe90593b66f2f",
  ],
  [
    "node_modules/registry-auth-token/yarn.lock",
    "3b02f5cd1fffaf3c8502fadb99483e33",
  ],
  ["node_modules/registry-url/index.js", "3da1484610078289517ee8c2e0a5ed3e"],
  [
    "node_modules/registry-url/package.json",
    "8d7c4581b75ada5b11761283740a9df7",
  ],
  ["node_modules/registry-url/readme.md", "94b561124c22fc519b1ce3ea2c6dd2d7"],
  ["node_modules/repeating/index.js", "e8c65ca553cf8d0a82c3da44a6cd377c"],
  ["node_modules/repeating/package.json", "6ff43f30a28c82cae47fb5bd44e7c121"],
  ["node_modules/repeating/readme.md", "93b7505400853eb3a9766942be74f559"],
  ["node_modules/resolve/SECURITY.md", "23030733bf7c5f821e7cbff6098811bd"],
  ["node_modules/resolve/async.js", "0072b73e74e7931c9e922fb6e845b2a6"],
  ["node_modules/resolve/example/async.js", "dc08ce48012fc11583adbe609b1f2520"],
  ["node_modules/resolve/example/sync.js", "54c6056bebcdb34d4bca7e25d556f4fe"],
  ["node_modules/resolve/index.js", "0d09fd975136c80fa0b07090fb6c3df8"],
  ["node_modules/resolve/lib/async.js", "b0772b8edff193ba58392e1ba217f690"],
  ["node_modules/resolve/lib/caller.js", "2bb2d2683e11c79a1b6b8a22caef583b"],
  ["node_modules/resolve/lib/core.js", "9867bb9cebc80c72e83a50a8ca6fa53d"],
  ["node_modules/resolve/lib/core.json", "49e95e84e429668738695df34d545b9b"],
  ["node_modules/resolve/lib/homedir.js", "0fd2b8ddd7fc048801164852bd751c68"],
  ["node_modules/resolve/lib/is-core.js", "db824542b1fcf8fdd8fddc73a7c98856"],
  [
    "node_modules/resolve/lib/node-modules-paths.js",
    "8cda3e75c5735f47e2222eb6c2782fd0",
  ],
  [
    "node_modules/resolve/lib/normalize-options.js",
    "0deb023ba3c6de50244f140e21f4a08f",
  ],
  ["node_modules/resolve/lib/sync.js", "8c33718b32e0b3041bc85e46e47e39b0"],
  ["node_modules/resolve/package.json", "b1daa289d1c4e6b36de2e520f098cd9e"],
  ["node_modules/resolve/readme.markdown", "5e9be42afdffd370ca27cb3c371d3b16"],
  ["node_modules/resolve/sync.js", "98b7c6f62e9b7a1dbc24d4bcd7f46bed"],
  ["node_modules/resolve/test/core.js", "1b98e334b28d23f9130a63201398a5da"],
  ["node_modules/resolve/test/dotdot.js", "eb25b51a3ccfacd7b4fbbb94a342edf8"],
  [
    "node_modules/resolve/test/dotdot/abc/index.js",
    "a6d23efd29494430e12623e97e094c7d",
  ],
  [
    "node_modules/resolve/test/dotdot/index.js",
    "303653a00d6b4e9506c0ec3b7ef50234",
  ],
  [
    "node_modules/resolve/test/faulty_basedir.js",
    "dba3e4709b1aae6d85bfa7a7210bc13c",
  ],
  ["node_modules/resolve/test/filter.js", "4f4848e867716678497a8797df2a81c8"],
  [
    "node_modules/resolve/test/filter_sync.js",
    "7e1a00d127e1512d54bce45054ddab03",
  ],
  [
    "node_modules/resolve/test/home_paths.js",
    "660800979dd80e96a392ba3d435de48e",
  ],
  [
    "node_modules/resolve/test/home_paths_sync.js",
    "e942f35d6b5d0b28df52f7e542d5e0aa",
  ],
  ["node_modules/resolve/test/mock.js", "56413f13828cd95488ae65d55f606bdb"],
  [
    "node_modules/resolve/test/mock_sync.js",
    "5f29325447d2898aa55e739af27c1c00",
  ],
  [
    "node_modules/resolve/test/module_dir.js",
    "dba5837c6fa7833449c084f949c9eb3d",
  ],
  [
    "node_modules/resolve/test/module_dir/xmodules/aaa/index.js",
    "9e45e7ed7dd804266a1b96eb70db330f",
  ],
  [
    "node_modules/resolve/test/module_dir/ymodules/aaa/index.js",
    "b96f38dcf7e5c8674c12f465faf0f054",
  ],
  [
    "node_modules/resolve/test/module_dir/zmodules/bbb/main.js",
    "09fa66df61573f1a368f30489cc33741",
  ],
  [
    "node_modules/resolve/test/module_dir/zmodules/bbb/package.json",
    "4a3e4b65131149d13cf2a9006879a030",
  ],
  [
    "node_modules/resolve/test/node-modules-paths.js",
    "cae1b936b91a0beadb64f43e8c53e5a8",
  ],
  [
    "node_modules/resolve/test/node_path.js",
    "3351665d86f053e84659a8a865cfc626",
  ],
  [
    "node_modules/resolve/test/node_path/x/aaa/index.js",
    "52127f7aa347b8613740d223a1fd8bb8",
  ],
  [
    "node_modules/resolve/test/node_path/x/ccc/index.js",
    "e80e2b6d94895cc3c6641ecf9e1ab0d6",
  ],
  [
    "node_modules/resolve/test/node_path/y/bbb/index.js",
    "65a094ea67b5e4886331645f37463a32",
  ],
  [
    "node_modules/resolve/test/node_path/y/ccc/index.js",
    "1840eac4d3fe020fa3d4642a5ae21cec",
  ],
  [
    "node_modules/resolve/test/nonstring.js",
    "90a1edf2d8cda69acd16d333f232468b",
  ],
  [
    "node_modules/resolve/test/pathfilter.js",
    "bbe22bc568c2aee7953cc78147cb9a6f",
  ],
  [
    "node_modules/resolve/test/pathfilter/deep_ref/main.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/precedence.js",
    "60dbf81e71603b0ce609b8e33eed177f",
  ],
  [
    "node_modules/resolve/test/precedence/aaa.js",
    "49163d248668737d115fc3d13361d34c",
  ],
  [
    "node_modules/resolve/test/precedence/aaa/index.js",
    "5790d1c0db9d396d0c5d383eea413290",
  ],
  [
    "node_modules/resolve/test/precedence/aaa/main.js",
    "293842d0cd56c726e5510a4d72df51b5",
  ],
  [
    "node_modules/resolve/test/precedence/bbb.js",
    "5e98b57495bcdf630a21ec378db7b0e9",
  ],
  [
    "node_modules/resolve/test/precedence/bbb/main.js",
    "889ce877c52c09163d1be7868a3404ec",
  ],
  ["node_modules/resolve/test/resolver.js", "46021ba9263eb741e28fd9989a68e237"],
  [
    "node_modules/resolve/test/resolver/baz/doom.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/baz/package.json",
    "0f73fb8842088e1e70c904431c1ad130",
  ],
  [
    "node_modules/resolve/test/resolver/baz/quux.js",
    "0c1d9e1731bb3d71b0b7a15695bfab14",
  ],
  [
    "node_modules/resolve/test/resolver/browser_field/a.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/browser_field/b.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/browser_field/package.json",
    "e110dd6fd6f26b1f3d45948cc1e27da0",
  ],
  [
    "node_modules/resolve/test/resolver/cup.coffee",
    "68b329da9893e34099c7d8ad5cb9c940",
  ],
  [
    "node_modules/resolve/test/resolver/dot_main/index.js",
    "0c1d9e1731bb3d71b0b7a15695bfab14",
  ],
  [
    "node_modules/resolve/test/resolver/dot_main/package.json",
    "6651c03c05348dc79127845895e2e021",
  ],
  [
    "node_modules/resolve/test/resolver/dot_slash_main/index.js",
    "0c1d9e1731bb3d71b0b7a15695bfab14",
  ],
  [
    "node_modules/resolve/test/resolver/dot_slash_main/package.json",
    "844f13b650c02c10e1fba9ca7d1536f2",
  ],
  [
    "node_modules/resolve/test/resolver/false_main/index.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/false_main/package.json",
    "c957144f31f2bda33e82b3d31c6a4bda",
  ],
  [
    "node_modules/resolve/test/resolver/foo.js",
    "0c1d9e1731bb3d71b0b7a15695bfab14",
  ],
  [
    "node_modules/resolve/test/resolver/incorrect_main/index.js",
    "0b72654f2e307bde1ab4fbeab7af2b78",
  ],
  [
    "node_modules/resolve/test/resolver/incorrect_main/package.json",
    "3d72b845730884cbf8970497318e754c",
  ],
  [
    "node_modules/resolve/test/resolver/invalid_main/package.json",
    "d753bb6b216e118c75d96e043a47ae12",
  ],
  [
    "node_modules/resolve/test/resolver/mug.coffee",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/mug.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/multirepo/lerna.json",
    "a2d913ed76975c203ea97d0c623fb462",
  ],
  [
    "node_modules/resolve/test/resolver/multirepo/package.json",
    "7dc9db9270547f5a146287d6a4bd6d78",
  ],
  [
    "node_modules/resolve/test/resolver/multirepo/packages/package-a/index.js",
    "4daeb9776a4995aa9a64eeba1275ca8a",
  ],
  [
    "node_modules/resolve/test/resolver/multirepo/packages/package-a/package.json",
    "466e84ae67db33dda31ba06fb0212e2d",
  ],
  [
    "node_modules/resolve/test/resolver/multirepo/packages/package-b/index.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/multirepo/packages/package-b/package.json",
    "ce6c7a1786d468fe499a0bbbc654c858",
  ],
  [
    "node_modules/resolve/test/resolver/nested_symlinks/mylib/async.js",
    "2f1e59b3e11027b5ac9db2855a1ffc40",
  ],
  [
    "node_modules/resolve/test/resolver/nested_symlinks/mylib/package.json",
    "d67bf0331e8ca5350eef9b8bc85cde08",
  ],
  [
    "node_modules/resolve/test/resolver/nested_symlinks/mylib/sync.js",
    "4c05bb8c706430ef6b423d6dd01a5797",
  ],
  [
    "node_modules/resolve/test/resolver/other_path/lib/other-lib.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/other_path/root.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/quux/foo/index.js",
    "0c1d9e1731bb3d71b0b7a15695bfab14",
  ],
  [
    "node_modules/resolve/test/resolver/same_names/foo.js",
    "d00072229e607e3109a7c7b617d829f8",
  ],
  [
    "node_modules/resolve/test/resolver/same_names/foo/index.js",
    "0c1d9e1731bb3d71b0b7a15695bfab14",
  ],
  [
    "node_modules/resolve/test/resolver/symlinked/_/node_modules/foo.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  [
    "node_modules/resolve/test/resolver/symlinked/package/bar.js",
    "4e957bc0e855379d8c9d7dc61d94dd5b",
  ],
  [
    "node_modules/resolve/test/resolver/symlinked/package/package.json",
    "0c5b2b6430634798519321e18ed3954d",
  ],
  [
    "node_modules/resolve/test/resolver/without_basedir/main.js",
    "a273979c29547819f4ce096e8454eba6",
  ],
  [
    "node_modules/resolve/test/resolver_sync.js",
    "ca1d8064d901bf5baa6a15669081e5e5",
  ],
  [
    "node_modules/resolve/test/shadowed_core.js",
    "218995538aa76bcf5001a3c997c95aca",
  ],
  [
    "node_modules/resolve/test/shadowed_core/node_modules/util/index.js",
    "d41d8cd98f00b204e9800998ecf8427e",
  ],
  ["node_modules/resolve/test/subdirs.js", "e8a1a80da10c1fd7193ac00aa839644c"],
  ["node_modules/resolve/test/symlinks.js", "a216ed42c6bedc2324a6c93889f9df58"],
  ["node_modules/safe-buffer/README.md", "570381ffb15269fa623a0b75e67eb63a"],
  ["node_modules/safe-buffer/index.d.ts", "372fa012d04e945ab97c27e000f8df78"],
  ["node_modules/safe-buffer/index.js", "35de14728187b87c9ab687c3bdc37436"],
  ["node_modules/safe-buffer/package.json", "b206856c7ef099626bf28cdc5498787a"],
  ["node_modules/semver-diff/index.js", "971357024c060af35d6b11dbbad73751"],
  ["node_modules/semver-diff/package.json", "f5752f0e5d19648e6f085f436d620b87"],
  ["node_modules/semver-diff/readme.md", "b27655d8708635c548f8999c17b3f8aa"],
  ["node_modules/semver/README.md", "1d13da00c75077e51a58b4acb5f1346c"],
  ["node_modules/semver/package.json", "34980d248b7248870a5110725a237557"],
  ["node_modules/semver/range.bnf", "76d83b46734a4604da9df9998fe7d19e"],
  ["node_modules/semver/semver.js", "de16d03358135ddb5cced4f242be473d"],
  [
    "node_modules/serviceworker-cache-polyfill/README.md",
    "1bbf2a7bf3775222176bdd534865152d",
  ],
  [
    "node_modules/serviceworker-cache-polyfill/index.js",
    "3e07c94b20c469bfb10856ebe3abf9e4",
  ],
  [
    "node_modules/serviceworker-cache-polyfill/package.json",
    "7706823bd954a664140cf41f948d8834",
  ],
  ["node_modules/shebang-command/index.js", "c1fab77715684245c8cd4467962fd534"],
  [
    "node_modules/shebang-command/package.json",
    "e3e9b8da6c97c9b272d0dfbaefaca5ca",
  ],
  [
    "node_modules/shebang-command/readme.md",
    "a2a2f79917d0d6c0bd56e2fd4c8a2a42",
  ],
  ["node_modules/shebang-regex/index.js", "5402af3cbceedec29ba210106190a168"],
  [
    "node_modules/shebang-regex/package.json",
    "d0ffe7f7078a4ff229a06822fb3ced86",
  ],
  ["node_modules/shebang-regex/readme.md", "58c2f60fa0022c29174a64010493e388"],
  ["node_modules/signal-exit/LICENSE.txt", "e29e20260a1c78dba16a233048565cde"],
  ["node_modules/signal-exit/README.md", "497761ec32b846595d840fff3cf6deb9"],
  ["node_modules/signal-exit/index.js", "29d83ba58d5bae885cdd0f9a3300b54c"],
  ["node_modules/signal-exit/package.json", "10e35cb03a75943f36de8a88cd1b3767"],
  ["node_modules/signal-exit/signals.js", "088797b13dce89e566484933fe8538b7"],
  ["node_modules/spdx-correct/README.md", "5d2a3d6faf6ced2d1759ded7d12e9d6c"],
  ["node_modules/spdx-correct/index.js", "1cbe456f54f89ab119abd582b46ec737"],
  [
    "node_modules/spdx-correct/package.json",
    "b4ba59eb9535eec2410b41a92130f73f",
  ],
  [
    "node_modules/spdx-exceptions/README.md",
    "3da6b6bd12471d6d6b5d357602830417",
  ],
  [
    "node_modules/spdx-exceptions/deprecated.json",
    "993d7aa047da8be8503094990aad58cd",
  ],
  [
    "node_modules/spdx-exceptions/index.json",
    "01ac8acee7538f248031ac4b7549d0eb",
  ],
  [
    "node_modules/spdx-exceptions/package.json",
    "9b06e0787814edfe98666e676afd12e4",
  ],
  [
    "node_modules/spdx-expression-parse/README.md",
    "2552e806f703ad3996dff0761d77c02c",
  ],
  [
    "node_modules/spdx-expression-parse/index.js",
    "40825d7f343919005e5809025c14876b",
  ],
  [
    "node_modules/spdx-expression-parse/package.json",
    "9da13b6bbcd9c2ec5782fe1b0c0d795e",
  ],
  [
    "node_modules/spdx-expression-parse/parse.js",
    "bf8b106d12f806ea2dafb4410ade5001",
  ],
  [
    "node_modules/spdx-expression-parse/scan.js",
    "38b1f87b7693b050f073300839b4e553",
  ],
  [
    "node_modules/spdx-license-ids/README.md",
    "41cb9fb467c3b1c415410aa5d0805ba4",
  ],
  [
    "node_modules/spdx-license-ids/deprecated.json",
    "ad0bfcd6eae2d786332e9b59135ae092",
  ],
  [
    "node_modules/spdx-license-ids/index.json",
    "0fe12f98f6408b89aa0a7b81f84e9456",
  ],
  [
    "node_modules/spdx-license-ids/package.json",
    "2bef7f8f8855848338a25032710968b9",
  ],
  ["node_modules/string-width/index.js", "0182dbe81ed2fdb851713e08044abd5e"],
  [
    "node_modules/string-width/package.json",
    "9e0cb0da60820ee09789b5537fee5d81",
  ],
  ["node_modules/string-width/readme.md", "51f666fc07118cf4274efc04070c1332"],
  ["node_modules/strip-ansi/index.js", "eab67348b8c3b0c5de0777ececd0809e"],
  ["node_modules/strip-ansi/package.json", "75c599f3b1853e4b8f25db1fb10881e1"],
  ["node_modules/strip-ansi/readme.md", "a71e55e47923aa4aaa475e6a806bb76d"],
  ["node_modules/strip-bom/index.js", "1310cd8a86ac52095ca8d47104385e94"],
  ["node_modules/strip-bom/package.json", "2d9a91ff5476bbe57205f568991b0480"],
  ["node_modules/strip-bom/readme.md", "5028bec06ab579956688a189d0771904"],
  ["node_modules/strip-eof/index.js", "a2352e7dd038d8a423b531ebad6cc856"],
  ["node_modules/strip-eof/package.json", "04e04cb47dd8a9978d7e12d08da68c39"],
  ["node_modules/strip-eof/readme.md", "e237a2387078f6fe2f3fd20bb722c006"],
  ["node_modules/strip-indent/cli.js", "d31478d4f45669ff6d825580ba43d641"],
  ["node_modules/strip-indent/index.js", "8999280439e398ef1c50e4a108d115c2"],
  [
    "node_modules/strip-indent/package.json",
    "778b99795198a64d17aae1c6c70bb902",
  ],
  ["node_modules/strip-indent/readme.md", "ea4eb6df64580359682740ece6ed95c4"],
  [
    "node_modules/strip-json-comments/index.js",
    "8cdf3b8b015e770581934f4bbdc0d971",
  ],
  [
    "node_modules/strip-json-comments/package.json",
    "1dfad7430c94d2f136604def66ed9854",
  ],
  [
    "node_modules/strip-json-comments/readme.md",
    "c836df46a1d296af49076dc2705fe6d8",
  ],
  [
    "node_modules/supports-color/browser.js",
    "eb4c64679962222ba7791179667eef6f",
  ],
  ["node_modules/supports-color/index.js", "9a855ec52971bd5501058217723a4ebc"],
  [
    "node_modules/supports-color/package.json",
    "79d88f702d689c72ebe1798d2853a96e",
  ],
  ["node_modules/supports-color/readme.md", "3285b8b23d82fcb19264a1296c15796c"],
  [
    "node_modules/supports-preserve-symlinks-flag/CHANGELOG.md",
    "21b2e2c4bebc79d16f3fee94bc8ba486",
  ],
  [
    "node_modules/supports-preserve-symlinks-flag/README.md",
    "ea047231f1083b2ec7ccbc8024503991",
  ],
  [
    "node_modules/supports-preserve-symlinks-flag/browser.js",
    "1d6d56ed4832eb474dbb994e6fa805d0",
  ],
  [
    "node_modules/supports-preserve-symlinks-flag/index.js",
    "634f1307f1734f08750c68034a47d9e0",
  ],
  [
    "node_modules/supports-preserve-symlinks-flag/package.json",
    "bfaaddac07876305313de6edc3d38b5d",
  ],
  [
    "node_modules/supports-preserve-symlinks-flag/test/index.js",
    "2c1b6d23e1fab5de4160480a06dd6b40",
  ],
  ["node_modules/sw-precache/README.md", "7ead1626938543e77b461eb78ca613c1"],
  ["node_modules/sw-precache/cli.js", "9f7035f7fe1ec5145aaa2d2ee7b9b631"],
  [
    "node_modules/sw-precache/lib/functions.js",
    "8cee22ad5cf24da3d3b8a35d967ec522",
  ],
  [
    "node_modules/sw-precache/lib/sw-precache.js",
    "a06f9637b9fb6571ba149449d4efd0dd",
  ],
  ["node_modules/sw-precache/package.json", "24f417951c4838d63b0940f45b3f1a7b"],
  [
    "node_modules/sw-precache/service-worker.tmpl",
    "febcef89dc2eaa41591d2f948f0f9deb",
  ],
  ["node_modules/sw-toolbox/README.md", "6fab438c0856b91b5ffc1937dbef876b"],
  ["node_modules/sw-toolbox/companion.js", "6c891a25790dfafb6041bca5dfefdc77"],
  ["node_modules/sw-toolbox/index.d.ts", "b5eb93f97427d7a73d068ad45b16de72"],
  [
    "node_modules/sw-toolbox/lib/helpers.js",
    "0cd89bf34cad65cf397c4df3ff30b952",
  ],
  [
    "node_modules/sw-toolbox/lib/idb-cache-expiration.js",
    "04f87dddabf177b5777858d3bf93d519",
  ],
  [
    "node_modules/sw-toolbox/lib/listeners.js",
    "96239c6ebbb63eb48afe209b47045995",
  ],
  [
    "node_modules/sw-toolbox/lib/options.js",
    "1596f89daa97e175201ede34194e6e2d",
  ],
  ["node_modules/sw-toolbox/lib/route.js", "28eb00fa3f0629f29a57cbadadb5b62e"],
  ["node_modules/sw-toolbox/lib/router.js", "bb5d878875b767dee0247e36dcabbd55"],
  [
    "node_modules/sw-toolbox/lib/strategies/cacheFirst.js",
    "98df7d0a73a09bbee8d1b94cb74a99d9",
  ],
  [
    "node_modules/sw-toolbox/lib/strategies/cacheOnly.js",
    "ac0098e43f27253af0d19ffb0a1e8bf7",
  ],
  [
    "node_modules/sw-toolbox/lib/strategies/fastest.js",
    "ee5f548d4b0a6740d0f58841147f289b",
  ],
  [
    "node_modules/sw-toolbox/lib/strategies/index.js",
    "ae726b3e8a480ff20080d9525a87d4af",
  ],
  [
    "node_modules/sw-toolbox/lib/strategies/networkFirst.js",
    "1eeb34efa5138e0ac610d6fbe32a10aa",
  ],
  [
    "node_modules/sw-toolbox/lib/strategies/networkOnly.js",
    "d3981eb3d4f75bc428b567a39646d54d",
  ],
  [
    "node_modules/sw-toolbox/lib/sw-toolbox.js",
    "d7ce34e1f90a0506bb11acd591b29b2d",
  ],
  ["node_modules/sw-toolbox/package.json", "1623ad3a03d85a8daa84e049532e258b"],
  ["node_modules/sw-toolbox/sw-toolbox.js", "2770efb889cc10c4de88d0b746c2a13c"],
  [
    "node_modules/sw-toolbox/sw-toolbox.js.map",
    "ddac38b51c28fdc819adb2495eb6a3ff",
  ],
  ["node_modules/term-size/index.js", "88f656d5f215b8595179fea33be47d95"],
  ["node_modules/term-size/package.json", "41886f9f0a7a065903235fa16237dc6b"],
  ["node_modules/term-size/readme.md", "31ddf87c237b497504084657fd58df60"],
  [
    "node_modules/term-size/vendor/windows/term-size.exe",
    "8d95c375a874ca3948dd4ee9915c2033",
  ],
  ["node_modules/timed-out/index.js", "863e59c799f982d986951402361204d8"],
  ["node_modules/timed-out/package.json", "a0c45794e8b42ba00193f36d416d254d"],
  ["node_modules/timed-out/readme.md", "e4f47fb1728af5415cef387e52f9477b"],
  ["node_modules/trim-newlines/index.js", "668e166c032aae23e0bc43cd81340c6d"],
  [
    "node_modules/trim-newlines/package.json",
    "7faaa28f1b50b347c094ed32caca8b1f",
  ],
  ["node_modules/trim-newlines/readme.md", "02deadce9e4a8c281e94996caeefcbcf"],
  ["node_modules/unique-string/index.js", "2972e7f95c6111d9201f2ef8b31cadb6"],
  [
    "node_modules/unique-string/package.json",
    "99547a989dd9bd6de965e8789bbebf3a",
  ],
  ["node_modules/unique-string/readme.md", "9a48d4833af6a6dd66e0184e02e18187"],
  ["node_modules/unzip-response/index.js", "2e2f7cca520c32f83d2923fa4bf80fe1"],
  [
    "node_modules/unzip-response/package.json",
    "994ce1d83d5579224570279bb29c73bf",
  ],
  ["node_modules/unzip-response/readme.md", "2cc0bf9ee3712ba6da1940635ed4d86c"],
  ["node_modules/update-notifier/check.js", "b763c113f2d60e5ff338646da626af6f"],
  ["node_modules/update-notifier/index.js", "67b02bc62e79d97f3b778767f731d122"],
  [
    "node_modules/update-notifier/package.json",
    "6dcd533b1028151c1ffa4d0a9e8631b7",
  ],
  [
    "node_modules/update-notifier/readme.md",
    "7cb073ed5dcdf719720b3c8c9f3645b5",
  ],
  ["node_modules/urijs/LICENSE.txt", "208faacdc29d1dbd0fdbe20fbfcf7949"],
  ["node_modules/urijs/README.md", "04392ddb7cc0dfead691f806082d4c47"],
  ["node_modules/urijs/package.json", "1a003af10d30ce8e1aa682fffdc064ae"],
  ["node_modules/urijs/src/IPv6.js", "1e7e9628c2cf1aa1780f1253b0f08df5"],
  [
    "node_modules/urijs/src/SecondLevelDomains.js",
    "ab673688390c0cdb1b05e020ba3fb273",
  ],
  [
    "node_modules/urijs/src/URI.fragmentQuery.js",
    "5574cf1aca8f514e298110728e8352c8",
  ],
  [
    "node_modules/urijs/src/URI.fragmentURI.js",
    "faf82073d0133c69cba0f4d6ea8f4f33",
  ],
  ["node_modules/urijs/src/URI.js", "c176eb62e2f6b93caed2b023cc73e692"],
  ["node_modules/urijs/src/URI.min.js", "1a2b6dfed7c245acdf7d6b14852a7bbf"],
  ["node_modules/urijs/src/URITemplate.js", "2f39028f87e026adf4a3d291a7baca91"],
  ["node_modules/urijs/src/jquery.URI.js", "80721bb44847afff99efca4de62c36f3"],
  [
    "node_modules/urijs/src/jquery.URI.min.js",
    "fe5cc8c107ab6ddacc2af78fd8441dfa",
  ],
  ["node_modules/urijs/src/punycode.js", "3d05e1a0418c33aca6852f201a13ae88"],
  ["node_modules/url-parse-lax/index.js", "2bb4fd9e112b0204bd6a4e9fa1122060"],
  [
    "node_modules/url-parse-lax/package.json",
    "60a9dcdd32590d5f6ed91f715767eafa",
  ],
  ["node_modules/url-parse-lax/readme.md", "2ada5c4bda887ac3356eb98dbd2e1832"],
  [
    "node_modules/validate-npm-package-license/README.md",
    "77ed7d11825611d4a86dd5a036b04d65",
  ],
  [
    "node_modules/validate-npm-package-license/index.js",
    "1e06b285b931777cb00ccb15882e4083",
  ],
  [
    "node_modules/validate-npm-package-license/package.json",
    "e8168fa784142fe417f82359aeffc444",
  ],
  ["node_modules/which/CHANGELOG.md", "0ac8d07ad4edb6440977ad77bb1362e3"],
  ["node_modules/which/README.md", "dc8e60780db89432ba71147658ab58be"],
  ["node_modules/which/package.json", "9db3fcd8026f288ba3aaad83200f5a35"],
  ["node_modules/which/which.js", "fb84cfc01f3cd448d81d933b24fc2db0"],
  ["node_modules/widest-line/index.js", "7c10d90661340bb76a837e7d79ec3289"],
  ["node_modules/widest-line/package.json", "3f380007098042b8be5f90077f80abde"],
  ["node_modules/widest-line/readme.md", "250fabf5b8597c766710a7976a68e949"],
  ["node_modules/wrappy/README.md", "55b4b44807d7edaf6084e42a5ae078d6"],
  ["node_modules/wrappy/package.json", "788804d507f3ed479ea7614fa7d3f1a5"],
  ["node_modules/wrappy/wrappy.js", "04a65e1669dc90fa11c900693c1974b1"],
  [
    "node_modules/write-file-atomic/CHANGELOG.md",
    "42808505fb6a325de37ad4a3f2fbc80b",
  ],
  [
    "node_modules/write-file-atomic/README.md",
    "0ec5d3e813e6fcb03910b84d8c65abe9",
  ],
  [
    "node_modules/write-file-atomic/index.js",
    "8415fb899d5a21b7638801fc2c2b4e14",
  ],
  [
    "node_modules/write-file-atomic/package.json",
    "c1e2712b4a323fb12b7beb31484d0bce",
  ],
  ["node_modules/xdg-basedir/index.js", "c3fc8069cd512568af9dd3ce7e2823fc"],
  ["node_modules/xdg-basedir/package.json", "5680ef157f34cc2a368c99ef8aa7ccae"],
  ["node_modules/xdg-basedir/readme.md", "c11674f297e9481fe2b3f5a0ac4ca892"],
  ["node_modules/yallist/README.md", "2020b4158b3e940665ef19b9b995293a"],
  ["node_modules/yallist/iterator.js", "107908efdffadf7a1854c8f790bf9c21"],
  ["node_modules/yallist/package.json", "67355d84a038118afcde93417b9327dd"],
  ["node_modules/yallist/yallist.js", "12939b655237903f48ede1fee77adaa4"],
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
