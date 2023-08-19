const AllUsersPosts = [
    {
        user: { username: 'elon_musk', profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg' },
        content: 'Launching dreams into the future 🚀 #MarsBound #SpaceXVisionaries',
        images: ['https://im.indiatimes.in/content/2023/Aug/SGCGG2UWM5OYDLRADR72FWPDBI_64d0998d05917.jpg',
        'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/NPYZQCXOD5NHFDJXBOQLVZD7PM.jpg', 
         'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-07/230724-elon-musk-ac-1041p-bc05fb.jpg'],
        comments: [
            { username: 'user1', content: 'Beautiful!' },
            { username: 'user2', content: 'Wow, that looks incredible!' },
        ],
    },
    {
        user: { username: 'mark_zukerberg', profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg', bio: 'Lover of art, music, and travel.' },
        content: "Connecting the world, one click at a time ✨ #TechInnovation #SocialConnections",
        images: ['https://www.protocol.com/media-library/facebook-ceo-mark-zuckerberg.jpg?id=26602437&width=1245&height=700&quality=85&coordinates=0%2C51%2C0%2C51',
                'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/07/Mark-Zuckerberg-Israel-Adesanya-Alexander-Volkanovski.jpeg?w=1000&h=600&crop=1'],
        comments: [
            { username: 'user1', content: 'Beautiful!' },
            { username: 'user2', content: 'Wow, that looks incredible!' },
        ],
    },
    {
        user: { username: 'jeff_bezoz', profilePicture: 'https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg', bio: 'Lover of art, music, and travel.' },
        content: "From garage to galactic greatness 🌌 #AmazonJourney #InfinitePossibilities",
        images: ['https://miro.medium.com/v2/resize:fit:1200/1*3U0r3rpqtU0L3AHJ0ygzig.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg',
        'https://www.nzherald.co.nz/resizer/m5vwRCmiEb49E41Lz_Fo2e9lE8Q=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/CMXP3A6FI72YPBU76CKIMLWDSI.jpg'],
        comments: [
            { username: 'user1', content: 'Beautiful!' },
            { username: 'user2', content: 'Wow, that looks incredible!' },
        ],
    },
    {
        user: { username: 'steve_jobs', profilePicture: 'https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png', bio: 'Lover of art, music, and travel.' },
        content: "Think different, create magic 🍏 #InnovationLegacy #AppleRevolution",
        images: ['https://image.cnbcfm.com/api/v1/image/104300870-steve_jobs.jpg?v=1532563905&w=1600&h=900',
                'https://techcrunch.com/wp-content/uploads/2015/09/steve-jobs.jpg',
                 'https://media.wired.com/photos/592687718d4ebc5ab806a98d/master/w_2560%2Cc_limit/apple-steve-jobs-iphone-AP_070109066608.jpg'],
        comments: [
            { username: 'user1', content: 'Beautiful!' },
            { username: 'user2', content: 'Wow, that looks incredible!' },
        ],
    },
    // Add more posts
];

export default AllUsersPosts