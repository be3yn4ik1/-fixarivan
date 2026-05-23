<?php
/*
 * Template Name: Умный дом
 * Template Post Type: page
 */

$icon = fn($path) => "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>$path</svg>";

$fv_service = [
    'label'           => 'Умный дом',
    'headline'        => 'Ваш дом становится',
    'headline_accent' => 'по-настоящему умным.',
    'subheadline'     => 'Установка и интеграция систем умного дома — освещение, термостаты, голосовые помощники, умные замки и многое другое. Всё работает вместе, без лишних хлопот.',
    'hero_img'        => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'), 'label' => 'Установка под ключ', 'sub' => 'Настраиваем всё за вас' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>'), 'label' => 'Мульти-бренд интеграция', 'sub' => 'Все платформы работают вместе' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'), 'label' => 'Быстрая установка', 'sub' => 'За один визит' ],
        [ 'icon' => $icon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'), 'label' => 'Прозрачные цены', 'sub' => 'Без скрытых доплат' ],
    ],
    'offer_title'  => 'Решения для умного дома',
    'offer_items'  => [
        [ 'label' => 'Умное освещение', 'sub' => 'Philips Hue, IKEA Tradfri и др.', 'img' => 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Умные термостаты', 'sub' => 'Nest, Tado, Honeywell и др.', 'img' => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Голосовые помощники', 'sub' => 'Amazon Alexa, Google Home', 'img' => 'https://images.pexels.com/photos/4790266/pexels-photo-4790266.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Умные замки', 'sub' => 'Yale, Nuki, August и другие', 'img' => 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Умная безопасность', 'sub' => 'Камеры, датчики, сигнализации', 'img' => 'https://images.pexels.com/photos/374103/pexels-photo-374103.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Интеграция платформ', 'sub' => 'Apple HomeKit, Google, Alexa', 'img' => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Узнаёте себя?',
    'problems'       => [
        'Устройства разных марок не работают вместе',
        'Сложная настройка — не знаете с чего начать',
        'Нет голосового управления освещением и климатом',
        'Нет автоматизации — всё нужно включать вручную',
        'Хотите управлять домом со смартфона',
        'Старые устройства не совместимы с умным домом',
        'Нестабильное подключение IoT-устройств',
        'Слишком много разных приложений для управления',
    ],
    'problems_img'   => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title'  => 'Как это работает',
    'process_steps'  => [
        [ 'number' => '1', 'title' => 'Консультация и планирование', 'description' => 'Обсуждаем ваши потребности и подбираем совместимые устройства под бюджет.' ],
        [ 'number' => '2', 'title' => 'Установка оборудования', 'description' => 'Устанавливаем умные устройства профессионально — без лишних проводов и хаоса.' ],
        [ 'number' => '3', 'title' => 'Настройка и интеграция', 'description' => 'Объединяем все устройства в единую систему с голосовым и мобильным управлением.' ],
        [ 'number' => '4', 'title' => 'Обучение и поддержка', 'description' => 'Показываем, как пользоваться системой, и остаёмся на связи при любых вопросах.' ],
    ],
    'pricing' => [
        [ 'title' => 'Консультация', 'from' => '€49', 'description' => 'Планирование и подбор устройств', 'sameDay' => true ],
        [ 'title' => 'Умное освещение', 'from' => '€99', 'description' => 'Установка и настройка в одной комнате', 'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Умный термостат', 'from' => '€79', 'description' => 'Установка и интеграция с системой', 'sameDay' => true ],
        [ 'title' => 'Умный дом под ключ', 'from' => '€299', 'description' => 'Комплексная установка всего дома', 'sameDay' => false ],
        [ 'title' => 'Интеграция платформ', 'from' => '€149', 'description' => 'Объединение имеющихся устройств', 'note' => 'Без замены оборудования' ],
    ],
    'form_title'    => 'Заказать умный дом',
    'form_headline' => 'Сделаем ваш дом умнее.',
    'form_sub'      => 'Профессиональная установка и настройка под ваши нужды.',
    'form_services' => [ 'Умное освещение', 'Умный термостат', 'Голосовой помощник', 'Умный замок', 'Система безопасности', 'Интеграция платформ', 'Консультация', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Совместимость со всеми платформами', 'Профессиональная установка', 'Обучение пользованию системой', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Настроили голосовое управление освещением и термостатом в три комнаты. Теперь всё работает через один смартфон. Очень профессионально и быстро!',
        'author'   => 'Antti R.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Wi-Fi и сетевые решения',   'href' => '/services/wifi-network' ],
        [ 'label' => 'Камеры видеонаблюдения',     'href' => '/services/security-cameras' ],
        [ 'label' => 'IT-поддержка',               'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
