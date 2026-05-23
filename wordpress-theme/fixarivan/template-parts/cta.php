<?php
$contacts = [
    [ 'label' => 'Телефон', 'val' => '+358 000 000 000', 'sub' => 'Пн–Вс, 8:00–20:00',      'href' => 'tel:+358000000000' ],
    [ 'label' => 'Email',   'val' => 'hello@fixarivan.fi', 'sub' => 'Отвечаем в течение часа', 'href' => 'mailto:hello@fixarivan.fi' ],
    [ 'label' => 'Район',   'val' => 'Турку и окрестности', 'sub' => 'Приезжаем к вам',       'href' => null ],
];
$contact_icons = [
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.18-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
];
?>

<section id="contact" class="py-14 lg:py-20 bg-gradient-to-br from-navy-900 to-blue-900 relative overflow-hidden">
    <!-- Decorative glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-navy-900/50 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-[11px] font-semibold text-white/80 uppercase tracking-widest">Работаем сегодня</span>
        </div>

        <h2 class="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Готовы решить<br>
            <span class="text-blue-300">ваши технические проблемы?</span>
        </h2>

        <p class="text-[15px] text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Свяжитесь с нами — найдём лучшее решение для вашей ситуации и приедем в удобное время.
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-[15px] rounded-2xl transition-all shadow-md hover:shadow-xl">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Написать в WhatsApp
            </a>
            <a href="tel:+358000000000"
               class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-[15px] rounded-2xl transition-all backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.18-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Позвонить
            </a>
        </div>

        <!-- Contact cards -->
        <div class="flex flex-wrap justify-center gap-4">
            <?php foreach ( $contacts as $i => $c ) : ?>
                <div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-4 text-left min-w-[180px]">
                    <div class="flex items-center gap-2 mb-1 text-blue-300">
                        <?php echo $contact_icons[ $i ]; ?>
                        <span class="text-[11px] font-bold uppercase tracking-widest text-white/50"><?php echo esc_html( $c['label'] ); ?></span>
                    </div>
                    <?php if ( $c['href'] ) : ?>
                        <a href="<?php echo esc_url( $c['href'] ); ?>" class="text-[14px] font-semibold text-white hover:text-blue-300 transition-colors"><?php echo esc_html( $c['val'] ); ?></a>
                    <?php else : ?>
                        <p class="text-[14px] font-semibold text-white"><?php echo esc_html( $c['val'] ); ?></p>
                    <?php endif; ?>
                    <p class="text-[11px] text-white/40 mt-0.5"><?php echo esc_html( $c['sub'] ); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
