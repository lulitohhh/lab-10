const recommended = [
    {
        "title": "queen's gambit",
        "description": "La huérfana y prodigio del ajedrez, Beth Harmon, lucha contra la adicción mientras busca convertirse en la mejor jugadora de ajedrez del mundo.",
        "rating": 4,
        "imgCard": "https://i.pinimg.com/564x/16/80/dd/1680dd6a09017871bf6fdeedc6ba24c2.jpg",
        "imgBanner": "https://images.squarespace-cdn.com/content/v1/592880808419c27d193683ef/1611071679682-AAZ2W4Y6KC0L0ZGZB8UO/image-asset.jpeg",
    },
    {
        "title": "Matilda, el musical",
        "description": "Matilda, una niña fuera de lo común que tiene gran astucia e imaginación, se lanza a cambiar su propia historia, y los resultados son milagrosos.",
        "rating": 3,
        "imgCard": "https://m.media-amazon.com/images/M/MV5BOTk4ZDBmMDItNzExNi00ZDYyLTk4MjUtYWI1MmNjYzRkODU2XkEyXkFqcGdeQXVyMTUzNzc3NDAz._V1_.jpg",
        "imgBanner": "https://d1wx4w35ubmdix.cloudfront.net/media/event/3WT4/matilda-the-musical-london-marquee-RENm.jpg?AWSAccessKeyId=AKIAJDGBPEIUTC64FFDQ&Signature=EuvS9hSP%2BYGGEAqnPZ9a%2FsdqclU%3D&Expires=1669211387",
    },
    {
        "title": "kaleidoscope",
        "description": "Una banda de ladrones profesionales, liderada por un maestro ladrón, intenta forzar una caja fuerte irrompible en busca del mayor botín de la historia. Sin embargo, la traición, la codicia y otros factores desvían su plan.",
        "rating": 4,
        "imgCard": "https://i.pinimg.com/564x/97/62/51/9762515166ea9e3e943246bf2b7c9489.jpg",
        "imgBanner": "https://ntvb.tmsimg.com/assets/p23582077_b_h8_aa.jpg?w=1280&h=720",
    },
    {
        "title": "Alice in borderland",
        "description": "Un joven obsesionado con los videojuegos, junto a dos amigos, quedan atrapados en una extraña versión de Tokio donde deberán competir para sobrevivir.",
        "rating": 5,
        "imgCard": "https://i.pinimg.com/564x/32/ae/e3/32aee38755a1039b020450e156bebdfe.jpg",
        "imgBanner": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/04/2427941329.jpeg",
    },
    {
        "title": "Enola Holmes",
        "description": "Mientras busca a su madre desaparecida, la adolescente Enola Holmes usa sus habilidades de detective para ayudar a un fugitivo.",
        "rating": 5,
        "imgCard": "https://pics.filmaffinity.com/Enola_Holmes_2-610930550-large.jpg",
        "imgBanner": "https://pauladeveraescritora.files.wordpress.com/2020/10/enola-holmes-banner.jpg",
    },
    {
        "title": "propuesta laboral",
        "description": "Ha-ri acepta presentarse en una cita a ciegas en lugar de una amiga para asustar al pretendiente. Pero los planes se desmoronan cuando descubre que él es su jefe y tiene una propuesta para ella.",
        "rating": 5,
        "imgCard": "https://pics.filmaffinity.com/Propuesta_laboral_Serie_de_TV-917249620-large.jpg",
        "imgBanner": "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYsBux4yffSU-xZILBcJznVosmkk6TWo3ZgSIYAHbcn4QBljUvMK1Ftz6Bmc76fAbUem06lzY9x15Ad_-ZRNOm4Ky-S9M-9hOlm8.jpg?r=7ac",
    },
    {
        "title": "Bleach: Thousand-Year Blood War",
        "description": "Ha-ri acepta presentarse en una cita a ciegas en lugar de una amiga para asustar al pretendiente. Pero los planes se desmoronan cuando descubre que él es su jefe y tiene una propuesta para ella.",
        "rating": 5,
        "imgCard": "https://i.blogs.es/ed36c9/bleach-thousand-year-blood-war_-parte-2/450_1000.jpeg",
        "imgBanner": "https://img3.hulu.com/user/v3/artwork/02a3c8c0-4f1d-4610-bbb4-5b8e9468d7b1?base_image_bucket_name=image_manager&base_image=a21e5764-e2c9-4070-b068-138c979478fc&size=1200x630&format=jpeg",
    },


    ]

    const trending = [
        
        {
            "title": "Matilda, el musical",
            "description": "Matilda, una niña fuera de lo común que tiene gran astucia e imaginación, se lanza a cambiar su propia historia, y los resultados son milagrosos.",
            "rating": 3,
            "imgCard": "https://m.media-amazon.com/images/M/MV5BOTk4ZDBmMDItNzExNi00ZDYyLTk4MjUtYWI1MmNjYzRkODU2XkEyXkFqcGdeQXVyMTUzNzc3NDAz._V1_.jpg",
            "imgBanner": "https://d1wx4w35ubmdix.cloudfront.net/media/event/3WT4/matilda-the-musical-london-marquee-RENm.jpg?AWSAccessKeyId=AKIAJDGBPEIUTC64FFDQ&Signature=EuvS9hSP%2BYGGEAqnPZ9a%2FsdqclU%3D&Expires=1669211387",
        },
        
        {
            "title": "Alice in borderland",
            "description": "Un joven obsesionado con los videojuegos, junto a dos amigos, quedan atrapados en una extraña versión de Tokio donde deberán competir para sobrevivir.",
            "rating": 5,
            "imgCard": "https://i.pinimg.com/564x/32/ae/e3/32aee38755a1039b020450e156bebdfe.jpg",
            "imgBanner": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/10/04/2427941329.jpeg",
        },
        {
            "title": "Bleach: Thousand-Year Blood War",
            "description": "Ha-ri acepta presentarse en una cita a ciegas en lugar de una amiga para asustar al pretendiente. Pero los planes se desmoronan cuando descubre que él es su jefe y tiene una propuesta para ella.",
            "rating": 5,
            "imgCard": "https://i.blogs.es/ed36c9/bleach-thousand-year-blood-war_-parte-2/450_1000.jpeg",
            "imgBanner": "https://img3.hulu.com/user/v3/artwork/02a3c8c0-4f1d-4610-bbb4-5b8e9468d7b1?base_image_bucket_name=image_manager&base_image=a21e5764-e2c9-4070-b068-138c979478fc&size=1200x630&format=jpeg",
        },
        {
            "title": "kaleidoscope",
            "description": "Una banda de ladrones profesionales, liderada por un maestro ladrón, intenta forzar una caja fuerte irrompible en busca del mayor botín de la historia. Sin embargo, la traición, la codicia y otros factores desvían su plan.",
            "rating": 4,
            "imgCard": "https://i.pinimg.com/564x/97/62/51/9762515166ea9e3e943246bf2b7c9489.jpg",
            "imgBanner": "https://ntvb.tmsimg.com/assets/p23582077_b_h8_aa.jpg?w=1280&h=720",
        },
        {
            "title": "Enola Holmes",
            "description": "Mientras busca a su madre desaparecida, la adolescente Enola Holmes usa sus habilidades de detective para ayudar a un fugitivo.",
            "rating": 5,
            "imgCard": "https://pics.filmaffinity.com/Enola_Holmes_2-610930550-large.jpg",
            "imgBanner": "https://pauladeveraescritora.files.wordpress.com/2020/10/enola-holmes-banner.jpg",
        },
        {
            "title": "propuesta laboral",
            "description": "Ha-ri acepta presentarse en una cita a ciegas en lugar de una amiga para asustar al pretendiente. Pero los planes se desmoronan cuando descubre que él es su jefe y tiene una propuesta para ella.",
            "rating": 5,
            "imgCard": "https://pics.filmaffinity.com/Propuesta_laboral_Serie_de_TV-917249620-large.jpg",
            "imgBanner": "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYsBux4yffSU-xZILBcJznVosmkk6TWo3ZgSIYAHbcn4QBljUvMK1Ftz6Bmc76fAbUem06lzY9x15Ad_-ZRNOm4Ky-S9M-9hOlm8.jpg?r=7ac",
        },
        {
            "title": "queen's gambit",
            "description": "La huérfana y prodigio del ajedrez, Beth Harmon, lucha contra la adicción mientras busca convertirse en la mejor jugadora de ajedrez del mundo.",
            "rating": 4,
            "imgCard": "https://i.pinimg.com/564x/16/80/dd/1680dd6a09017871bf6fdeedc6ba24c2.jpg",
            "imgBanner": "https://images.squarespace-cdn.com/content/v1/592880808419c27d193683ef/1611071679682-AAZ2W4Y6KC0L0ZGZB8UO/image-asset.jpeg",
        },
    
        ]