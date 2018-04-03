const database = require('../database');

const Event = database.sequelize.define('event',{
    id:{
        type: database.Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type: database.Sequelize.DataTypes.STRING
    },
    startDate:{
        type: database.Sequelize.DataTypes.DATE
    },
    place:{
        type: database.Sequelize.DataTypes.STRING
    },
    description:{
        type: database.Sequelize.DataTypes.TEXT
    },
    picture:{
        type: database.Sequelize.DataTypes.STRING
    }
});

/*Event.sync({force: true}).then(() => {
    Event.create({
        name: 'Хлеб',
        startDate: '2016-08-09 04:05:02',
        place: 'Re:public, г. Минск',
        description: '<p>\n' +
        '        ХЛЕБ возвращаются в Минск с самым сочным шоу, НОВЫМ АЛЬБОМОМ, и лучшими хитами!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Яркая тусовка, брызги пепси, конфетти и стразы для самых модных парней и дам с района от ХЛЕБ - 21го апреля!!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Если ты хочешь сменить серые будни на нечто крутое, то тебе ни в коем случае не стоит пропускать концерт группы «Хлеб» 21 апреля в клубе «Re:Public»! Эти ребята точно знают как заставить всех отрываться так, словно в последний день жизни!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Наверное, не стоит говорить о том, с чего ребята начинали. Многие знают их шоу на You-Tube, которое, между прочим, актуально даже сегодня. Мало кто может похвастаться такими площадками как YotaSpace (Москва) и A2 (СПб), но группа уверенно и мощно провела свои концерты. Сотрудничество с известными брендами показывает то, насколько «Хлеб» актуален среди молодёжи. Ведь сколько молодых ребят хотят быть похожими на них.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Группа «Хлеб» — это отражение того, что сейчас модно. Сегодняшний звук, внешний вид, поведение, всё это и есть «Хлеб». На YouTube их клипы набирают миллионы просмотров, концерты посещают тысячи человек, а текста песен расходятся на цитаты.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Хочешь стать частью «хлебного» движения? Не забудь свои адидасы!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Фирменные билеты организатора Cube-A Sound в продаже по тел. +375 25 694 22 28:\n' +
        '        </p>\n' +
        '        ► 35,00р - танцпол;\n' +
        '        <br/>\n' +
        '        ► 50,00р - VIP (место за столиком).',
        picture: 'hleb.jpg'
    });
    Event.create({
        name: 'Хлеб',
        startDate: '2016-08-09 04:05:02',
        place: 'Re:public, г. Минск',
        description: '<p>\n' +
        '        ХЛЕБ возвращаются в Минск с самым сочным шоу, НОВЫМ АЛЬБОМОМ, и лучшими хитами!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Яркая тусовка, брызги пепси, конфетти и стразы для самых модных парней и дам с района от ХЛЕБ - 21го апреля!!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Если ты хочешь сменить серые будни на нечто крутое, то тебе ни в коем случае не стоит пропускать концерт группы «Хлеб» 21 апреля в клубе «Re:Public»! Эти ребята точно знают как заставить всех отрываться так, словно в последний день жизни!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Наверное, не стоит говорить о том, с чего ребята начинали. Многие знают их шоу на You-Tube, которое, между прочим, актуально даже сегодня. Мало кто может похвастаться такими площадками как YotaSpace (Москва) и A2 (СПб), но группа уверенно и мощно провела свои концерты. Сотрудничество с известными брендами показывает то, насколько «Хлеб» актуален среди молодёжи. Ведь сколько молодых ребят хотят быть похожими на них.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Группа «Хлеб» — это отражение того, что сейчас модно. Сегодняшний звук, внешний вид, поведение, всё это и есть «Хлеб». На YouTube их клипы набирают миллионы просмотров, концерты посещают тысячи человек, а текста песен расходятся на цитаты.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Хочешь стать частью «хлебного» движения? Не забудь свои адидасы!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Фирменные билеты организатора Cube-A Sound в продаже по тел. +375 25 694 22 28:\n' +
        '        </p>\n' +
        '        ► 35,00р - танцпол;\n' +
        '        <br/>\n' +
        '        ► 50,00р - VIP (место за столиком).',
        picture: 'hleb.jpg'
    });
    Event.create({
        name: 'Хлеб',
        startDate: '2016-08-09 04:05:02',
        place: 'Re:public, г. Минск',
        description: '<p>\n' +
        '        ХЛЕБ возвращаются в Минск с самым сочным шоу, НОВЫМ АЛЬБОМОМ, и лучшими хитами!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Яркая тусовка, брызги пепси, конфетти и стразы для самых модных парней и дам с района от ХЛЕБ - 21го апреля!!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Если ты хочешь сменить серые будни на нечто крутое, то тебе ни в коем случае не стоит пропускать концерт группы «Хлеб» 21 апреля в клубе «Re:Public»! Эти ребята точно знают как заставить всех отрываться так, словно в последний день жизни!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Наверное, не стоит говорить о том, с чего ребята начинали. Многие знают их шоу на You-Tube, которое, между прочим, актуально даже сегодня. Мало кто может похвастаться такими площадками как YotaSpace (Москва) и A2 (СПб), но группа уверенно и мощно провела свои концерты. Сотрудничество с известными брендами показывает то, насколько «Хлеб» актуален среди молодёжи. Ведь сколько молодых ребят хотят быть похожими на них.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Группа «Хлеб» — это отражение того, что сейчас модно. Сегодняшний звук, внешний вид, поведение, всё это и есть «Хлеб». На YouTube их клипы набирают миллионы просмотров, концерты посещают тысячи человек, а текста песен расходятся на цитаты.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Хочешь стать частью «хлебного» движения? Не забудь свои адидасы!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Фирменные билеты организатора Cube-A Sound в продаже по тел. +375 25 694 22 28:\n' +
        '        </p>\n' +
        '        ► 35,00р - танцпол;\n' +
        '        <br/>\n' +
        '        ► 50,00р - VIP (место за столиком).',
        picture: 'hleb.jpg'
    });
    Event.create({
        name: 'Хлеб',
        startDate: '2016-08-09 04:05:02',
        place: 'Re:public, г. Минск',
        description: '<p>\n' +
        '        ХЛЕБ возвращаются в Минск с самым сочным шоу, НОВЫМ АЛЬБОМОМ, и лучшими хитами!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Яркая тусовка, брызги пепси, конфетти и стразы для самых модных парней и дам с района от ХЛЕБ - 21го апреля!!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Если ты хочешь сменить серые будни на нечто крутое, то тебе ни в коем случае не стоит пропускать концерт группы «Хлеб» 21 апреля в клубе «Re:Public»! Эти ребята точно знают как заставить всех отрываться так, словно в последний день жизни!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Наверное, не стоит говорить о том, с чего ребята начинали. Многие знают их шоу на You-Tube, которое, между прочим, актуально даже сегодня. Мало кто может похвастаться такими площадками как YotaSpace (Москва) и A2 (СПб), но группа уверенно и мощно провела свои концерты. Сотрудничество с известными брендами показывает то, насколько «Хлеб» актуален среди молодёжи. Ведь сколько молодых ребят хотят быть похожими на них.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Группа «Хлеб» — это отражение того, что сейчас модно. Сегодняшний звук, внешний вид, поведение, всё это и есть «Хлеб». На YouTube их клипы набирают миллионы просмотров, концерты посещают тысячи человек, а текста песен расходятся на цитаты.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Хочешь стать частью «хлебного» движения? Не забудь свои адидасы!\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Фирменные билеты организатора Cube-A Sound в продаже по тел. +375 25 694 22 28:\n' +
        '        </p>\n' +
        '        ► 35,00р - танцпол;\n' +
        '        <br/>\n' +
        '        ► 50,00р - VIP (место за столиком).',
        picture: 'hleb.jpg'
    });
});*/

module.exports = Event;