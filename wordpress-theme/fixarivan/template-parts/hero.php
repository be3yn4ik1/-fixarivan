<?php
$benefits = [
    [ 'title' => 'Приедем к вам',             'sub' => 'Домой, в офис или куда угодно' ],
    [ 'title' => 'Профессионально и надёжно',  'sub' => 'Более 10 лет опыта' ],
    [ 'title' => 'Быстрые решения',            'sub' => 'Большинство проблем — за один визит' ],
    [ 'title' => 'Прозрачные цены',            'sub' => 'Без скрытых платежей' ],
    [ 'title' => 'Ответственный подход',       'sub' => 'Заботимся об окружающей среде' ],
];
$benefit_icons = [
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>',
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.5A2 2 0 0 1 4 5h.5L7 8H4.5A1.5 1.5 0 0 0 3 9.5v.5h3l3 3H4v.5a1.5 1.5 0 0 0 1.5 1.5H7l2.5 3H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .5-1.5z"/><path d="m22 3-6 6"/><path d="m16 3 6 6"/></svg>',
];
$benefit_accent = [
    'bg-blue-50 text-blue-600',
    'bg-slate-50 text-slate-600',
    'bg-sky-50 text-sky-600',
    'bg-teal-50 text-teal-600',
    'bg-green-50 text-green-600',
];
?>

<section class="relative overflow-hidden bg-white pt-20 lg:pt-24">
    <!-- Ambient glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute -top-40 -right-40 w-[560px] h-[560px] bg-blue-50/60 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-32 w-[300px] h-[300px] bg-sky-50/40 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10 py-12 lg:py-16">

            <!-- LEFT: Copy -->
            <div class="flex-1 lg:pr-8 max-w-[520px]">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 bg-blue-600/[0.08] border border-blue-200/60 rounded-full px-3.5 py-1.5 mb-6">
                    <div class="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="m16 8 6 6-6 6"/><path d="M1 13h15"/></svg>
                    </div>
                    <span class="text-[11px] font-semibold text-blue-700 uppercase tracking-widest">Приедем. Починим. Сэкономим ваше время.</span>
                </div>

                <h1 class="text-[46px] sm:text-5xl lg:text-[58px] font-bold text-navy-900 leading-[1.06] tracking-tight mb-5">
                    Технологии<br>
                    работают <span class="text-blue-600 italic">для вас</span>
                </h1>

                <p class="text-[16px] text-gray-500 leading-relaxed mb-7 max-w-[420px]">
                    Мобильный технический сервис для дома и бизнеса. Решаем проблемы быстро, профессионально и с гарантией — прямо у вас дома.
                </p>

                <!-- Pills -->
                <div class="flex flex-wrap gap-2 mb-7">
                    <?php
                    $pills = [
                        [ 'icon' => '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>', 'label' => 'Турку и регион' ],
                        [ 'icon' => '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', 'label' => 'Выезд в день обращения' ],
                        [ 'icon' => '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>', 'label' => 'Ремонт на месте' ],
                    ];
                    foreach ( $pills as $pill ) : ?>
                        <div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200/80 rounded-full">
                            <span class="text-navy-900"><?php echo $pill['icon']; ?></span>
                            <span class="text-[12px] font-medium text-gray-700"><?php echo esc_html( $pill['label'] ); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>

                <!-- CTA buttons -->
                <div class="flex flex-wrap gap-3 mb-8">
                    <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] rounded-xl transition-all shadow-sm hover:shadow-md">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        Написать в WhatsApp
                    </a>
                    <a href="tel:+358000000000"
                       class="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 text-navy-900 font-semibold text-[14px] rounded-xl transition-all hover:border-blue-200 hover:bg-blue-50/50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.18-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Позвонить
                    </a>
                </div>

                <!-- Reviews trust -->
                <div class="flex items-center gap-3">
                    <div class="flex -space-x-1">
                        <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                            <div class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">
                                <?php echo chr( 65 + $i ); ?>
                            </div>
                        <?php endfor; ?>
                    </div>
                    <div>
                        <div class="flex items-center gap-0.5">
                            <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <?php endfor; ?>
                        </div>
                        <p class="text-[11px] text-gray-500">более 100 отзывов Google</p>
                    </div>
                </div>
            </div>

            <!-- RIGHT: Benefits grid -->
            <div class="w-full lg:w-[420px] flex-shrink-0">
                <!-- Available today badge -->
                <div class="flex items-center gap-3 mb-5 p-3.5 bg-green-50 border border-green-100 rounded-2xl">
                    <div class="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                        <p class="text-[13px] font-semibold text-navy-900">Работаем сегодня</p>
                        <p class="text-[11px] text-gray-500">Выезд в день обращения по Турку</p>
                    </div>
                    <div class="ml-auto w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                </div>

                <div class="grid grid-cols-1 gap-3">
                    <?php foreach ( $benefits as $i => $b ) : ?>
                        <div class="flex items-center gap-3.5 p-4 bg-white border border-gray-100 rounded-2xl shadow-soft">
                            <div class="w-9 h-9 <?php echo $benefit_accent[ $i ]; ?> rounded-xl flex items-center justify-center flex-shrink-0">
                                <?php echo $benefit_icons[ $i ]; ?>
                            </div>
                            <div>
                                <p class="text-[13px] font-semibold text-navy-900"><?php echo esc_html( $b['title'] ); ?></p>
                                <p class="text-[11px] text-gray-500"><?php echo esc_html( $b['sub'] ); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
