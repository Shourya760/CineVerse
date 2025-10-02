// src/data/moviesData.js

const moviesData = [
  {
    id: 1,
    title: "Inception",
    type: "Movie",
    poster: "https://media.themoviedb.org/t/p/w1280/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    releaseDate: "2010-07-16",
    genre: ["Sci-Fi"],
    rating: 8.8,
    reviewsCount: 2,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Ken Watanabe"],
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    reviews: [
      {
        id: 101,
        user: "IMDb",
        text: "A mind-bending sci-fi thriller with stunning visuals and a complex plot that keeps you on the edge of your seat."
      },
      {
        id: 102,
        user: "Rotten Tomatoes",
        text: "Smart, innovative, and thrilling, Inception is a rare film that works on every level."
      }
    ],
  },
  {
    id: 2,
    title: "Interstellar",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    releaseDate: "2014-11-07",
    genre: ["Adventure"],
    rating: 8.6,
    reviewsCount: 2,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    reviews: [
      {
        id: 201,
        user: "IMDb",
        text: "A breathtaking journey through space that is as emotionally resonant as it is visually spectacular."
      },
      {
        id: 202,
        user: "Rotten Tomatoes",
        text: "A thrilling, thoughtful, and emotional sci-fi epic that's a true cinematic experience."
      }
    ],
  },
  {
    id: 3,
    title: "The Dark Knight",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    genre: ["Action"],
    rating: 9.0,
    reviewsCount: 2,
    description: "Batman faces his greatest challenge yet as the Joker emerges in Gotham City.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    reviews: [
      {
        id: 301,
        user: "IMDb",
        text: "A gritty, complex, and iconic masterpiece with a legendary performance from Heath Ledger."
      },
      {
        id: 302,
        user: "Rotten Tomatoes",
        text: "Dark, complex, and unforgettable, The Dark Knight succeeds as both a thrilling comic book movie and a gripping crime saga."
      }
    ],
  },
  {
    id: 4,
    title: "Dune",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    releaseDate: "2021-10-22",
    genre: ["Sci-Fi"],
    rating: 8.2,
    reviewsCount: 2,
    description: "Paul Atreides, a brilliant young man, must travel to a dangerous planet to ensure the future of his family.",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya", "Oscar Isaac"],
    trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
    reviews: [
      {
        id: 401,
        user: "IMDb",
        text: "A stunning and faithful adaptation of the classic novel that's a feast for the eyes and ears."
      },
      {
        id: 402,
        user: "Rotten Tomatoes",
        text: "Dune grapples with its dense source material and emerges a visually stunning, emotionally resonant, and action-packed sci-fi epic."
      }
    ],
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w1280/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    releaseDate: "2019-04-26",
    genre: ["Action"],
    rating: 8.4,
    reviewsCount: 2,
    description: "After the devastating events of Infinity War, the Avengers assemble once more to restore balance to the universe.",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    reviews: [
      {
        id: 501,
        user: "IMDb",
        text: "A monumental and satisfying conclusion that delivers on years of buildup with heart and spectacle."
      },
      {
        id: 502,
        user: "Rotten Tomatoes",
        text: "Emotional, entertaining, and packed with action, Avengers: Endgame delivers a truly epic finale."
      }
    ],
  },
  {
    id: 6,
    title: "Joker",
    type: "Movie",
    poster: "https://image.tmdb.org/t/p/w1280/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    releaseDate: "2019-10-04",
    genre: ["Drama"],
    rating: 8.5,
    reviewsCount: 2,
    description: "In Gotham City, a failed comedian descends into madness and emerges as the criminal mastermind Joker.",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
    trailer: "https://www.youtube.com/embed/z8p49_jY2Gg",
    reviews: [
      {
        id: 601,
        user: "IMDb",
        text: "A powerful and disturbing character study with an Oscar-winning performance from Joaquin Phoenix."
      },
      {
        id: 602,
        user: "Rotten Tomatoes",
        text: "Joker delivers a dark and gripping origin story, elevated by Joaquin Phoenix's compelling performance."
      }
    ],
  },
  {
    id: 7,
    title: "Oppenheimer",
    type: "Movie",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4PyY705KaR7pdZoIWUlVfI5qMx37RHmELQ&s",
    releaseDate: "2023-07-21",
    genre: ["Biography"],
    rating: 8.9,
    reviewsCount: 2,
    description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    trailer: "https://www.youtube.com/embed/bK6GD9WvFk8",
    reviews: [
      {
        id: 701,
        user: "IMDb",
        text: "A monumental and intense biographical thriller that's a masterclass in filmmaking."
      },
      {
        id: 702,
        user: "Rotten Tomatoes",
        text: "A stunning and immersive historical drama that showcases Cillian Murphy's remarkable performance."
      }
    ],
  },
  {
    id: 8,
    title: "The Matrix",
    type: "Movie",
    poster: "https://i.pinimg.com/736x/64/bb/3b/64bb3bb874ecc9e952ca077f91887c3c.jpg",
    releaseDate: "1999-03-31",
    genre: ["Action"],
    rating: 8.7,
    reviewsCount: 2,
    description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    reviews: [
      {
        id: 801,
        user: "IMDb",
        text: "A sci-fi action classic that redefined a genre with its groundbreaking visuals and philosophical themes."
      },
      {
        id: 802,
        user: "Rotten Tomatoes",
        text: "An ambitious and visually innovative film that set the standard for modern sci-fi action."
      }
    ],
  },
  {
    id: 9,
    title: "Breaking Bad",
    type: "Series",
    poster: "https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg",
    releaseDate: "2008-01-20",
    genre: ["Crime"],
    rating: 9.5,
    reviewsCount: 2,
    description: "A high school chemistry teacher turns to a life of crime after being diagnosed with cancer.",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    trailer: "https://www.youtube.com/embed/XZ8zw1m_w-0",
    reviews: [
      {
        id: 901,
        user: "IMDb",
        text: "One of the greatest television series of all time, with a compelling story and unforgettable performances."
      },
      {
        id: 902,
        user: "Rotten Tomatoes",
        text: "Breaking Bad is a powerful, dark, and utterly gripping descent into the criminal underworld."
      }
    ],
  },
  {
    id: 10,
    title: "Stranger Things",
    type: "Series",
    poster: "https://image.tmdb.org/t/p/w1280/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    releaseDate: "2016-07-15",
    genre: ["Sci-Fi"],
    rating: 8.7,
    reviewsCount: 2,
    description: "A group of kids uncover supernatural mysteries in their town.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    trailer: "https://www.youtube.com/embed/b9EkMcXfX74",
    reviews: [
      {
        id: 1001,
        user: "IMDb",
        text: "A nostalgic and thrilling tribute to 80s sci-fi and horror with a great cast and a compelling mystery."
      },
      {
        id: 1002,
        user: "Rotten Tomatoes",
        text: "Stranger Things is a gripping, fun, and emotionally rich tale that captures the spirit of classic adventure films."
      }
    ],
  },
  {
    id: 11,
    title: "The Witcher",
    type: "Series",
    poster: "https://image.tmdb.org/t/p/w1280/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    releaseDate: "2019-12-20",
    genre: ["Fantasy"],
    rating: 8.2,
    reviewsCount: 2,
    description: "Geralt of Rivia, a monster hunter, journeys across the Continent battling deadly creatures.",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    trailer: "https://www.youtube.com/embed/szC-6KxU-gI",
    reviews: [
      {
        id: 1101,
        user: "IMDb",
        text: "A solid fantasy series with epic battles, a captivating world, and a fantastic performance from Henry Cavill."
      },
      {
        id: 1102,
        user: "Rotten Tomatoes",
        text: "Henry Cavill's charisma and the show's action-packed fantasy world make The Witcher a worthwhile watch."
      }
    ],
  },
  {
    id: 12,
    title: "Peaky Blinders",
    type: "Series",
    poster: "https://image.tmdb.org/t/p/w1280/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg",
    releaseDate: "2013-09-12",
    genre: ["Crime"],
    rating: 8.8,
    reviewsCount: 2,
    description: "A gangster family epic set in 1919 Birmingham, England.",
    cast: ["Cillian Murphy", "Paul Anderson", "Helen McCrory", "Tom Hardy"],
    trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
    reviews: [
      {
        id: 1201,
        user: "IMDb",
        text: "A stylish and compelling gangster saga with brilliant acting and a powerful story."
      },
      {
        id: 1202,
        user: "Rotten Tomatoes",
        text: "Peaky Blinders is a stylish and brutal crime drama with a charismatic lead and a captivating sense of place."
      }
    ],
  },
  {
    id: 13,
    title: "Game of Thrones",
    type: "Series",
    poster: "https://image.tmdb.org/t/p/w1280/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    releaseDate: "2011-04-17",
    genre: ["Fantasy"],
    rating: 9.3,
    reviewsCount: 2,
    description: "Nine noble families fight for control over the lands of Westeros.",
    cast: ["Peter Dinklage", "Kit Harington", "Emilia Clarke", "Lena Headey"],
    trailer: "https://www.youtube.com/embed/x-6-4n_7x1g",
    reviews: [
      {
        id: 1301,
        user: "IMDb",
        text: "A monumental fantasy series with a complex plot and stunning production values that captivates audiences worldwide."
      },
      {
        id: 1302,
        user: "Rotten Tomatoes",
        text: "Game of Thrones delivers a brutal, compelling, and endlessly watchable epic that is a landmark in television history."
      }
    ],
  },
  {
    id: 14,
    title: "Attack on Titan",
    type: "Anime",
    poster: "https://image.tmdb.org/t/p/w1280/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    releaseDate: "2013-04-07",
    genre: ["Action"],
    rating: 9.1,
    reviewsCount: 2,
    description: "Humanity fights for survival against gigantic humanoid Titans.",
    cast: ["Yuki Kaji", "Marina Inoue", "Josh Grelle", "Bryce Papenbrook"],
    trailer: "https://www.youtube.com/embed/MGRm4IzK1wa",
    reviews: [
      {
        id: 1401,
        user: "IMDb",
        text: "A dark and gripping anime with a unique premise, intense action, and a constantly evolving mystery."
      },
      {
        id: 1402,
        user: "Rotten Tomatoes",
        text: "Attack on Titan is a captivating and thrilling series with an unforgettable blend of horror and action."
      }
    ],
  },
  {
    id: 15,
    title: "Demon Slayer",
    type: "Anime",
    poster: "https://image.tmdb.org/t/p/w1280/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    releaseDate: "2019-04-06",
    genre: ["Adventure"],
    rating: 8.9,
    reviewsCount: 2,
    description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
    cast: ["Natsuki Hanae", "Akari Kitō", "Hiro Shimono", "Yoshitsugu Matsuoka"],
    trailer: "https://www.youtube.com/embed/G6jWd4t0q8M",
    reviews: [
      {
        id: 1501,
        user: "IMDb",
        text: "A beautifully animated and emotionally resonant anime with breathtaking fight choreography."
      },
      {
        id: 1502,
        user: "Rotten Tomatoes",
        text: "Demon Slayer is a visually stunning and heartwarming adventure with a fantastic cast of characters."
      }
    ],
  },
  {
    id: 16,
    title: "Death Note",
    type: "Anime",
    poster: "https://i.pinimg.com/736x/04/8a/fc/048afcc1d1f6b331a63357c6c7fee96d.jpg",
    releaseDate: "2006-10-04",
    genre: ["Thriller"],
    rating: 9.0,
    reviewsCount: 2,
    description: "A high school student discovers a notebook that can kill anyone whose name is written in it.",
    cast: ["Mamoru Miyano", "Kappei Yamaguchi", "Noriko Hidaka", "Aya Hirano"],
    trailer: "https://www.youtube.com/embed/Nn1w1F7X20k",
    reviews: [
      {
        id: 1601,
        user: "IMDb",
        text: "A brilliant psychological thriller that keeps you guessing with its moral complexity and intellectual cat-and-mouse game."
      },
      {
        id: 1602,
        user: "Rotten Tomatoes",
        text: "Death Note is a masterfully crafted thriller with an endlessly compelling and thought-provoking plot."
      }
    ],
  },
  {
    id: 17,
    title: "Naruto Shippuden",
    type: "Anime",
    poster: "https://image.tmdb.org/t/p/w1280/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg",
    releaseDate: "2007-02-15",
    genre: ["Adventure"],
    rating: 8.7,
    reviewsCount: 2,
    description: "Naruto continues his journey to become the strongest ninja.",
    cast: ["Junko Takeuchi", "Chie Nakamura", "Noriaki Sugiyama", "Kazuhiko Inoue"],
    trailer: "https://www.youtube.com/embed/xR62roSYoAo",
    reviews: [
      {
        id: 1701,
        user: "IMDb",
        text: "An epic and emotional series that follows Naruto's journey with powerful character development and intense battles."
      },
      {
        id: 1702,
        user: "Rotten Tomatoes",
        text: "A sprawling and action-packed shonen series that will keep you invested in the world and its characters."
      }
    ],
  },
  {
    id: 18,
    title: "One Piece",
    type: "Anime",
    poster: "https://i.pinimg.com/736x/ec/b4/17/ecb41799d40f61854b120e7ce4bbf023.jpg",
    releaseDate: "1999-10-20",
    genre: ["Adventure"],
    rating: 9.0,
    reviewsCount: 2,
    description: "Monkey D. Luffy and his crew search for the ultimate treasure, the One Piece.",
    cast: ["Mayumi Tanaka", "Kazuya Nakai", "Akemi Okamura", "Kappei Yamaguchi"],
    trailer: "https://www.youtube.com/embed/CWT-jxE36Jc",
    reviews: [
      {
        id: 1801,
        user: "IMDb",
        text: "A legendary adventure anime with a huge world, amazing characters, and a story that spans decades."
      },
      {
        id: 1802,
        user: "Rotten Tomatoes",
        text: "One Piece is a joyous and exhilarating adventure filled with humor, heart, and unforgettable characters."
      }
    ],
  },
];

export default moviesData;  