<?php
$cases = [
    [
        'title'  => 'Медленный ноутбук возвращён к жизни',
        'tag'    => 'Ремонт устройств',
        'before' => 'У клиента был 5-летний ноутбук: загружался 10 минут и постоянно зависал во время работы.',
        'after'  => 'Обновили ОЗУ, заменили HDD на SSD, почистили систему. Время загрузки: менее 20 секунд.',
    ],
    [
        'title'  => 'Мёртвые зоны Wi-Fi устранены',
        'tag'    => 'Wi-Fi и сеть',
        'before' => 'Большая квартира без сигнала в спальнях и на кухне — постоянные обрывы во время видеозвонков.',
        'after'  => 'Установили mesh-систему Wi-Fi. Полное покрытие везде, стабильные 500 Мбит/с по всей квартире.',
    ],
    [
        'title'  => 'Умный дом с нуля',
        'tag'    => 'Умный дом',
        'before' => 'У клиента было 6 умных устройств разных брендов — ни одно не работало вместе.',
        'after'  => 'Интегрировали всё в одну экосистему: голосовое управление, автоматизации и мобильное приложение.',
    ],
];
?>

<section id="before-after" class="py-14 lg:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 mb-3">
                <div class="h-px w-6 bg-blue-600"></div>
                <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Реальные результаты</span>
                <div class="h-px w-6 bg-blue-600"></div>
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-3">
                До и <span class="text-blue-600">после</span>
            </h2>
            <p class="text-gray-500 text-base">Реальные случаи наших клиентов — проблемы решены, жизнь упрощена.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <?php foreach ( $cases as $case ) : ?>
                <div class="bg-[#f8f9fb] rounded-2xl border border-gray-100 shadow-soft overflow-hidden">
                    <div class="p-5">
                        <span class="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wide rounded-full mb-3"><?php echo esc_html( $case['tag'] ); ?></span>
                        <h3 class="text-[14px] font-bold text-navy-900 mb-4"><?php echo esc_html( $case['title'] ); ?></h3>

                        <!-- Before -->
                        <div class="flex gap-3 mb-3">
                            <span class="flex-shrink-0 inline-flex items-center justify-center w-14 h-6 bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-wide">До</span>
                            <p class="text-[12px] text-gray-600 leading-relaxed"><?php echo esc_html( $case['before'] ); ?></p>
                        </div>

                        <div class="h-px bg-gray-200 my-3"></div>

                        <!-- After -->
                        <div class="flex gap-3">
                            <span class="flex-shrink-0 inline-flex items-center justify-center w-14 h-6 bg-green-100 text-green-600 text-[10px] font-bold rounded-full uppercase tracking-wide">После</span>
                            <p class="text-[12px] text-gray-600 leading-relaxed"><?php echo esc_html( $case['after'] ); ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
