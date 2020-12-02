import kenz from './assets/kenz.png';



const dummyData = [
    {
        id: 1,
        username: "kenzcoffeeroasters",
        thumbnailUrl: kenz,
        imageUrl: 'https://i.pinimg.com/originals/19/6b/0c/196b0c16e3fd1fdd6ef110c51f254d59.jpg',
        likes: 800,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than Kenz Coffee",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Exchange you Kenz for Philz!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Philz is the best!",
            },
        ],
    },
    {
        id: 2,
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 37,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
            {
                id: 38,
                username: "the_leprechaun",
                text: "What a setup",
            },
            {
                id: 39,
                username: "dennis_futbol",
                text: "It that injustice",
            },
        ],
    },
    {
        id: 3,
        username: "Bitcoin",
        thumbnailUrl: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png',
        imageUrl: 'https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        likes: 407,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "bitcoin",
                text: "Epic mooning!",
            },
            {
                id: 37,
                username: "crypto",
                text: "BTC to the Mooon",
            },
            {
                id: 38,
                username: "ethereum",
                text: "What a coin",
            },
            {
                id: 39,
                username: "dennis_futbol",
                text: "It that injustice",
            },
        ],
    },
    {
        id: 4,
        username: "Traveler",
        thumbnailUrl: 'https://cdn72.picsart.com/193945203004202.jpg?type=webp&to=crop&r=256',
        imageUrl: 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        likes: 407,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "t12sds",
                text: "Take me there!",
            },
            {
                id: 37,
                username: "Yello1",
                text: "Hello Friend",
            },
            {
                id: 38,
                username: "Glue2",
                text: "What a view",
            },
            {
                id: 39,
                username: "Dennsi",
                text: "Where is this?",
            },
        ],
    },
    {
        id: 3,
        username: "Dogzer",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
    {
        id: 3,
        username: "Hanks",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
    {
        id: 3,
        username: "AhmadSubeh",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
    {
        id: 3,
        username: "Russ",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://cdn.theatlantic.com/static/mt/assets/culture_test/planesbanner.jpg',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
    {
        id: 3,
        username: "YouTu",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
    {
        id: 3,
        username: "Ren",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://cars.usnews.com/dims4/USNEWS/820fffc/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F202003%2F128413%2F1_title_2020_ford_gt_640x420.jpg',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
    {
        id: 3,
        username: "Yuri",
        thumbnailUrl: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto/doghp-092319-img-new-pet-puppy-256w-256h-d',
        imageUrl: 'https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg',
        likes: 707,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "travel1",
                text: "Come visit us!",
            },
            {
                id: 37,
                username: "Hamburg",
                text: "let's go to ocean",
            },
            {
                id: 38,
                username: "Harry",
                text: "What a view",
            },
            {
                id: 40,
                username: "dennis_futbol",
                text: "It that sweets",
            },
        ],
    },
];

export default dummyData;
