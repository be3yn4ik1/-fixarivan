<?php
$steps = [
    [ 'num' => '01', 'title' => 'Свяжитесь с нами',  'sub' => 'Напишите в WhatsApp или оставьте заявку на сайте.',            'img' => 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=900&h=560&dpr=1' ],
    [ 'num' => '02', 'title' => 'Мы приедем к вам',  'sub' => 'Приезжаем в удобное время по Турку и окрестностям.',            'img' => 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=520&h=380&dpr=1' ],
    [ 'num' => '03', 'title' => 'Решаем проблему',   'sub' => 'Диагностика и качественное решение на месте.',                  'img' => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=520&h=380&dpr=1' ],
    [ 'num' => '04', 'title' => 'Вы довольны',       'sub' => 'Проверяем результат и даём гарантию на выполненную работу.',    'img' => 'https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=900&h=480&dpr=1' ],
];
$bullets = [
    [ 'title' => 'Быстрый отклик',         'sub' => 'Приезжаем в удобное время, работаем без задержек.' ],
    [ 'title' => 'Профессиональный подход', 'sub' => 'Опыт, оборудование и внимание к деталям.' ],
    [ 'title' => 'Удобно для вас',         'sub' => 'Решаем проблемы на месте, без очередей и лишних поездок.' ],
];
?>

<section id="how-it-works" class="py-14 lg:py-20 bg-white relative">
    <div class="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#f8f9fb]/60 to-transparent pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            <!-- LEFT: text block -->
            <div class="lg:w-[360px] flex-shrink-0 lg:sticky lg:top-24">
                <div class="inline-flex items-center gap-2 mb-3">
                    <div class="h-px w-6 bg-blue-600"></div>
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Как мы работаем</span>
                </div>

                <h2 class="text-3xl lg:text-[38px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-3">
                    Просто. Удобно. <span class="text-blue-600">Надёжно.</span>
                </h2>

                <p class="text-[14px] text-gray-500 leading-relaxed mb-6">Мы сделали процесс максимально простым, чтобы вы сэкономили время и получили лучший результат.</p>

                <!-- Mobile workshop card -->
                <div class="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-4 mb-6">
                    <div class="flex items-center gap-2.5 mb-3">
                        <div class="w-7 h-7 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                        </div>
                        <div>
                            <p class="text-[11px] font-bold text-navy-900 uppercase tracking-wide">Мобильная мастерская</p>
                            <p class="text-[10px] text-gray-400">Полностью оснащённый фургон — к вам</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full w-3/5 bg-blue-500 rounded-full"></div>
                        </div>
                        <span class="text-[10px] text-blue-600 font-semibold">Едет к вам</span>
                    </div>
                </div>

                <!-- Bullet points -->
                <div class="space-y-4 mb-7">
                    <?php
                    $icons = [
                        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
                        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
                        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
                    ];
                    foreach ( $bullets as $i => $b ) : ?>
                        <div class="flex items-start gap-3.5">
                            <div class="w-8 h-8 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span class="text-navy-900"><?php echo $icons[ $i ]; ?></span>
                            </div>
                            <div>
                                <p class="text-[13px] font-semibold text-navy-900 mb-0.5"><?php echo esc_html( $b['title'] ); ?></p>
                                <p class="text-[12px] text-gray-500 leading-relaxed"><?php echo esc_html( $b['sub'] ); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="flex flex-wrap gap-3">
                    <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                       class="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-xl transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        WhatsApp
                    </a>
                    <a href="tel:+358000000000"
                       class="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-200 text-navy-900 text-[13px] font-semibold rounded-xl transition-colors hover:border-blue-200">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.18-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Позвонить
                    </a>
                </div>
            </div>

            <!-- RIGHT: Steps bento grid -->
            <div class="flex-1">
                <div class="grid grid-cols-2 gap-3">
                    <!-- Step 1 — wide -->
                    <div class="col-span-2 relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
                        <img src="<?php echo esc_url( $steps[0]['img'] ); ?>" alt="<?php echo esc_attr( $steps[0]['title'] ); ?>" class="w-full h-52 object-cover" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4 flex items-end gap-3">
                            <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-[13px]"><?php echo esc_html( $steps[0]['num'] ); ?></div>
                            <div>
                                <p class="text-[14px] font-semibold text-white"><?php echo esc_html( $steps[0]['title'] ); ?></p>
                                <p class="text-[12px] text-white/70"><?php echo esc_html( $steps[0]['sub'] ); ?></p>
                            </div>
                        </div>
                    </div>
                    <!-- Steps 2 & 3 — narrow -->
                    <?php foreach ( [ $steps[1], $steps[2] ] as $step ) : ?>
                        <div class="col-span-1 relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
                            <img src="<?php echo esc_url( $step['img'] ); ?>" alt="<?php echo esc_attr( $step['title'] ); ?>" class="w-full h-40 object-cover" loading="lazy">
                            <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent"></div>
                            <div class="absolute bottom-3 left-3 right-3 flex items-end gap-2">
                                <div class="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-[11px]"><?php echo esc_html( $step['num'] ); ?></div>
                                <div>
                                    <p class="text-[12px] font-semibold text-white"><?php echo esc_html( $step['title'] ); ?></p>
                                    <p class="text-[11px] text-white/70 line-clamp-1"><?php echo esc_html( $step['sub'] ); ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                    <!-- Step 4 — wide -->
                    <div class="col-span-2 relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
                        <img src="<?php echo esc_url( $steps[3]['img'] ); ?>" alt="<?php echo esc_attr( $steps[3]['title'] ); ?>" class="w-full h-44 object-cover" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4 flex items-end gap-3">
                            <div class="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-[13px]"><?php echo esc_html( $steps[3]['num'] ); ?></div>
                            <div>
                                <p class="text-[14px] font-semibold text-white"><?php echo esc_html( $steps[3]['title'] ); ?></p>
                                <p class="text-[12px] text-white/70"><?php echo esc_html( $steps[3]['sub'] ); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
