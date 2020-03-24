const data = {
    social: {
        links: {
            facebook: "https://www.facebook.com/varvarakutuzova",
            twitter: "",
            youtube: "https://www.youtube.com/user/kutandr/videos",
            instagram: "https://www.instagram.com/varvarakutuzova.piano",
            vk: "https://vk.com/varvarakutuzova",
        }
    },
    gallery: [
        { // Start image data
            fileName: "6.jpg",
            en: {
                title: "First image",
                description: "Some long text about this image and more details..."
            },
            ru: {
                title: "Придумай название",
                description: "Однажды я играла ..."
            }
        }, // End image data
        {
            fileName: "2.jpg",
            en: {
                title: "",
                description: ""
            },
            ru: {
                title: "Другое название",
                description: "Иногда приходится кланяться"
            }
        },
        {
            fileName: "2.jpg",
            en: {
                title: "",
                description: ""
            },
            ru: {
                title: "Другое название",
                description: "Иногда приходится кланяться"
            }
        },
        {
            fileName: "3.png",
            en: {
                title: "",
                description: ""
            },
            ru: {
                title: "Но нэйм",
                description: "А ещё я люблю фотки разглядывать..."
            },
        },
        {
            fileName: "4.jpg",
            en: {
                title: "Thirst image",
                description: ""
            },
            ru: {
                title: "",
                description: ""
            }
        },
        {
            fileName: "5.png",
            en: {
                title: "Fourth image",
                description: "Some long text about this image and more details..."
            },
            ru: {
                title: "Sold out",
                description: ""
            }
        },
        {
            fileName: "1.jpg",
            en: {
                title: "First image",
                description: "Some long text about this image and more details..."
            },
            ru: {
                title: "",
                description: ""
            }
        },
    ],
    music: {
        albumTitle: {
            en: "Новый диск // \n БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
            ru: 'Название альбома // \n "БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ"'
        },
        tracks: [
            {
                fileName: "WhatsApp Audio 2019-10-28 at 13.14.26.mpeg",
                en: {
                    artist: "Варвара Кутузова",
                    album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Магдебург"
                },
                ru: {
                    artist: "Варвара Кутузова",
                    //album: "Варвара Кутузова /  БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Магдебург \n очень классный live recording"
                }
            },
            {
                fileName: "WhatsApp Audio 2020-03-13 at 00.07.50.mp4",
                en: {
                    artist: "Варвара Кутузова",
                    //album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Что попало, только не я"
                },
                ru: {
                    artist: "Варвара Кутузова",
                    //album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "А это только что из Ярославля - live recording"
                }
            },
            {
                fileName: "4.wav",
                en: {
                    artist: "Варвара Кутузова",
                    album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Что попало, только не я 1"
                },
                ru: {
                    artist: "Варвара Кутузова",
                    // album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Что попало, только не я 1 - studio recording"
                }
            },
            {
                fileName: "2.wav",
                en: {
                    artist: "Варвара Кутузова",
                    album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Что попало, только не я 2 - тоже studio recording"
                },
                ru: {
                    artist: "Варвара Кутузова",
                    album: "Варвара Кутузова / БЫСТРЕЕ ПОСЛУШАЙТЕ ВСЕ",
                    trackName: "Что попало, только не я 2- тоже studio recording"
                }
            },
        ]
    },
    video: {
        tracks: [
            {
                url: "https://www.youtube.com/embed/mAVM5qwed8A",
                en: {
                    label: "",
                    trackName: "Soul of SENAR",
                    description: `Edited and Filmed by IVAN PROSKURYAKOV
                    Produced by ArtDIALOG`
                },
                ru: {
                    label: "",
                    trackName: "Soul of SENAR",
                    description: `Режиссёр и оператор ИВАН ПРСКУРЯКОВ
                    Produced by ArtDIALOG`
                }
            },
            {
                url: "https://youtu.be/eSjPWElU4Dc?list=RDfkYpvDxGo-U",
                en: {
                    label: "P.I.Tchaikovsky",
                    trackName: "Theme & Variations",
                    /* description: `Directed by VINCE MALC & EMILIA COLE
                    Edited and Filmed by NICOLAS TROY
                    Produced by NIKI HEART,
                    Wix Films LTD.`*/
                },
                ru: {
                    label: "П.И.Чайковский",
                    trackName: "Тема с вариациями",
                    description: `Москва, ЦМШ
                    январь 2019`
                }
            }
        ]
    },
    tour: {
        events: [
            {
                en: {
                    year: "2020",
                },
                ru: {
                    year: "2020",
                }
            },
            {
                date: "03-26",
                toTickets: "https://",
                en: {
                    dateString: "26 March",
                    place: "Зарядье",
                    location: "Москва",
                    buttonText: "Info"
                },
                ru: {
                    dateString: "26 мaрта",
                    place: "Сольный концерт",
                    location: "Московская филармония, \nкамерный зал",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-04-16",
                toTickets: "http://",
                en: {
                    place: "БЗК",
                    location: "Москва"
                },
                ru: {
                    place: "Junior Music Tour",
                    location: "Филармония, \nг. Тула"
                }
            },
            {
                date: "2020-04-21",
                toTickets: "",
                en: {
                    dateString: "21 april - 2 may",
                    place: "",
                    location: ""
                },
                ru: {
                    dateString: "21 апреля - 2 мая",
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Курск"
                }
            },
            {
                date: "2020-06-2",
                toTickets: "",
                en: {
                    place: "",
                    location: "Los Angeles, CA"
                },
                ru: {
                    place: "Junior Music Tour \nКонцерт с оркестром",
                    location: "БЗК, \nг. Москва"
                }
            },
            {
                date: "2020-07-12",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Академия Вебье",
                    location: "г. Вербье, \nШвейцария"
                }
            },
            {
                date: "2020-04-21",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Международная фортепианная \nакадемия",
                    location: "Комо, \nИталия "
                }
            },
            {
                date: "2020-08-16",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Концерт с оркестром",
                    location: "Академия им. Гнесиных, \nг. Москва"
                }
            },
            {
                date: "2020-09-30",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Московская филармония, \nкамерный зал"
                }
            },
            {
                date: "2020-11-8",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Вологда"
                }
            },
            {
                date: "2020-11-15",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Архангельск"
                }
            },
            {
                en: {
                    year: "2021",
                },
                ru: {
                    year: "2021",
                }
            },
            {
                date: "2021-03-7",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Волгоград"
                }
            },
            {
                date: "2020-04-10",
                toTickets: "",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Концерт с оркестром",
                    location: "Филармония, \nг. Рязань"
                }
            },
        ]
    },
    bio: {
        en: {
            quotes: [
                {
                    text: '"Seattle-based pop star makes her indie debut with a hauntingly beautiful album"',
                    author: "- John Tirckle , Music Today Post"
                },
                {
                    text: '"Emilia Cole is one of the scene\'s breakout stars"',
                    author: "- Linda Shine, Music of life magazin"
                },
            ],
            bioText: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. 
            <br/><br/>  This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.`
        },
        ru: {
            quotes: [
                {
                    text: '"Варвара Кутузова – абсолютно уникальный самородок, на мой взгляд!"',
                    author: "- Денис Мацуев"
                },
                {
                    text: '"Варвара Кутузова – замечательная молодая пианистка: живая и современная юная девушка в общении и совершенно другая на сцене - серьёзная, глубокая, вдумчивая, со своим почерком, драматизмом, тонкой лирикой, искренностью и куражом."',
                    author: "- Борис Березовский"
                },
                {
                    text: '"Многие играют на фортепиано, но заставляют себя слушать – единицы. Варя из их числа!"',
                    author: '"- Николай Луганский"'
                },
            ],
            bioText: `<b>Варвара Кутузова</b> – российская пианистка, лауреат всероссийских и международных музыкальных конкурсов. Родилась в 2003 году. Музыкой начала заниматься c 4 лет, первое выступление с оркестром состоялось в 6 лет, а первый сольный концерт - в 8 лет. С 2007 по 2019 год училась в Центральной музыкальной школе при Московской государственной консерватории имени П. И. Чайковского в классе М.А. Марченко, в настоящее время учится в «Московской средней специальной музыкальной школе (колледж) им. Гнесиных» в классе Заслуженного деятеля искусств РФ, заслуженного артиста РФ М.С. Хохлова.
            <br/><br/>Варвара Кутузова – стипендиат фондов Владимира Спивакова, «Новые имена» и «Фонда Валерия Золотухина». В качестве солистки выступает с ведущими оркестрами: Национальным филармоническим оркестром России, Государственным камерным оркестром “Виртуозы Москвы”, Большим симфоническим оркестром им. П. И. Чайковского, Государственным симфоническим оркестром «Новая Россия», Государственным академическим симфоническим оркестром им. Е. Ф. Светланова, Государственным симфоническим оркестром Республики Татарстан, Губернаторским симфоническим оркестром Иркутской филармонии, Симфоническим оркестром Государственной республики Казахстан, Губернаторским симфоническим оркестром Рязанской филармонии, Симфоническим оркестром Волгоградской филармонии, Симфоническим оркестром Ульяновской филармонии, Ростовским симфоническим оркестром, с симфоническим оркестром консерватории в Ницце, с Чикагским филармоническим оркестром и другими.`
        }
    }
};

export default Object.freeze(data);
