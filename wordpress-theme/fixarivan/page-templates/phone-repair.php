<?php
/*
 * Template Name: Ремонт телефонов
 * Template Post Type: page
 */

$icon = fn($path) => "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>$path</svg>";

$fv_service = [
    'label'           => 'Ремонт телефонов',
    'headline'        => 'Ваш телефон снова',
    'headline_accent' => 'как новый.',
    'subheadline'     => 'Выездной ремонт смартфонов. Разбитый экран, батарея, камера — починим у вас за один визит.',
    'hero_img'        => 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon('<rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/>'), 'label' => 'Не нужно никуда везти', 'sub' => 'Приедем к вам' ],
        [ 'icon' => $icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),                                       'label' => 'Гарантия 3 месяца',     'sub' => 'Все запчасти и работа' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),                          'label' => 'Чаще всего 1–2 часа',   'sub' => 'Быстрый ремонт' ],
        [ 'icon' => $icon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'), 'label' => 'Цена до начала', 'sub' => 'Без скрытых доплат' ],
    ],
    'offer_title'  => 'Марки, которые мы ремонтируем',
    'offer_items'  => [
        [ 'label' => 'Apple iPhone', 'sub' => 'Все модели',         'img' => 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Samsung',      'sub' => 'Galaxy S, A, Note',  'img' => 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Huawei',       'sub' => 'P, Mate, Nova',      'img' => 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Xiaomi',       'sub' => 'Mi, Redmi, POCO',    'img' => 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Google Pixel', 'sub' => 'Все поколения',      'img' => 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Другие марки', 'sub' => 'OnePlus, Sony и др.','img' => 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Что мы чиним',
    'problems'       => [
        'Разбитый / треснутый экран',
        'Замена аккумулятора',
        'Ремонт камеры',
        'Зарядный порт не работает',
        'Кнопки не реагируют',
        'Не включается / завис',
        'Водяное повреждение',
        'Проблемы с динамиком / микрофоном',
    ],
    'problems_img'  => 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title' => 'Как это работает',
    'process_steps' => [
        [ 'number' => '1', 'title' => 'Опишите проблему',       'description' => 'Скажите, что случилось с телефоном. Подберём нужные запчасти.' ],
        [ 'number' => '2', 'title' => 'Мы приедем к вам',       'description' => 'Мобильная мастерская — запчасти для самых популярных ремонтов.' ],
        [ 'number' => '3', 'title' => 'Быстрый профремонт',     'description' => 'Большинство ремонтов телефонов — за 1–2 часа.' ],
        [ 'number' => '4', 'title' => 'Гарантия и готово',      'description' => 'Тестируем телефон и выдаём письменную гарантию.' ],
    ],
    'pricing' => [
        [ 'title' => 'Замена экрана iPhone',  'from' => '€79',  'description' => 'Все модели',              'sameDay' => true ],
        [ 'title' => 'Замена экрана Samsung', 'from' => '€69',  'description' => 'Galaxy S, A, Note',       'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Замена аккумулятора',   'from' => '€49',  'description' => 'Для большинства марок',   'sameDay' => true ],
        [ 'title' => 'Зарядный порт',         'from' => '€55',  'description' => 'USB-C, Lightning',        'sameDay' => true ],
        [ 'title' => 'Водяное повреждение',   'from' => '€59',  'description' => 'Диагностика + чистка',    'note' => 'Включая выезд' ],
    ],
    'form_title'    => 'Записаться на ремонт телефона',
    'form_headline' => 'Починим телефон у вас дома.',
    'form_sub'      => 'Большинство ремонтов — за один визит.',
    'form_services' => [ 'Замена экрана', 'Замена аккумулятора', 'Ремонт камеры', 'Зарядный порт', 'Не включается', 'Водяное повреждение', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Нет ремонта — нет оплаты', 'Гарантия 3 месяца', 'Оригинальные или равноценные запчасти', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Заменили экран на iPhone 14 у меня дома за час. Чистая работа, честная цена. Не нужно было никуда ехать!',
        'author'   => 'Maria K.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Ремонт устройств',      'href' => '/services/device-repair' ],
        [ 'label' => 'Диагностика',           'href' => '/services/diagnostics' ],
        [ 'label' => 'Гарантийная поддержка', 'href' => '/services/warranty' ],
    ],
];

get_template_part( 'template-parts/service-page' );
