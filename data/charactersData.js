export const charactersData = [
    {
        id: 'commando',
        name: 'Commando',
        description: 'Универсальный персонаж, способный наносить стабильный урон на средней дистанции.',
        icon: require('../assets/icons/commando_icon.png'),
        skills: [
            'Double Tap: Выстреливает два патрона.',
            'Tactical Slide: Скольжение, позволяющее быстро перемещаться.',
            'Frag Grenade: Бросает гранату, наносящую урон по области.',
            'Suppressive Fire: Быстрая очередь выстрелов, оглушающая врагов.',
        ],
        builds: ['commando1', 'commando2', 'commando3'], // Ссылки на ID сборок
    },
    {
        id: 'huntress',
        name: 'Huntress',
        description: 'Мобильный персонаж, наносящий урон издалека и способный быстро перемещаться по полю боя.',
        icon: require('../assets/icons/huntress_icon.png'),
        skills: [
            'Strafe: Автоматически наводится на ближайших врагов во время стрельбы.',
            'Laser Glaive: Бросает глефу, которая отскакивает между врагами.',
            'Blink: Телепортируется на короткое расстояние.',
            'Arrow Rain: Выпускает дождь стрел, наносящий урон по области.',
        ],
        builds: ['huntress1', 'huntress2', 'huntress3'], // Ссылки на ID сборок
    },
    {
        id: 'mercenary',
        name: 'Mercenary',
        description: 'Персонаж ближнего боя, способный наносить большой урон и быстро перемещаться.',
        icon: require('../assets/icons/mercenary_icon.png'),
        skills: [
            'Laser Sword: Серия ударов лазерным мечом.',
            'Eviscerate: Наносит серию быстрых ударов по врагу.',
            'Blinding Assault: Рывок вперед, оглушающий врагов.',
            'Rising Thunder: Подбрасывает врагов в воздух и наносит урон.',
        ],
        builds: ['mercenary1', 'mercenary2', 'mercenary3'], // Ссылки на ID сборок
    }
];
