<?php
$features = [
    [ 'title' => 'Опыт и экспертиза',         'desc' => 'Более 8 лет решения технических проблем любой сложности — от трещин на экране до полной сетевой инфраструктуры.' ],
    [ 'title' => 'Профессиональное оборудование', 'desc' => 'Наш мобильный сервис оснащён теми же инструментами, что и профессиональная мастерская.' ],
    [ 'title' => 'Честность и прозрачность',  'desc' => 'Справедливые цены, понятные объяснения, никаких скрытых платежей. Никогда.' ],
    [ 'title' => 'Забота об экологии',         'desc' => 'Принимаем старую электронику и утилизируем её ответственно, чтобы она не оказалась на свалке.' ],
];
$stats = [
    [ 'val' => '8+',    'label' => 'Лет опыта' ],
    [ 'val' => '1500+', 'label' => 'Довольных клиентов' ],
    [ 'val' => '5.0',   'label' => 'Средняя оценка' ],
    [ 'val' => 'Турку', 'label' => 'и окрестности' ],
];
$icons = [
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>',
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
];
?>

<section id="why-us" class="py-14 lg:py-20 bg-[#f8f9fb] relative">
    <div class="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            <!-- LEFT -->
            <div class="lg:w-1/2">
                <div class="inline-flex items-center gap-2 mb-3">
                    <div class="h-px w-6 bg-blue-600"></div>
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Почему FixariVan</span>
                </div>

                <h2 class="text-3xl lg:text-[38px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-3">
                    Опыт. Качество. <span class="text-blue-600">Доверие.</span>
                </h2>
                <p class="text-[14px] text-gray-500 leading-relaxed mb-8">Сочетаем профессионализм, современное оборудование и честный подход к каждому клиенту.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <?php foreach ( $features as $i => $f ) : ?>
                        <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
                            <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                                <?php echo $icons[ $i ]; ?>
                            </div>
                            <h3 class="text-[13px] font-semibold text-navy-900 mb-1.5"><?php echo esc_html( $f['title'] ); ?></h3>
                            <p class="text-[12px] text-gray-500 leading-relaxed"><?php echo esc_html( $f['desc'] ); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- RIGHT -->
            <div class="lg:w-1/2 flex flex-col gap-6">
                <!-- Stats grid -->
                <div class="grid grid-cols-2 gap-4">
                    <?php foreach ( $stats as $stat ) : ?>
                        <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft text-center">
                            <div class="text-3xl font-bold text-navy-900 mb-1"><?php echo esc_html( $stat['val'] ); ?></div>
                            <div class="text-[12px] text-gray-500"><?php echo esc_html( $stat['label'] ); ?></div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <!-- Review quote -->
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft">
                    <div class="flex mb-3">
                        <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <?php endfor; ?>
                    </div>
                    <p class="text-[14px] text-navy-900 font-medium italic leading-relaxed mb-3">«Приехал быстро, всё объяснил понятно и починил»</p>
                    <p class="text-[12px] text-gray-500">— Алекс, Турку</p>
                </div>

                <!-- Image -->
                <div class="rounded-2xl overflow-hidden border border-gray-100 shadow-soft h-48">
                    <img src="https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1"
                         alt="Техник за работой" class="w-full h-full object-cover" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</section>
