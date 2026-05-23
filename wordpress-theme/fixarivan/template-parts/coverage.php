<?php
$areas = [ 'Турку (Åbo)', 'Раисио', 'Кааринa', 'Наантали', 'Лието', 'Маску', 'Ноусиайнен', 'Руско', 'Паймио', 'Сауво' ];
?>

<section id="coverage" class="py-14 lg:py-20 bg-[#f8f9fb]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            <!-- LEFT -->
            <div class="lg:w-1/2">
                <div class="inline-flex items-center gap-2 mb-3">
                    <div class="h-px w-6 bg-blue-600"></div>
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Зона обслуживания</span>
                </div>
                <h2 class="text-3xl lg:text-[38px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-3">
                    Мы работаем <span class="text-blue-600">в вашем районе</span>
                </h2>
                <p class="text-[14px] text-gray-500 leading-relaxed mb-8">Базируемся в Турку, обслуживаем весь прилегающий регион. Не уверены, охватываем ли ваш район — просто спросите.</p>

                <div class="flex flex-wrap gap-2 mb-8">
                    <?php foreach ( $areas as $area ) : ?>
                        <span class="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[12px] font-medium text-navy-900">
                            <svg class="text-blue-600 flex-shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
                            <?php echo esc_html( $area ); ?>
                        </span>
                    <?php endforeach; ?>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft">
                        <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Часы работы</p>
                        <p class="text-[13px] font-semibold text-navy-900">Пн–Пт: 8:00–20:00</p>
                        <p class="text-[13px] font-semibold text-navy-900">Сб–Вс: 9:00–18:00</p>
                    </div>
                    <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-soft sm:col-span-2">
                        <p class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Быстрый ответ</p>
                        <p class="text-[13px] font-semibold text-navy-900">Отвечаем в течение минут через WhatsApp</p>
                        <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                           class="inline-flex items-center gap-1.5 mt-2 text-[12px] font-semibold text-blue-600 hover:underline">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            Написать сейчас
                        </a>
                    </div>
                </div>
            </div>

            <!-- RIGHT: map placeholder -->
            <div class="lg:w-1/2">
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft h-80 relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="text-white" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <p class="text-lg font-bold text-navy-900">Регион Турку</p>
                            <p class="text-sm text-gray-500 mt-1">10 населённых пунктов</p>
                        </div>
                    </div>
                    <!-- Dots decoration -->
                    <?php
                    $dots = [
                        [ 'top' => '35%', 'left' => '50%', 'size' => 'w-4 h-4', 'color' => 'bg-blue-600', 'label' => 'Турку' ],
                        [ 'top' => '25%', 'left' => '58%', 'size' => 'w-3 h-3', 'color' => 'bg-blue-400', 'label' => '' ],
                        [ 'top' => '45%', 'left' => '38%', 'size' => 'w-3 h-3', 'color' => 'bg-blue-400', 'label' => '' ],
                        [ 'top' => '55%', 'left' => '62%', 'size' => 'w-2.5 h-2.5', 'color' => 'bg-blue-300', 'label' => '' ],
                        [ 'top' => '20%', 'left' => '42%', 'size' => 'w-2.5 h-2.5', 'color' => 'bg-blue-300', 'label' => '' ],
                    ];
                    foreach ( $dots as $dot ) : ?>
                        <div class="absolute <?php echo esc_attr( $dot['size'] ); ?> <?php echo esc_attr( $dot['color'] ); ?> rounded-full opacity-80 -translate-x-1/2 -translate-y-1/2"
                             style="top:<?php echo esc_attr( $dot['top'] ); ?>;left:<?php echo esc_attr( $dot['left'] ); ?>">
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
