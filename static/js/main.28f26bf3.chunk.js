(this["webpackJsonpinstagram-starter"]=this["webpackJsonpinstagram-starter"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/kenz.e042e2bb.png"},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(8),m=a.n(n),r=a(11),o=a(4),c=function(e){var t=e.comment;return i.a.createElement("div",{className:"comment-text"},i.a.createElement("span",{className:"user"},t.username)," ",i.a.createElement("span",{className:"comment"},t.text))},l=(a(17),function(e){var t=e.comments;return i.a.createElement("div",null,t.map((function(e){return i.a.createElement(c,{key:e.id,comment:e})})))}),u=a(2),p=a(3),d=function(e){var t=e.likePost,a=e.numberOfLikes,n=Object(s.useState)(!1),m=Object(o.a)(n,2),r=m[0],c=m[1];return i.a.createElement("div",null,i.a.createElement("div",{className:"like-section",key:"likes-icons-container"},i.a.createElement("div",{className:"like-section-wrapper"},i.a.createElement(u.a,{onClick:function(){c(!0),console.log("liked",r),!1===r?t():alert("You can only like something once!")},icon:p.d})),i.a.createElement("div",{className:"like-section-wrapper"},i.a.createElement(u.a,{icon:p.b}))),i.a.createElement("p",{className:"like-number"},a," likes"))},h=function(e){var t=e.thumbnailUrl,a=e.username;return i.a.createElement("div",{className:"post-header"},i.a.createElement("div",{className:"post-thumb-wrapper"},i.a.createElement("img",{alt:"post header",className:"post-thumb",src:t})),i.a.createElement("h2",null,a))},g=function(e){var t=e.post,a=e.likePost;return i.a.createElement("div",{className:"post-border"},i.a.createElement(h,{username:t.username,thumbnailUrl:t.thumbnailUrl}),i.a.createElement("div",{className:"post-image-wrapper"},i.a.createElement("img",{alt:"post thumbnail",className:"post-image",src:t.imageUrl})),i.a.createElement(d,{likePost:function(){return a(t.id)},numberOfLikes:t.likes}),i.a.createElement(l,{comments:t.comments}))},f=(a(23),function(e){var t=e.likePost,a=e.posts;return i.a.createElement("div",{className:"posts-container-wrapper"},a.map((function(e){return i.a.createElement(g,{key:e.id,post:e,likePost:t,comments:e.comments})})))}),b=a(9),w=(a(24),function(e){var t=e.setSearchTerms,a=e.searchPost;return i.a.createElement("div",{className:"search-bar-wrapper"},i.a.createElement("div",{className:"social"},i.a.createElement(u.a,{icon:b.a})),i.a.createElement("form",{className:"search-form"},i.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&function(e){e.preventDefault(),"Enter"===e.key&&a()}(e)}})),i.a.createElement("div",{className:"social-wrapper"},i.a.createElement("div",{className:"social"},i.a.createElement(u.a,{icon:p.c})),i.a.createElement("div",{className:"social"},i.a.createElement(u.a,{icon:p.d})),i.a.createElement("div",{className:"social"},i.a.createElement(u.a,{icon:p.a}))))}),x=a(10),v=[{id:1,username:"kenzcoffeeroasters",thumbnailUrl:a.n(x).a,imageUrl:"https://i.pinimg.com/originals/19/6b/0c/196b0c16e3fd1fdd6ef110c51f254d59.jpg",likes:800,timestamp:"July 17th 2017, 12:42:40 pm",comments:[{id:22,username:"philzcoffee",text:"We've got more than Kenz Coffee"},{id:23,username:"biancasaurus",text:"Exchange you Kenz for Philz!"},{id:24,username:"martinseludo",text:"Philz is the best!"}]},{id:2,username:"twitch",thumbnailUrl:"https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",imageUrl:"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80",likes:4307,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"twitch",text:"Epic Street Fighter action here in Vegas!"},{id:37,username:"michaelmarzetta",text:"Omg that match was crazy"},{id:38,username:"the_leprechaun",text:"What a setup"},{id:39,username:"dennis_futbol",text:"It that injustice"}]},{id:3,username:"Bitcoin",thumbnailUrl:"https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png",imageUrl:"https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",likes:407,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"bitcoin",text:"Epic mooning!"},{id:37,username:"crypto",text:"BTC to the Mooon"},{id:38,username:"ethereum",text:"What a coin"},{id:39,username:"dennis_futbol",text:"It that injustice"}]},{id:4,username:"Traveler",thumbnailUrl:"https://cdn72.picsart.com/193945203004202.jpg?type=webp&to=crop&r=256",imageUrl:"https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",likes:407,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"t12sds",text:"Take me there!"},{id:37,username:"Yello1",text:"Hello Friend"},{id:38,username:"Glue2",text:"What a view"},{id:39,username:"Dennsi",text:"Where is this?"}]},{id:3,username:"Dogzer",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]},{id:3,username:"Hanks",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]},{id:3,username:"AhmadSubeh",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]},{id:3,username:"Russ",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://cdn.theatlantic.com/static/mt/assets/culture_test/planesbanner.jpg",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]},{id:3,username:"YouTu",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]},{id:3,username:"Ren",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://cars.usnews.com/dims4/USNEWS/820fffc/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F202003%2F128413%2F1_title_2020_ford_gt_640x420.jpg",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]},{id:3,username:"Yuri",thumbnailUrl:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d",imageUrl:"https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg",likes:707,timestamp:"July 15th 2017, 03:12:09 pm",comments:[{id:36,username:"travel1",text:"Come visit us!"},{id:37,username:"Hamburg",text:"let's go to ocean"},{id:38,username:"Harry",text:"What a view"},{id:40,username:"dennis_futbol",text:"It that sweets"}]}],E=(a(25),function(){var e=Object(s.useState)(v),t=Object(o.a)(e,2),a=t[0],n=t[1],m=Object(s.useState)(""),c=Object(o.a)(m,2),l=c[0],u=c[1],p=Object(s.useState)(v),d=Object(o.a)(p,1)[0];console.log("DUMMYDATA",v);console.log(l),console.log("POSTS",a);return i.a.createElement("div",{className:"App"},i.a.createElement(w,{setSearchTerms:u,searchPost:function(){var e=d.filter((function(e){return(e.username.toLowerCase()+e.comments[0].text.toLowerCase()).includes(l)}));n(e)}}),i.a.createElement(f,{likePost:function e(t){console.log("LikePost",e),console.log(a),n(a.map((function(e){return e.id===t?Object(r.a)({},e,{likes:e.likes+1}):e})))},posts:a}))});a(26);m.a.render(i.a.createElement(E,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.28f26bf3.chunk.js.map