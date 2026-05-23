<?php
/*
 * Template Name: Ремонт ноутбуков и ПК
 * Template Post Type: page
 */

$icon_truck   = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>';
$icon_shield  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
$icon_clock   = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
$icon_thumb   = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>';
$icon_msg     = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
$icon_check   = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

$fv_service = [
    'label'           => 'Ремонт ноутбуков и ПК',
    'headline'        => 'Ваш компьютер работает',
    'headline_accent' => 'на полной скорости.',
    'subheadline'     => 'Выездной ремонт ноутбуков и настольных ПК любых марок. Замена компонентов, исправление ПО, апгрейд — у вас дома без простоев.',
    'hero_img'        => 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon_truck,  'label' => 'Не нужно никуда везти', 'sub' => 'Приедем к вам' ],
        [ 'icon' => $icon_shield, 'label' => 'Гарантия в комплекте',  'sub' => 'Запчасти и работа' ],
        [ 'icon' => $icon_clock,  'label' => 'Чаще всего — в тот же день', 'sub' => 'Быстрый оборот' ],
        [ 'icon' => $icon_thumb,  'label' => 'Цена до начала работ',  'sub' => 'Честные цены' ],
    ],
    'offer_title'  => 'Марки, которые мы обслуживаем',
    'offer_items'  => [
        [ 'label' => 'Apple MacBook', 'sub' => 'Air, Pro, все модели', 'img' => 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Dell',         'sub' => 'XPS, Inspiron, Vostro', 'img' => 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Lenovo',       'sub' => 'ThinkPad, IdeaPad',     'img' => 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'HP',           'sub' => 'EliteBook, Pavilion',   'img' => 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'ASUS',         'sub' => 'ZenBook, ROG',          'img' => 'https://images.pexels.com/photos/3766201/pexels-photo-3766201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Другие марки', 'sub' => 'Acer, MSI и прочие',   'img' => 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Распространённые проблемы',
    'problems'       => [
        'Медленная загрузка и низкая производительность',
        'Перегрев и проблемы с вентилятором',
        'Замена разбитого экрана',
        'Проблемы с клавиатурой и тачпадом',
        'Замена аккумулятора',
        'Замена SSD / HDD',
        'Переустановка Windows / macOS',
        'Удаление вирусов и вредоносного ПО',
    ],
    'problems_img'   => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title'  => 'Как это работает',
    'process_steps'  => [
        [ 'number' => '1', 'title' => 'Опишите проблему',    'description' => 'Расскажите, что происходит — мы подготовим нужные инструменты и запчасти.' ],
        [ 'number' => '2', 'title' => 'Мы приедем оснащёнными', 'description' => 'Наша мобильная мастерская укомплектована для большинства ремонтов.' ],
        [ 'number' => '3', 'title' => 'Диагностика и ремонт', 'description' => 'Находим причину и устраняем её на месте профессионально.' ],
        [ 'number' => '4', 'title' => 'Проверено и работает', 'description' => 'Тестируем всё до отъезда. Выдаём письменную гарантию.' ],
    ],
    'pricing' => [
        [ 'title' => 'Диагностика',   'from' => '€25', 'description' => 'Полная проверка железа и ПО',    'sameDay' => true ],
        [ 'title' => 'Апгрейд SSD',   'from' => '€75', 'description' => 'Установка + миграция ОС',         'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Замена экрана', 'from' => '€90', 'description' => 'Все марки ноутбуков',             'sameDay' => true ],
        [ 'title' => 'Переустановка ОС', 'from' => '€50', 'description' => 'Настройка Windows или macOS' ],
        [ 'title' => 'Чистка системы', 'from' => '€60', 'description' => 'Глубокая чистка + термопаста',  'note' => 'Включая выезд' ],
    ],
    'form_title'     => 'Записаться на ремонт ноутбука',
    'form_headline'  => 'Мы починим. Ваши данные в сохранности.',
    'form_sub'       => 'Выездной ремонт с гарантией на все запчасти и работу.',
    'form_services'  => [ 'Ремонт ноутбука', 'Ремонт настольного ПК', 'Ремонт MacBook', 'Апгрейд SSD / RAM', 'Замена экрана', 'Удаление вирусов', 'Другое' ],
    'sidebar_img'    => 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'   => [ 'Нет ремонта — нет оплаты', 'Оригинальные или равноценные запчасти', 'Гарантия на все работы', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Заменили SSD в моём MacBook Pro. Быстро, аккуратно и вдвое дешевле, чем в Apple Store. Очень рекомендую.',
        'author'   => 'Jukka H.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Ремонт устройств',      'href' => '/services/device-repair' ],
        [ 'label' => 'Восстановление данных', 'href' => '/services/data-recovery' ],
        [ 'label' => 'Диагностика',           'href' => '/services/diagnostics' ],
        [ 'label' => 'IT-поддержка',          'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
