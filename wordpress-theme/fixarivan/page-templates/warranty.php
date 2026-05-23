<?php
/*
 * Template Name: Гарантийная поддержка
 * Template Post Type: page
 */

$fv_service = [
    'label'           => 'Гарантийная поддержка',
    'headline'        => 'Разберёмся с гарантией',
    'headline_accent' => 'вместо вас.',
    'subheadline'     => 'Помогаем с гарантийными случаями — общаемся с сервисными центрами, оформляем документы и защищаем ваши права.',
    'hero_img'        => 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', 'label' => 'Защита ваших прав', 'sub' => 'Знаем законодательство' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', 'label' => 'Общаемся за вас', 'sub' => 'С сервисными центрами' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', 'label' => 'Документы готовим мы', 'sub' => 'Отчёты и заявления' ],
        [ 'icon' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>', 'label' => 'Держим в курсе', 'sub' => 'Обновления по статусу' ],
    ],
    'offer_title'  => null,
    'offer_items'  => [],
    'problems_title' => 'Когда мы помогаем',
    'problems'       => [
        'Устройство сломалось в гарантийный период',
        'Магазин отказывает в гарантийном ремонте',
        'Непонятно, является ли случай гарантийным',
        'Нужна документация для сервисного центра',
        'Спор с производителем',
        'Долгий ремонт по гарантии',
        'Нужна независимая оценка',
        'Возврат и замена товара',
    ],
    'problems_img'  => 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title' => 'Как мы работаем',
    'process_steps' => [
        [ 'number' => '1', 'title' => 'Анализ ситуации',       'description' => 'Изучаем вашу проблему и проверяем условия гарантии.' ],
        [ 'number' => '2', 'title' => 'Оценка прав',           'description' => 'Определяем, является ли случай гарантийным, и какой путь решения.' ],
        [ 'number' => '3', 'title' => 'Берём дело на себя',    'description' => 'Общаемся с сервисным центром, готовим документы, отслеживаем статус.' ],
        [ 'number' => '4', 'title' => 'Решение вопроса',       'description' => 'Добиваемся ремонта, замены или возврата средств.' ],
    ],
    'pricing' => [
        [ 'title' => 'Первичная консультация', 'from' => '€0',  'description' => 'Бесплатно — оцениваем ситуацию', 'sameDay' => true ],
        [ 'title' => 'Оценка гарантийного случая', 'from' => '€29', 'description' => 'Письменное заключение', 'popular' => true ],
        [ 'title' => 'Помощь с документами',   'from' => '€39', 'description' => 'Подготовка заявлений' ],
        [ 'title' => 'Полное сопровождение',   'from' => '€89', 'description' => 'От начала до результата', 'note' => 'Переговоры с сервисом' ],
    ],
    'form_title'    => 'Получить гарантийную помощь',
    'form_headline' => 'Ваши права под защитой.',
    'form_sub'      => 'Бесплатная первичная консультация. Расскажите о вашей ситуации.',
    'form_services' => [ 'Гарантийный ремонт отклонён', 'Непонятен гарантийный случай', 'Нужна документация', 'Долгий ремонт', 'Возврат / замена', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Бесплатная консультация', 'Знаем законы о защите прав потребителей', 'Общаемся с сервисом за вас', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Мне отказали в гарантийном ремонте телефона. FixariVan взяли ситуацию в свои руки и добились ремонта. Спасибо!',
        'author'   => 'Anna L.',
        'location' => 'Кааринa',
    ],
    'related' => [
        [ 'label' => 'Диагностика',           'href' => '/services/diagnostics' ],
        [ 'label' => 'Ремонт устройств',      'href' => '/services/device-repair' ],
        [ 'label' => 'Восстановление данных', 'href' => '/services/data-recovery' ],
    ],
];

get_template_part( 'template-parts/service-page' );
