<?php
/*
 * Template Name: Диагностика устройств
 * Template Post Type: page
 */

$icon = fn($path) => "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>$path</svg>";

$fv_service = [
    'label'           => 'Диагностика устройств',
    'headline'        => 'Узнайте точно,',
    'headline_accent' => 'что не так с устройством.',
    'subheadline'     => 'Профессиональная диагностика ноутбуков, телефонов, ПК, консолей и сетевого оборудования. Точный диагноз — правильное лечение без лишних трат.',
    'hero_img'        => 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'), 'label' => 'Точная диагностика', 'sub' => 'Выясняем настоящую причину' ],
        [ 'icon' => $icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'), 'label' => 'Бесплатно при ремонте', 'sub' => 'Диагностика входит в стоимость' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'), 'label' => 'Результат в тот же день', 'sub' => 'Полный отчёт о состоянии' ],
        [ 'icon' => $icon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'), 'label' => 'Фиксированная цена', 'sub' => 'Без скрытых доплат' ],
    ],
    'offer_title'  => 'Что мы диагностируем',
    'offer_items'  => [
        [ 'label' => 'Ноутбуки', 'sub' => 'Железо, ПО, тепловой режим, батарея, диск', 'img' => 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Смартфоны', 'sub' => 'Экран, батарея, камера, датчики, ПО', 'img' => 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Настольные ПК', 'sub' => 'Железо, питание, температура, производительность', 'img' => 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Игровые консоли', 'sub' => 'PS4/5, Xbox, Nintendo — лазер, диски, контроллер', 'img' => 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Устройства умного дома', 'sub' => 'Роутеры, хабы, датчики, колонки', 'img' => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Аудит сети', 'sub' => 'Скорость, покрытие, безопасность, конфигурация', 'img' => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Симптомы, с которыми обращаются',
    'problems'       => [
        'Устройство стало работать медленно',
        'Случайные выключения или перезагрузки',
        'Сильно греется при работе',
        'Странные звуки из корпуса или диска',
        'Не включается или не загружается',
        'Неизвестные ошибки и синие экраны',
        'Хочу купить б/у устройство — нужна проверка',
        'Только что отремонтировали — хочу убедиться',
    ],
    'problems_img'   => 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title'  => 'Как это работает',
    'process_steps'  => [
        [ 'number' => '1', 'title' => 'Приём устройства', 'description' => 'Приедем к вам или примем устройство — опишите симптомы и когда они появились.' ],
        [ 'number' => '2', 'title' => 'Комплексная проверка', 'description' => 'Тестируем все компоненты: железо, программное обеспечение, тепловой режим и электрику.' ],
        [ 'number' => '3', 'title' => 'Отчёт о состоянии', 'description' => 'Получаете понятный отчёт с выявленными проблемами и рекомендациями по ремонту.' ],
        [ 'number' => '4', 'title' => 'Ремонт или рекомендация', 'description' => 'Устраняем неполадку сразу (стоимость диагностики входит) или даём подробную консультацию.' ],
    ],
    'pricing' => [
        [ 'title' => 'Полная диагностика', 'from' => '€25', 'description' => 'Комплексная проверка любого устройства', 'sameDay' => true ],
        [ 'title' => 'Аудит сети', 'from' => '€49', 'description' => 'Анализ Wi-Fi, скорости и безопасности сети', 'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Проверка после ремонта', 'from' => '€19', 'description' => 'Убеждаемся, что ремонт выполнен качественно', 'sameDay' => true ],
        [ 'title' => 'Проверка перед покупкой', 'from' => '€35', 'description' => 'Проверьте б/у устройство до оплаты', 'sameDay' => true ],
        [ 'title' => 'Диагностика телефона', 'from' => '€25', 'description' => 'Полная проверка смартфона', 'note' => 'Включая выезд' ],
    ],
    'form_title'    => 'Заказать диагностику',
    'form_headline' => 'Поставим точный диагноз вашему устройству.',
    'form_sub'      => 'Диагностика бесплатна, если вы делаете ремонт у нас.',
    'form_services' => [ 'Ноутбук', 'Смартфон', 'Настольный ПК', 'Игровая консоль', 'Устройство умного дома', 'Аудит сети', 'Проверка перед покупкой', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Диагностика входит в стоимость ремонта', 'Полный письменный отчёт', 'Без ремонта — без оплаты', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Ноутбук зависал, не понимал почему. Сделали диагностику — оказалось, засорена система охлаждения. После чистки работает как новый. Очень рад, что не купил новый!',
        'author'   => 'Aleksi T.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Ремонт ноутбуков',     'href' => '/services/laptop-repair' ],
        [ 'label' => 'Ремонт устройств',     'href' => '/services/device-repair' ],
        [ 'label' => 'Восстановление данных', 'href' => '/services/data-recovery' ],
        [ 'label' => 'IT-поддержка',         'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
