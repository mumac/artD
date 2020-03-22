const data = {
    social: {
        links: {
            facebook: "https://www.facebook.com/varvarakutuzova",
            //twitter: "https://twitter.com/",
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
                date: "03-26",
                //toTickets: "https://",
                en: {
                    place: "Зарядье",
                    location: "Москва"
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Московская филармония, \nкамерный зал"
                }
            },
            {
                date: "2020-04-16",
                //toTickets: "http://",
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
                //toTickets: "http://",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Курск"
                }
            },
            {
                date: "2020-06-2",
                //toTickets: "http://",
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
                //toTickets: "http://",
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
                //toTickets: "http://",
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
                //toTickets: "http://",
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
                //toTickets: "http://",
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
                //toTickets: "http://",
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
                //toTickets: "http://",
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
                date: "2021-03-7",
                //toTickets: "http://",
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
                //toTickets: "http://",
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
    }
};

export default Object.freeze(data);
