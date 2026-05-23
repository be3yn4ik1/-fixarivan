<?php
$service_links = [
    [ 'label' => 'Ремонт устройств',       'href' => '/services/device-repair' ],
    [ 'label' => 'Ноутбуки и ПК',          'href' => '/services/laptop-repair' ],
    [ 'label' => 'Ремонт телефонов',       'href' => '/services/phone-repair' ],
    [ 'label' => 'Wi-Fi и сеть',           'href' => '/services/wifi-network' ],
    [ 'label' => 'Умный дом',              'href' => '/services/smart-home' ],
    [ 'label' => 'Камеры видеонаблюдения', 'href' => '/services/security-cameras' ],
    [ 'label' => 'IT-поддержка',           'href' => '/services/it-support' ],
    [ 'label' => 'Восстановление данных',  'href' => '/services/data-recovery' ],
    [ 'label' => 'Диагностика',            'href' => '/services/diagnostics' ],
];
$company_links = [
    [ 'label' => 'Как мы работаем', 'href' => '/#how-it-works' ],
    [ 'label' => 'Для бизнеса',     'href' => '/#for-business' ],
    [ 'label' => 'Отзывы',          'href' => '/#reviews' ],
    [ 'label' => 'Контакты',        'href' => '/#contact' ],
];
?>

<footer class="bg-navy-950 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <!-- Brand -->
            <div class="lg:col-span-1">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2.5 mb-5">
                    <div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="1" y="3" width="15" height="13" rx="2"/>
                            <path d="m16 8 6 6-6 6"/>
                            <path d="M1 13h15"/>
                        </svg>
                    </div>
                    <div class="leading-none">
                        <div class="font-bold text-[17px] tracking-tight">Fixari<span class="text-blue-400">Van</span></div>
                        <div class="text-[9px] font-medium text-gray-500 uppercase tracking-widest">Mobile Tech Service</div>
                    </div>
                </a>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">Профессиональный мобильный технический сервис для дома и бизнеса в Турку и окрестностях.</p>
                <div class="flex gap-3">
                    <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                       class="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors" aria-label="WhatsApp">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </a>
                    <a href="tel:+358000000000"
                       class="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors" aria-label="Телефон">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.18-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </a>
                    <a href="mailto:hello@fixarivan.fi"
                       class="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors" aria-label="Email">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </a>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Услуги</h3>
                <ul class="space-y-2.5">
                    <?php foreach ( $service_links as $sl ) : ?>
                        <li>
                            <a href="<?php echo esc_url( home_url( $sl['href'] ) ); ?>"
                               class="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                                <?php echo esc_html( $sl['label'] ); ?>
                                <svg class="opacity-0 group-hover:opacity-100 transition-opacity" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Company -->
            <div>
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Компания</h3>
                <ul class="space-y-2.5">
                    <?php foreach ( $company_links as $cl ) : ?>
                        <li>
                            <a href="<?php echo esc_url( home_url( $cl['href'] ) ); ?>"
                               class="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                                <?php echo esc_html( $cl['label'] ); ?>
                                <svg class="opacity-0 group-hover:opacity-100 transition-opacity" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Контакты</h3>
                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <svg class="text-blue-400 mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <div>
                            <p class="text-sm text-gray-300">Турку и окрестности</p>
                            <p class="text-xs text-gray-500">Приезжаем к вам</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="text-blue-400 mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.18-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <div>
                            <a href="tel:+358000000000" class="text-sm text-gray-300 hover:text-white transition-colors">+358 000 000 000</a>
                            <p class="text-xs text-gray-500">Пн–Вс, 8:00–20:00</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <svg class="text-blue-400 mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <a href="mailto:hello@fixarivan.fi" class="text-sm text-gray-300 hover:text-white transition-colors">hello@fixarivan.fi</a>
                    </div>
                </div>
                <div class="mt-5 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p class="text-xs text-gray-400 mb-2">Быстрый ответ:</p>
                    <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                       class="flex items-center gap-2 text-sm text-white font-medium hover:text-blue-400 transition-colors">
                        <svg class="text-green-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>

        <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-sm text-gray-500">© <?php echo date( 'Y' ); ?> FixariVan. Все права защищены.</p>
            <div class="flex items-center gap-6">
                <a href="<?php echo esc_url( home_url( '/privacy-policy' ) ); ?>" class="text-sm text-gray-500 hover:text-gray-300 transition-colors">Политика конфиденциальности</a>
                <a href="<?php echo esc_url( home_url( '/terms' ) ); ?>"          class="text-sm text-gray-500 hover:text-gray-300 transition-colors">Условия использования</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
