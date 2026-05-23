<?php
/*
 * Template Name: IT-поддержка
 * Template Post Type: page
 */

$fv_service = [
    'label'           => 'IT-поддержка',
    'headline'        => 'Ваш бизнес работает',
    'headline_accent' => 'без сбоев.',
    'subheadline'     => 'Профессиональная IT-поддержка для малого и среднего бизнеса. Настройка, обслуживание, экстренная помощь — приедем к вам.',
    'hero_img'        => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>', 'label' => 'Выезд в офис',       'sub' => 'На месте и удалённо' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', 'label' => 'Быстрый отклик', 'sub' => 'Экстренная помощь' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', 'label' => '8+ лет опыта', 'sub' => 'Бизнес-IT' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>', 'label' => 'Прозрачные цены', 'sub' => 'Фиксированная почасовка' ],
    ],
    'offer_title'  => 'Что мы поддерживаем',
    'offer_items'  => [
        [ 'label' => 'Рабочие станции',     'sub' => 'Windows, macOS',            'img' => 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Серверы',             'sub' => 'Физические и виртуальные',  'img' => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Облачные сервисы',    'sub' => 'Microsoft 365, Google',    'img' => 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Сетевое оборудование','sub' => 'Роутеры, коммутаторы',     'img' => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Принтеры и МФУ',     'sub' => 'Настройка и обслуживание',  'img' => 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Безопасность',        'sub' => 'Антивирус, VPN, бэкапы',   'img' => 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Проблемы, которые мы решаем',
    'problems'       => [
        'Медленные компьютеры в офисе',
        'Сбои программного обеспечения',
        'Проблемы с сетью и интернетом',
        'Настройка нового оборудования',
        'Вирусы и угрозы безопасности',
        'Резервное копирование данных',
        'Миграция на новые системы',
        'Техническая поддержка сотрудников',
    ],
    'problems_img'  => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title' => 'Как мы работаем',
    'process_steps' => [
        [ 'number' => '1', 'title' => 'Опишите проблему',     'description' => 'Позвоните или напишите — постараемся решить удалённо или приедем в офис.' ],
        [ 'number' => '2', 'title' => 'Диагностика',          'description' => 'Выявляем первопричину проблемы, а не просто симптомы.' ],
        [ 'number' => '3', 'title' => 'Решение и настройка',  'description' => 'Устраняем неполадку профессионально с минимальным простоем.' ],
        [ 'number' => '4', 'title' => 'Профилактика',         'description' => 'Рекомендуем меры, чтобы проблема не повторилась.' ],
    ],
    'pricing' => [
        [ 'title' => 'Удалённая помощь',  'from' => '€39',  'description' => 'В час — быстро и удобно',  'sameDay' => true ],
        [ 'title' => 'Выезд в офис',      'from' => '€69',  'description' => 'В час + бесплатный выезд', 'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Абонентское обсл.', 'from' => '€199', 'description' => 'В месяц — до 5 ПК',        'note' => 'Приоритетный отклик' ],
        [ 'title' => 'Настройка сервера', 'from' => '€299', 'description' => 'Разовая услуга' ],
        [ 'title' => 'Настройка рабочего места', 'from' => '€99', 'description' => 'ПК + ПО + почта' ],
    ],
    'form_title'    => 'Получить IT-поддержку',
    'form_headline' => 'Ваш бизнес не должен стоять.',
    'form_sub'      => 'Быстрая помощь удалённо или с выездом в офис.',
    'form_services' => [ 'Экстренная помощь', 'Плановое обслуживание', 'Настройка нового оборудования', 'Безопасность', 'Облачные сервисы', 'Абонентское обслуживание', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Быстрый отклик при авариях', 'Удалённо или с выездом', 'Прозрачная почасовая оплата', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'IT-поддержка для нашего офиса уже 2 года. Быстро реагируют, всегда решают проблему. Надёжные ребята.',
        'author'   => 'Mikael P.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Wi-Fi и сеть',           'href' => '/services/wifi-network' ],
        [ 'label' => 'Камеры видеонаблюдения', 'href' => '/services/security-cameras' ],
        [ 'label' => 'Диагностика',            'href' => '/services/diagnostics' ],
        [ 'label' => 'Умный дом',              'href' => '/services/smart-home' ],
    ],
];

get_template_part( 'template-parts/service-page' );
