<?php
/*
 * Template Name: Восстановление данных
 * Template Post Type: page
 */

$icon = fn($path) => "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>$path</svg>";

$fv_service = [
    'label'           => 'Восстановление данных',
    'headline'        => 'Ваши данные можно',
    'headline_accent' => 'вернуть.',
    'subheadline'     => 'Восстанавливаем файлы с жёстких дисков, SSD, флешек, карт памяти и телефонов. Случайное удаление, форматирование, поломка — у нас высокий процент успеха.',
    'hero_img'        => 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=1',
    'trust_items'     => [
        [ 'icon' => $icon('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'), 'label' => 'Высокий процент успеха', 'sub' => 'Большинство случаев решаемо' ],
        [ 'icon' => $icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'), 'label' => 'Конфиденциальность', 'sub' => 'Ваши данные в безопасности' ],
        [ 'icon' => $icon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'), 'label' => 'Оценка бесплатно', 'sub' => 'Платите только за результат' ],
        [ 'icon' => $icon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'), 'label' => 'Честная цена', 'sub' => 'Без оплаты при неудаче' ],
    ],
    'offer_title'  => 'Типы носителей',
    'offer_items'  => [
        [ 'label' => 'SSD-накопители', 'sub' => 'Логическое и физическое восстановление с SSD', 'img' => 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Жёсткие диски (HDD)', 'sub' => 'Восстановление данных с механических HDD', 'img' => 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Флеш-накопители', 'sub' => 'Данные с USB-флешек и внешних накопителей', 'img' => 'https://images.pexels.com/photos/163125/board-electronics-computer-data-163125.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Память телефона', 'sub' => 'Фото, контакты, переписка с Android и iPhone', 'img' => 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Карты памяти', 'sub' => 'SD, microSD, CF — фото и видео с камер', 'img' => 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
        [ 'label' => 'Настройка резервного копирования', 'sub' => 'Защитите данные — облако, NAS, внешний диск', 'img' => 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1' ],
    ],
    'problems_title' => 'Знакомая ситуация?',
    'problems'       => [
        'Случайно удалили важные файлы',
        'Форматировали диск по ошибке',
        'Файлы повреждены или не открываются',
        'Устройство попало в воду',
        'Диск перестал определяться',
        'Вирус-вымогатель зашифровал данные',
        'Диск издаёт посторонние звуки',
        'Нужно достать данные со старого устройства',
    ],
    'problems_img'   => 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    'process_title'  => 'Как это работает',
    'process_steps'  => [
        [ 'number' => '1', 'title' => 'Бесплатная оценка', 'description' => 'Привезите или отправьте устройство — мы оценим ситуацию и сообщим, что можно восстановить.' ],
        [ 'number' => '2', 'title' => 'Диагностика носителя', 'description' => 'Тщательно проверяем устройство, определяем тип и степень повреждения данных.' ],
        [ 'number' => '3', 'title' => 'Процесс восстановления', 'description' => 'Применяем специализированные программы и методики для извлечения максимума данных.' ],
        [ 'number' => '4', 'title' => 'Передача данных', 'description' => 'Передаём восстановленные файлы на новый носитель и помогаем настроить резервное копирование.' ],
    ],
    'pricing' => [
        [ 'title' => 'Оценка', 'from' => '€49', 'description' => 'Диагностика носителя — часто бесплатно при восстановлении', 'sameDay' => true ],
        [ 'title' => 'Логическое восстановление', 'from' => '€99', 'description' => 'Удалённые файлы, форматирование, повреждения ФС', 'popular' => true, 'sameDay' => false ],
        [ 'title' => 'Физическое восстановление', 'from' => '€199', 'description' => 'Механические повреждения, сгоревший контроллер', 'sameDay' => false ],
        [ 'title' => 'Данные с телефона', 'from' => '€89', 'description' => 'Контакты, фото, переписка с Android и iOS', 'sameDay' => false ],
        [ 'title' => 'Настройка бэкапа', 'from' => '€79', 'description' => 'Облако или локальное решение — никогда не теряйте данные', 'note' => 'Разово' ],
    ],
    'form_title'    => 'Заказать восстановление данных',
    'form_headline' => 'Не удаляйте ничего — свяжитесь с нами сначала.',
    'form_sub'      => 'Бесплатная первичная оценка. Платите только за успешный результат.',
    'form_services' => [ 'SSD-накопитель', 'Жёсткий диск (HDD)', 'USB-флешка', 'Карта памяти', 'Память телефона', 'Настройка резервного копирования', 'Другое' ],
    'sidebar_img'   => 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    'trust_points'  => [ 'Не восстановили — не платите', 'Полная конфиденциальность данных', 'Работаем с любыми носителями', 'Местный сервис в Турку' ],
    'review' => [
        'text'     => 'Думал, что потерял все фотографии с отпуска — карта памяти перестала читаться. Восстановили 98% файлов! Не верил, что это возможно. Огромное спасибо!',
        'author'   => 'Riikka M.',
        'location' => 'Турку',
    ],
    'related' => [
        [ 'label' => 'Диагностика',          'href' => '/services/diagnostics' ],
        [ 'label' => 'Ремонт ноутбуков',     'href' => '/services/laptop-repair' ],
        [ 'label' => 'Ремонт устройств',     'href' => '/services/device-repair' ],
        [ 'label' => 'IT-поддержка',         'href' => '/services/it-support' ],
    ],
];

get_template_part( 'template-parts/service-page' );
