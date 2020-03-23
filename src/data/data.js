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
                toTickets: "https://meloman.ru/hall/kamernyj-zal-filarmonii/",
                en: {
                    dateString: "",
                    place: "Зарядье",
                    location: "Москва",
                    buttonText: "Info"
                },
                ru: {
                    date: "",
                    place: "Сольный концерт",
                    location: "Московская филармония, \nкамерный зал",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-04-16",
                toTickets: "https://juniormusictour.ru/#grafik",
                en: {
                    place: "БЗК",
                    location: "Москва"
                },
                ru: {
                    place: "Junior Music Tour",
                    location: "Филармония, \nг. Тула",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-04-21",
                toTickets: "https://kogf.ru/?page_id=1370&event_id1=7793",
                en: {
                    dateString: "",
                    place: "",
                    location: "",
                    buttonText: "Tickets"
                },
                ru: {
                    dateString: "",
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Курск",
                    buttonText: "Купить билет"
                }
            },
            {
                date: "2020-06-2",
                toTickets: "juniormusictour.ru/#grafik",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Junior Music Tour \nКонцерт с оркестром",
                    location: "БЗК, \nг. Москва",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-07-12",
                toTickets: "https://www.verbierfestival.com/en/academy/",
                en: {
                    dateString: "",
                    place: "",
                    location: ""
                },
                ru: {
                    dateString: "12 июля\n - 3 авг.",
                    place: "Академия Вебье",
                    location: "г. Вербье, \nШвейцария",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-04-21",
                toTickets: "https://www.lakecomopianoacademy.com/students",
                en: {
                    dateString: "",
                    place: "",
                    location: ""
                },
                ru: {
                    dateString: "3 - 7 авг.",
                    place: "Международная фортепианная \nакадемия",
                    location: "Комо, \nИталия ",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-08-16",
                toTickets: "https://gnesinhall.ddns.net/%d0%b0%d1%84%d0%b8%d1%88%d0%b0",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Концерт с оркестром",
                    location: "Академия им. Гнесиных, \nг. Москва",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-09-30",
                toTickets: "https://meloman.ru/hall/kamernyj-zal-filarmonii/",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Московская филармония, \nкамерный зал",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-11-8",
                toTickets: "https://volfilarmonia.ru/meropriyatiya/varvara-kutuzova-(fortepiano,-moskva).html",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Вологда",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-11-15",
                toTickets: "http://www.pomorfil.ru/",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Архангельск",
                    buttonText: "Информация"
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
                toTickets: "https://volgogradfilarmonia.ru/afishi/concerts",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Сольный концерт",
                    location: "Филармония, \nг. Волгоград",
                    buttonText: "Информация"
                }
            },
            {
                date: "2020-04-10",
                toTickets: "http://rznfilarmonia.ru/afisha/",
                en: {
                    place: "",
                    location: ""
                },
                ru: {
                    place: "Концерт с оркестром",
                    location: "Филармония, \nг. Рязань",
                    buttonText: "Информация"
                }
            },
        ]
    }
};

export default Object.freeze(data);
