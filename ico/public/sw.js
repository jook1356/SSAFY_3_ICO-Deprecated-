if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1558-ffdca6323a9b23e7.js",revision:"ffdca6323a9b23e7"},{url:"/_next/static/chunks/1653-ad0494ab5a1e3483.js",revision:"ad0494ab5a1e3483"},{url:"/_next/static/chunks/1664-d851c5b71380ec58.js",revision:"d851c5b71380ec58"},{url:"/_next/static/chunks/3625-3efb80cf02cf3dba.js",revision:"3efb80cf02cf3dba"},{url:"/_next/static/chunks/4670-e497e31e7e61b5d3.js",revision:"e497e31e7e61b5d3"},{url:"/_next/static/chunks/5391-d29162f1a9f55b73.js",revision:"d29162f1a9f55b73"},{url:"/_next/static/chunks/5551-7cea3d30ffa08447.js",revision:"7cea3d30ffa08447"},{url:"/_next/static/chunks/5675-e88d1fffd9be3ef0.js",revision:"e88d1fffd9be3ef0"},{url:"/_next/static/chunks/6298-f33181fd13387258.js",revision:"f33181fd13387258"},{url:"/_next/static/chunks/7848-1d444ce090957e4e.js",revision:"1d444ce090957e4e"},{url:"/_next/static/chunks/786-cbe0d44bc67f25d6.js",revision:"cbe0d44bc67f25d6"},{url:"/_next/static/chunks/framework-ce84985cd166733a.js",revision:"ce84985cd166733a"},{url:"/_next/static/chunks/main-e86509e4e63f9278.js",revision:"e86509e4e63f9278"},{url:"/_next/static/chunks/pages/404-8518a235126fb17b.js",revision:"8518a235126fb17b"},{url:"/_next/static/chunks/pages/_app-dfc574272fb2c73e.js",revision:"dfc574272fb2c73e"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/admin/confirm-f051c68ea999ceea.js",revision:"f051c68ea999ceea"},{url:"/_next/static/chunks/pages/admin/login-a401e1b81bf911ab.js",revision:"a401e1b81bf911ab"},{url:"/_next/static/chunks/pages/index-704ecc56273285d1.js",revision:"704ecc56273285d1"},{url:"/_next/static/chunks/pages/loading-05f2ad404d97dd40.js",revision:"05f2ad404d97dd40"},{url:"/_next/static/chunks/pages/student/check-687758a5b8f81292.js",revision:"687758a5b8f81292"},{url:"/_next/static/chunks/pages/student/class/jobsearch-325446cc5430d81a.js",revision:"325446cc5430d81a"},{url:"/_next/static/chunks/pages/student/class/students-613ee5c707fdea47.js",revision:"613ee5c707fdea47"},{url:"/_next/static/chunks/pages/student/enter-0a142cdf0f4902fc.js",revision:"0a142cdf0f4902fc"},{url:"/_next/static/chunks/pages/student/finance/deposit-76afbe8b60c7513b.js",revision:"76afbe8b60c7513b"},{url:"/_next/static/chunks/pages/student/finance/invest-dc84d10391791bef.js",revision:"dc84d10391791bef"},{url:"/_next/static/chunks/pages/student/gov/exchequer-804f0705e9920c4c.js",revision:"804f0705e9920c4c"},{url:"/_next/static/chunks/pages/student/gov/job-bc9d4920f429b086.js",revision:"bc9d4920f429b086"},{url:"/_next/static/chunks/pages/student/gov/rule-7c3cf393601fc4d0.js",revision:"7c3cf393601fc4d0"},{url:"/_next/static/chunks/pages/student/home-df9c136e421886ef.js",revision:"df9c136e421886ef"},{url:"/_next/static/chunks/pages/student/home/asset-cd190b6c06b44bc1.js",revision:"cd190b6c06b44bc1"},{url:"/_next/static/chunks/pages/student/home/coupon-df7be63de423e793.js",revision:"df7be63de423e793"},{url:"/_next/static/chunks/pages/student/home/exchequer-04c7d6d43839e75b.js",revision:"04c7d6d43839e75b"},{url:"/_next/static/chunks/pages/student/login-4f29e48a7e2f8a60.js",revision:"4f29e48a7e2f8a60"},{url:"/_next/static/chunks/pages/student/shop/create-14f67a4a221feedd.js",revision:"14f67a4a221feedd"},{url:"/_next/static/chunks/pages/student/shop/student-ab9878099109882a.js",revision:"ab9878099109882a"},{url:"/_next/static/chunks/pages/student/shop/student/%5Bpid%5D copy-4310a1f8aafdecfa.js",revision:"4310a1f8aafdecfa"},{url:"/_next/static/chunks/pages/student/shop/student/%5Bpid%5D-b2a7d5c8ef1479fe.js",revision:"b2a7d5c8ef1479fe"},{url:"/_next/static/chunks/pages/student/shop/teacher-8c0989e6cf60bec4.js",revision:"8c0989e6cf60bec4"},{url:"/_next/static/chunks/pages/student/shop/teacher/%5Bpid%5D-ed8c1298cba5a739.js",revision:"ed8c1298cba5a739"},{url:"/_next/static/chunks/pages/student/signup-6e84098d8ae9bdc2.js",revision:"6e84098d8ae9bdc2"},{url:"/_next/static/chunks/pages/student/test-af95f659da45c96c.js",revision:"af95f659da45c96c"},{url:"/_next/static/chunks/pages/teacher/cert-e340719fe1e3679f.js",revision:"e340719fe1e3679f"},{url:"/_next/static/chunks/pages/teacher/class/coupons-720d8ac6841d8429.js",revision:"720d8ac6841d8429"},{url:"/_next/static/chunks/pages/teacher/class/jobsearch-e36516204d54aaac.js",revision:"e36516204d54aaac"},{url:"/_next/static/chunks/pages/teacher/class/property-740ed55af2f1f4d0.js",revision:"740ed55af2f1f4d0"},{url:"/_next/static/chunks/pages/teacher/class/students-2beb1f468d853741.js",revision:"2beb1f468d853741"},{url:"/_next/static/chunks/pages/teacher/create-b7776266d60420b6.js",revision:"b7776266d60420b6"},{url:"/_next/static/chunks/pages/teacher/finance/deposit-4cb885838ba3972b.js",revision:"4cb885838ba3972b"},{url:"/_next/static/chunks/pages/teacher/finance/invest-ed1b92ab02c463e4.js",revision:"ed1b92ab02c463e4"},{url:"/_next/static/chunks/pages/teacher/gov/exchequer-24b7a9fb375a253b.js",revision:"24b7a9fb375a253b"},{url:"/_next/static/chunks/pages/teacher/gov/job-90d3da3049314080.js",revision:"90d3da3049314080"},{url:"/_next/static/chunks/pages/teacher/gov/rule-4cc017976cdc44f9.js",revision:"4cc017976cdc44f9"},{url:"/_next/static/chunks/pages/teacher/login-d90d60808800098c.js",revision:"d90d60808800098c"},{url:"/_next/static/chunks/pages/teacher/shop/create-94f4206c1913c143.js",revision:"94f4206c1913c143"},{url:"/_next/static/chunks/pages/teacher/shop/my-6f2be3c136587037.js",revision:"6f2be3c136587037"},{url:"/_next/static/chunks/pages/teacher/shop/my/%5Bpid%5D-aca74af05cdec1d9.js",revision:"aca74af05cdec1d9"},{url:"/_next/static/chunks/pages/teacher/shop/student-5ff7772e29563255.js",revision:"5ff7772e29563255"},{url:"/_next/static/chunks/pages/teacher/shop/student/%5Bpid%5D-7c0884478f2652fe.js",revision:"7c0884478f2652fe"},{url:"/_next/static/chunks/pages/teacher/shop/student/temp-6d7abcb8ed1537a3.js",revision:"6d7abcb8ed1537a3"},{url:"/_next/static/chunks/pages/teacher/signup-58c787efb5074134.js",revision:"58c787efb5074134"},{url:"/_next/static/chunks/pages/teacher/test-7fd9b404f06c7d3a.js",revision:"7fd9b404f06c7d3a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ac85c2766400df59.js",revision:"ac85c2766400df59"},{url:"/_next/static/css/caf6b0f152e758ee.css",revision:"caf6b0f152e758ee"},{url:"/_next/static/css/e8e0c87bded236ae.css",revision:"e8e0c87bded236ae"},{url:"/_next/static/z-30BJ2hk3LfkgXmotCq_/_buildManifest.js",revision:"e2eac5730fd591b273715c2e6d98dad6"},{url:"/_next/static/z-30BJ2hk3LfkgXmotCq_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/account.png",revision:"32ef6b90033f3f6ebdff61b3d8b8bb6c"},{url:"/assets/bracket.png",revision:"98a78b5e482c0c18584763765ca49e8d"},{url:"/assets/check/check_image.png",revision:"eed3ec169c7f47a13b0d0a569d651d19"},{url:"/assets/children_icon.png",revision:"32f81f2c9623cc6e07942e486c7065bf"},{url:"/assets/create/create_illust_11.png",revision:"816473e2f71841f6a0814f3cda5cf541"},{url:"/assets/create/create_illust_22.png",revision:"e47e3c2398e5d76453ec41d589b42c04"},{url:"/assets/create/create_illust_33.jpg",revision:"20a8ab0dbf0f127ef324cf07f6fb4b07"},{url:"/assets/deposit/deposit_guide_1.png",revision:"4f791b967612ac21bc294d65c6edec9c"},{url:"/assets/deposit/deposit_guide_2.png",revision:"5801866a6685965750b72a443285a962"},{url:"/assets/deposit/deposit_guide_3.png",revision:"11dc9cd126958baf998a7919782265b4"},{url:"/assets/dock/dock_class.png",revision:"77afde06747231df188660a50dac8882"},{url:"/assets/dock/dock_gov.png",revision:"d0fb7d05ec8bbd8ec561bd235a129650"},{url:"/assets/dock/dock_home.png",revision:"994a4537621b66e9e48602431c20b618"},{url:"/assets/dock/dock_shop.png",revision:"dc4a4615e2710352cdbdf0b97ca56c24"},{url:"/assets/enter/enter_image.png",revision:"16586243fd991c8ff0521eefe8b9e08c"},{url:"/assets/guide/14.jpg",revision:"e2d8ecd8fb9bf704e82726f0f9ecb0d1"},{url:"/assets/guide/background1.jpg",revision:"385307fd48f8b2e71b1e827818562301"},{url:"/assets/guide/background2.jpg",revision:"86855b9b489da4d2870f53d1cd129dcb"},{url:"/assets/guide/background3.jpg",revision:"a06d490525be235144f6b51675f374fe"},{url:"/assets/guide/background4.jpg",revision:"20a8ab0dbf0f127ef324cf07f6fb4b07"},{url:"/assets/guide/deco_1.jpg",revision:"ef2ad3bbba1283be9dcebfc197b230bb"},{url:"/assets/guide/deco_2.jpg",revision:"730bb7231103efc19cb6eaebb94e7403"},{url:"/assets/guide/deco_3.jpg",revision:"04a23fb05344ee32e4dcbfd149b0c707"},{url:"/assets/home/coupon.png",revision:"8c35cb0a5bca78b1e648c54b2cb39464"},{url:"/assets/home/deposit.png",revision:"d7f0fc1b7ae136057d9e849c32c56f39"},{url:"/assets/home/exchequer.png",revision:"b1727ea44eea8adb43371c38d420bb5d"},{url:"/assets/home/stock.png",revision:"fb06184d4a396e222f9b36bac3b70897"},{url:"/assets/icon_desktop.png",revision:"30412d169d509eafe53528181acb3313"},{url:"/assets/job/firefighter.png",revision:"cdf12fa6f593a125afe46ec32268f6d8"},{url:"/assets/job/weather_caster.png",revision:"4c0a0b8f7002d2898c151f4e1735ee80"},{url:"/assets/job/worker_female.png",revision:"2df687db294893046b8843bd903f1ea8"},{url:"/assets/job/worker_male.png",revision:"ae6709260b369b42734f6ac08ee1839c"},{url:"/assets/login/login_illust.png",revision:"4fe66baae98ff55c12a9d242e2147917"},{url:"/assets/login/login_illust_2.jpg",revision:"abcf200dad2b43d6459b268d84257a51"},{url:"/assets/side_menu/student_logout.png",revision:"752000f8dcfbb0348f461ee7f1d2ca2f"},{url:"/assets/side_menu/student_menu_icon.png",revision:"9b59b7f41412cb09a5bdb7132c33f63b"},{url:"/assets/signup/illust.jpg",revision:"7b5290eedb4fb0bac6cc4d0c4a96d6d3"},{url:"/assets/signup/illust.png",revision:"3a9499aad5d3737817ab1c291b696156"},{url:"/favicon.ico",revision:"1b4ea62c745dfb612fb78843e13f2b33"},{url:"/icons/apple-touch-icon-114x114.png",revision:"8b5afa01f8f3c65d890887c63e36bac9"},{url:"/icons/apple-touch-icon-120x120.png",revision:"63032890888c8e1015a793d9328e4521"},{url:"/icons/apple-touch-icon-144x144.png",revision:"20709864fd1aeb1f9e2a220ec19eb9ab"},{url:"/icons/apple-touch-icon-152x152.png",revision:"6cb9fc38b7b4fc7500a14545e5dea663"},{url:"/icons/apple-touch-icon-57x57.png",revision:"b9653b3fd38df630a405ce8743882281"},{url:"/icons/apple-touch-icon-60x60.png",revision:"7344e42345289e31e38f8c79ddc2ae01"},{url:"/icons/apple-touch-icon-72x72.png",revision:"52bee5411a1c0b29198f5669e9967c19"},{url:"/icons/apple-touch-icon-76x76.png",revision:"593db0a21371575ed921835ad3b383fc"},{url:"/icons/code.txt",revision:"aa1202c4cbd6457b40c635bd985ab3db"},{url:"/icons/favicon-128.png",revision:"5e2efde2e370b1e938d444d544035f41"},{url:"/icons/favicon-16x16.png",revision:"d81470663d3e97ec6ce3e4906df6b067"},{url:"/icons/favicon-196x196.png",revision:"fc8516b60e3102bfb92647d3180c870f"},{url:"/icons/favicon-32x32.png",revision:"01a85e52a50d69b4a45bcd089cba9d9d"},{url:"/icons/favicon-96x96.png",revision:"2a7edaac22e4e96c855d16d4ad3e15ed"},{url:"/icons/mstile-144x144.png",revision:"20709864fd1aeb1f9e2a220ec19eb9ab"},{url:"/icons/mstile-150x150.png",revision:"03eff1589ea042aee04f570f95b550a5"},{url:"/icons/mstile-310x150.png",revision:"cf4d55c5dd7f8d325bb87ad4db6ebf2e"},{url:"/icons/mstile-310x310.png",revision:"6518c96e4c297e05563bd211b7162224"},{url:"/icons/mstile-70x70.png",revision:"5e2efde2e370b1e938d444d544035f41"},{url:"/manifest.json",revision:"002bc01cb078c2cff2b5dd08cc433ff0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
