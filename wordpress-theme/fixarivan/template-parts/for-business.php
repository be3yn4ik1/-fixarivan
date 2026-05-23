<?php
$home_features = [
    'Ремонт устройств дома',
    'Настройка и оптимизация Wi-Fi',
    'Установка умного дома',
    'Монтаж камер видеонаблюдения',
    'Перенос данных и резервное копирование',
    'Вывоз старой электроники',
];
$biz_features = [
    'Поддержка IT-инфраструктуры',
    'Настройка и обслуживание сети',
    'Системы видеонаблюдения',
    'Настройка и ремонт рабочих станций',
    'Дежурная техническая поддержка',
    'Гарантийная помощь',
];
?>

<section id="for-business" class="py-14 lg:py-20 bg-[#f8f9fb]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 mb-3">
                <div class="h-px w-6 bg-blue-600"></div>
                <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Для всех</span>
                <div class="h-px w-6 bg-blue-600"></div>
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-3">
                Для дома и <span class="text-blue-600">бизнеса</span>
            </h2>
            <p class="text-gray-500 text-base max-w-xl mx-auto">Для домашних пользователей и компаний — у нас есть решение для вас.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Home card -->
            <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
                <div class="relative h-48 overflow-hidden">
                    <img src="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1"
                         alt="Для частных лиц" class="w-full h-full object-cover" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                    <span class="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wide rounded-full">Для частных лиц</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-navy-900 mb-2">Техническая помощь дома</h3>
                    <p class="text-[13px] text-gray-500 leading-relaxed mb-5">Не нужно никуда везти устройства. Мы приедем к вам, решим проблему и оставим всё работающим.</p>
                    <ul class="space-y-2.5 mb-6">
                        <?php foreach ( $home_features as $feat ) : ?>
                            <li class="flex items-center gap-2.5 text-[13px] text-navy-900">
                                <svg class="text-blue-600 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <?php echo esc_html( $feat ); ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>"
                       class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-xl transition-colors">
                        Заказать визит домой
                    </a>
                </div>
            </div>

            <!-- Business card -->
            <div class="bg-navy-900 rounded-2xl overflow-hidden border border-navy-800 shadow-soft">
                <div class="relative h-48 overflow-hidden">
                    <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1"
                         alt="Для бизнеса" class="w-full h-full object-cover opacity-60" loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                    <span class="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wide rounded-full border border-white/30">Для бизнеса</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-2">IT-решения для бизнеса</h3>
                    <p class="text-[13px] text-white/60 leading-relaxed mb-5">Держите бизнес в рабочем состоянии. Мы занимаемся техникой, вы — главным.</p>
                    <ul class="space-y-2.5 mb-6">
                        <?php foreach ( $biz_features as $feat ) : ?>
                            <li class="flex items-center gap-2.5 text-[13px] text-white/80">
                                <svg class="text-blue-400 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <?php echo esc_html( $feat ); ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-xl transition-colors">
                        Написать для бизнеса
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
