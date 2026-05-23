<?php
/*
 * Template Name: Утилизация электроники
 * Template Post Type: page
 */

$fv_service = [
    'label'           => 'Утилизация электроники',
    'headline'        => 'Избавьтесь от старых устройств',
    'headline_accent' => 'ответственно.',
    'subheadline'     => 'Принимаем старую технику и утилизируем её экологично. Приедем, заберём, уничтожим данные — всё по-честному.',
    'hero_img'        => 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>', 'label' => 'Экологичная утилизация', 'sub' => 'Ответственный подход' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>', 'label' => 'Забираем сами', 'sub' => 'Выезд к вам' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', 'label' => 'Уничтожение данных', 'sub' => 'Безопасно и надёжно' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>', 'label' => 'Рабочие устройства — бесплатно', 'sub' => 'Забираем без оплаты' ],
    ],
    'offer_title'  => null,
    'offer_items'  => [],
    'problems_title' => 'Что мы принимаем',
    'problems'       => [
        'Старые ноутбуки и ПК',
        'Смартфоны и планшеты',
        'Принтеры и МФУ',
        'Телевизоры и мониторы',
        'Кабели и зарядные устройства',
        'Игровые консоли',
        'Сетевое оборудование',
        'Офисная техника (для бизнеса)',
    ],
    'problems_img'  => 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title' => 'Как это работает',
    'process_steps' => [
        [ 'number' => '1', 'title' => 'Перечислите устройства',  'description' => 'Расскажите, что хотите утилизировать — рабочие, нерабочие, количество.' ],
        [ 'number' => '2', 'title' => 'Мы приезжаем',           'description' => 'Забираем технику у вас — не нужно никуда везти.' ],
        [ 'number' => '3', 'title' => 'Уничтожение данных',     'description' => 'При необходимости — безопасное стирание данных с сертификатом.' ],
        [ 'number' => '4', 'title' => 'Ответственная утилизация', 'description' => 'Устройства передаются в сертифицированный пункт переработки.' ],
    ],
    'pricing' => [
        [ 'title' => 'Рабочие устройства',   'from' => '€0',  'description' => 'Забираем бесплатно',          'popular' => true, 'sameDay' => true ],
        [ 'title' => 'Уничтожение данных',   'from' => '€29', 'description' => 'На устройство + сертификат',  'sameDay' => true ],
        [ 'title' => 'Сбор для бизнеса',     'from' => '€99', 'description' => 'Несколько устройств / офис' ],
        [ 'title' => 'Акт об уничтожении',   'from' => '€49', 'description' => 'Официальный документ для бизнеса', 'note' => 'Юридически значимый' ],
    ],
    'form_title'    => 'Сдать электронику на утилизацию',
    'form_headline' => 'Помогите планете — избавьтесь от хлама.',
    'form_sub'      => 'Рабочие устройства забираем бесплатно. Приедем в удобное время.',
    'form_services' => [ 'Ноутбук / ПК', 'Смартфон / планшет', 'Принтер / МФУ', 'Телевизор / монитор', 'Мелкая электроника', 'Офисная техника (бизнес)', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Рабочие устройства — бесплатно', 'Сертифицированная утилизация', 'Безопасное удаление данных', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Наконец-то разобрался со старой техникой в офисе. Приехали, забрали всё, данные удалили и дали документ. Профессионально и экологично.',
        'author'   => 'Mikael P.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Ремонт устройств',  'href' => '/services/device-repair' ],
        [ 'label' => 'Диагностика',       'href' => '/services/diagnostics' ],
        [ 'label' => 'IT-поддержка',      'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
