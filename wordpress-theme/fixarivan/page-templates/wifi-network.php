<?php
/*
 * Template Name: Wi-Fi и сетевые решения
 * Template Post Type: page
 */

$icon = fn($path) => "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>$path</svg>";

$fv_service = [
    'label'           => 'Wi-Fi и сетевые решения',
    'headline'        => 'Стабильный интернет',
    'headline_accent' => 'в каждом углу.',
    'subheadline'     => 'Настройка Wi-Fi, мэш-систем и офисных сетей. Устраняем мёртвые зоны, разрывы соединения и медленный интернет — у вас дома или в офисе.',
    'hero_img'        => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon('<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/>'), 'label' => 'Покрытие всего дома', 'sub' => 'Без мёртвых зон' ],
        [ 'icon' => $icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'), 'label' => 'Безопасная сеть', 'sub' => 'Профессиональная защита' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'), 'label' => 'Быстрая настройка', 'sub' => 'За один визит' ],
        [ 'icon' => $icon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'), 'label' => 'Фиксированная цена', 'sub' => 'Без скрытых доплат' ],
    ],
    'offer_title'  => 'Наши сетевые услуги',
    'offer_items'  => [
        [ 'label' => 'Домашний Wi-Fi', 'sub' => 'Настройка и оптимизация роутера', 'img' => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Мэш-системы', 'sub' => 'Eero, Google Nest, TP-Link Deco', 'img' => 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Офисные сети', 'sub' => 'Надёжные бизнес-решения', 'img' => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Сетевые принтеры', 'sub' => 'Подключение для всей сети', 'img' => 'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Умный дом', 'sub' => 'Интеграция IoT и сетевых устройств', 'img' => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'VPN и безопасность', 'sub' => 'Защита домашней сети', 'img' => 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Знакомые проблемы?',
    'problems'       => [
        'Мёртвые зоны и слабый сигнал в части дома',
        'Медленный интернет несмотря на быстрый тариф',
        'Соединение постоянно обрывается',
        'Роутер часто зависает и требует перезагрузки',
        'Нужно подключить новое жильё или офис',
        'Беспокоит безопасность домашней сети',
        'Устройства умного дома не подключаются',
        'Принтер или NAS не виден в сети',
    ],
    'problems_img'   => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title'  => 'Как это работает',
    'process_steps'  => [
        [ 'number' => '1', 'title' => 'Аудит сети', 'description' => 'Анализируем текущую сеть и выявляем проблемные зоны — нет покрытия, помехи, неправильные настройки.' ],
        [ 'number' => '2', 'title' => 'Предлагаем решение', 'description' => 'Подбираем оптимальный вариант: перенастройка роутера, мэш-система или укладка кабелей.' ],
        [ 'number' => '3', 'title' => 'Установка и настройка', 'description' => 'Устанавливаем и конфигурируем оборудование — для ваших устройств и потребностей.' ],
        [ 'number' => '4', 'title' => 'Тест и сдача', 'description' => 'Проверяем покрытие и скорость по всему помещению и убеждаемся, что всё работает отлично.' ],
    ],
    'pricing' => [
        [ 'title' => 'Аудит Wi-Fi', 'from' => '€49', 'description' => 'Полный анализ сети и рекомендации', 'sameDay' => true ],
        [ 'title' => 'Настройка роутера', 'from' => '€59', 'description' => 'Оптимальная конфигурация и защита', 'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Установка мэш-системы', 'from' => '€149', 'description' => 'Полное покрытие всего дома', 'sameDay' => true ],
        [ 'title' => 'Прокладка кабеля', 'from' => '€79', 'description' => 'Ethernet для надёжного соединения', 'sameDay' => false ],
        [ 'title' => 'Бизнес-сеть', 'from' => '€199', 'description' => 'Корпоративная Wi-Fi-инфраструктура', 'note' => 'Включая настройку' ],
    ],
    'form_title'    => 'Заказать настройку Wi-Fi',
    'form_headline' => 'Быстрый интернет везде, где нужно.',
    'form_sub'      => 'Профессиональная настройка сети с гарантией результата.',
    'form_services' => [ 'Домашний Wi-Fi', 'Мэш-система', 'Офисная сеть', 'Прокладка кабеля', 'Сетевой принтер', 'Настройка VPN', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Нет результата — нет оплаты', 'Настройка всех ваших устройств', 'Рекомендации по безопасности', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Наконец-то нормальный Wi-Fi на кухне и в спальне! Установили мэш-систему за пару часов — всё работает идеально. Профессиональный подход.',
        'author'   => 'Sari L.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Умный дом',             'href' => '/services/smart-home' ],
        [ 'label' => 'Камеры видеонаблюдения', 'href' => '/services/security-cameras' ],
        [ 'label' => 'IT-поддержка',           'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
