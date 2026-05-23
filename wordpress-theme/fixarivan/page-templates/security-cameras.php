<?php
/*
 * Template Name: Камеры видеонаблюдения
 * Template Post Type: page
 */

$fv_service = [
    'label'           => 'Камеры видеонаблюдения',
    'headline'        => 'Ваш дом и бизнес',
    'headline_accent' => 'под надёжной защитой.',
    'subheadline'     => 'Монтаж и настройка систем видеонаблюдения для дома и бизнеса. IP-камеры, CCTV, дверные звонки — установим и настроим удалённый просмотр.',
    'hero_img'        => 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>', 'label' => 'Монтаж под ключ', 'sub' => 'Приедем и установим' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', 'label' => 'Гарантия на работу', 'sub' => 'Оборудование и монтаж' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', 'label' => 'Установка в тот же день', 'sub' => 'Быстрый монтаж' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>', 'label' => 'Удалённый просмотр', 'sub' => 'Настроим смартфон' ],
    ],
    'offer_title'  => 'Типы систем',
    'offer_items'  => [
        [ 'label' => 'Внутренние камеры',   'sub' => 'Дом, офис, склад',         'img' => 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Уличные камеры',      'sub' => 'Вход, двор, периметр',     'img' => 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Дверной звонок',      'sub' => 'Video doorbell',            'img' => 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'IP-системы',          'sub' => 'Сетевые камеры PoE',       'img' => 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'NVR / DVR запись',    'sub' => 'Хранение видеоархива',     'img' => 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Бизнес CCTV',         'sub' => 'Магазины, офисы, склады',  'img' => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Задачи, которые мы решаем',
    'problems'       => [
        'Нет охвата у входа или во дворе',
        'Старая система не работает',
        'Нет удалённого просмотра',
        'Нужна ночная съёмка',
        'Уведомления о движении',
        'Хранение видеозаписей',
        'Установка бизнес-видеонаблюдения',
        'Модернизация аналоговой системы',
    ],
    'problems_img'  => 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title' => 'Как это работает',
    'process_steps' => [
        [ 'number' => '1', 'title' => 'Консультация и план',      'description' => 'Обсуждаем ваши потребности и подбираем оптимальные точки установки.' ],
        [ 'number' => '2', 'title' => 'Монтаж оборудования',      'description' => 'Устанавливаем камеры, прокладываем кабели или настраиваем беспроводную систему.' ],
        [ 'number' => '3', 'title' => 'Настройка и тест',         'description' => 'Настраиваем запись, удалённый доступ, уведомления о движении.' ],
        [ 'number' => '4', 'title' => 'Инструктаж и гарантия',    'description' => 'Показываем, как пользоваться системой. Выдаём письменную гарантию.' ],
    ],
    'pricing' => [
        [ 'title' => '1 камера под ключ',    'from' => '€79',  'description' => 'Монтаж + настройка',         'sameDay' => true ],
        [ 'title' => 'Система 2 камеры',     'from' => '€199', 'description' => 'NVR + просмотр со смартфона', 'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Система 4 камеры',     'from' => '€349', 'description' => 'Полный охват',                'sameDay' => true ],
        [ 'title' => 'Дверной видеозвонок',  'from' => '€149', 'description' => 'Монтаж + приложение' ],
        [ 'title' => 'Бизнес CCTV',          'from' => '€499', 'description' => 'От 6 камер + сервер записи',  'note' => 'Включая выезд' ],
    ],
    'form_title'    => 'Заказать установку камер',
    'form_headline' => 'Защитите своё имущество.',
    'form_sub'      => 'Монтаж камер видеонаблюдения с гарантией под ключ.',
    'form_services' => [ 'Внутренние камеры', 'Уличные камеры', 'Дверной видеозвонок', 'Бизнес CCTV', 'Замена старой системы', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Установка в тот же день', 'Гарантия на оборудование и монтаж', 'Удалённый просмотр со смартфона', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Установили 4 камеры снаружи дома. Всё аккуратно, удалённый доступ настроили быстро. Теперь слежу за домом из телефона!',
        'author'   => 'Jukka H.',
        'location' => 'Раисио',
    ],
    'related' => [
        [ 'label' => 'Умный дом',    'href' => '/services/smart-home' ],
        [ 'label' => 'Wi-Fi и сеть', 'href' => '/services/wifi-network' ],
        [ 'label' => 'IT-поддержка', 'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
