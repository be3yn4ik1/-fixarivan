<?php
/*
 * Template Name: Ремонт устройств
 * Template Post Type: page
 */

$icon = fn($path) => "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>$path</svg>";

$fv_service = [
    'label'           => 'Ремонт устройств',
    'headline'        => 'Любое устройство снова',
    'headline_accent' => 'в рабочем состоянии.',
    'subheadline'     => 'Выездной ремонт телефонов, ноутбуков, планшетов, игровых консолей и смарт-ТВ. Профессиональный ремонт прямо у вас дома — без очередей и лишних поездок.',
    'hero_img'        => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon('<rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/>'), 'label' => 'Выезд на дом', 'sub' => 'Ремонт где удобно вам' ],
        [ 'icon' => $icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'), 'label' => 'Гарантия на работы', 'sub' => 'Запчасти и труд' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'), 'label' => 'Ремонт за 1–2 часа', 'sub' => 'Чаще в тот же день' ],
        [ 'icon' => $icon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'), 'label' => 'Прозрачные цены', 'sub' => 'Без скрытых доплат' ],
    ],
    'offer_title'  => 'Устройства, которые мы ремонтируем',
    'offer_items'  => [
        [ 'label' => 'Смартфоны', 'sub' => 'iPhone, Samsung, Xiaomi и др.', 'img' => 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Ноутбуки', 'sub' => 'MacBook, Dell, HP, Lenovo', 'img' => 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Планшеты', 'sub' => 'iPad, Samsung Tab, Huawei', 'img' => 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Игровые консоли', 'sub' => 'PS4/5, Xbox, Nintendo Switch', 'img' => 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Смарт-ТВ', 'sub' => 'Samsung, LG, Sony и др.', 'img' => 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Другие устройства', 'sub' => 'Умные колонки, умные часы и др.', 'img' => 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Распространённые проблемы',
    'problems'       => [
        'Разбитый или треснувший экран',
        'Быстро садится аккумулятор',
        'Водяное повреждение',
        'Не работает зарядный порт',
        'Устройство тормозит или зависает',
        'Не включается или постоянно перезагружается',
        'Сломанные кнопки или динамики',
        'Ошибки программного обеспечения и сбои',
    ],
    'problems_img'   => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title'  => 'Как это работает',
    'process_steps'  => [
        [ 'number' => '1', 'title' => 'Опишите проблему', 'description' => 'Расскажите, что не так с устройством — мы подберём нужные инструменты и запчасти.' ],
        [ 'number' => '2', 'title' => 'Мы приедем к вам', 'description' => 'Наша мобильная мастерская укомплектована для большинства ремонтов любых устройств.' ],
        [ 'number' => '3', 'title' => 'Диагностика и ремонт', 'description' => 'Определяем причину неисправности и устраняем её профессионально на месте.' ],
        [ 'number' => '4', 'title' => 'Проверено и готово', 'description' => 'Тестируем устройство перед отъездом и выдаём письменную гарантию.' ],
    ],
    'pricing' => [
        [ 'title' => 'Диагностика', 'from' => '€25', 'description' => 'Полная проверка любого устройства', 'sameDay' => true ],
        [ 'title' => 'Замена экрана', 'from' => '€69', 'description' => 'Телефоны, планшеты, ноутбуки', 'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Замена аккумулятора', 'from' => '€45', 'description' => 'Большинство моделей и марок', 'sameDay' => true ],
        [ 'title' => 'Водяное повреждение', 'from' => '€59', 'description' => 'Диагностика и восстановление', 'sameDay' => false ],
        [ 'title' => 'Общий ремонт', 'from' => '€65', 'description' => 'Порты, кнопки, динамики и др.', 'note' => 'Включая выезд' ],
    ],
    'form_title'    => 'Записаться на ремонт устройства',
    'form_headline' => 'Починим любое устройство у вас дома.',
    'form_sub'      => 'Профессиональный выездной ремонт с гарантией на все запчасти и работу.',
    'form_services' => [ 'Ремонт телефона', 'Ремонт ноутбука', 'Ремонт планшета', 'Ремонт игровой консоли', 'Ремонт смарт-ТВ', 'Замена экрана', 'Замена аккумулятора', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Нет ремонта — нет оплаты', 'Оригинальные или равноценные запчасти', 'Гарантия на все работы', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Отремонтировали экран на моём Samsung и заменили батарею на планшете за один визит. Всё быстро, аккуратно и по честной цене. Очень доволен!',
        'author'   => 'Petri V.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Ремонт ноутбуков и ПК', 'href' => '/services/laptop-repair' ],
        [ 'label' => 'Ремонт телефонов',       'href' => '/services/phone-repair' ],
        [ 'label' => 'Восстановление данных',  'href' => '/services/data-recovery' ],
        [ 'label' => 'Диагностика',            'href' => '/services/diagnostics' ],
    ],
];

get_template_part( 'template-parts/service-page' );
