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
                title: "Другое название",
                description: "Иногда приходится кланяться"
            },
            ru: {
                title: "Другое название",
                description: "Иногда приходится кланяться"
            }
        },
        {
            fileName: "3.png",
            en: {
                title: "Но нэйм",
                description: "А ещё я умею читать..."
            },
            ru: {
                title: "Но нэйм",
                description: "А ещё я умею читать..."
            },
        },
        {
            fileName: "4.jpg",
            en: {
                title: "Thirst image",
                description: "Some long text about this image and more details..."
            },
            ru: {
                title: "Erstes Bild",
                description: "Ein langer Text zu diesem Bild und weitere Details ..."
            }
        },
        {
            fileName: "5.png",
            en: {
                title: "Fourth image",
                description: "Some long text about this image and more details..."
            },
            ru: {
                title: "Erstes Bild",
                description: "Ein langer Text zu diesem Bild und weitere Details ..."
            }
        },
        {
            fileName: "1.jpg",
            en: {
                title: "First image",
                description: "Some long text about this image and more details..."
            },
            ru: {
                title: "Erstes Bild",
                description: "Ein langer Text zu diesem Bild und weitere Details ..."
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
                date: "2020-05-18",
                //toTickets: "https://",
                en: {
                    place: "Зарядье",
                    location: "Москва"
                },
                ru: {
                    place: "Сольный концерт",
                    location: 'Зал "Зарядье", Москва'
                }
            },
            {
                date: "2020-05-22",
                //toTickets: "http://",
                en: {
                    place: "БЗК",
                    location: "Москва"
                },
                ru: {
                    place: "Концерт с НФОР, \n дирижёр В.Спиваков",
                    location: "БЗК, Москва"
                }
            },
            {
                date: "2020-05-25",
                //toTickets: "http://",
                en: {
                    place: "Дом Музыки",
                    location: "Los Angeles, CA"
                },
                ru: {
                    place: "Концерт камерной музыки",
                    location: "Дом Музыки"
                }
            },
        ]
    }
};

export default Object.freeze(data);
