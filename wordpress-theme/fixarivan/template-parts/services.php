<?php
$stats = [
    [ 'val' => '8+',    'label' => 'Лет опыта' ],
    [ 'val' => '1500+', 'label' => 'Довольных клиентов' ],
    [ 'val' => '5.0',   'label' => 'Средняя оценка' ],
];
$services = [
    [ 'title' => 'Ремонт устройств',       'desc' => 'Ноутбуки, компьютеры, телефоны, консоли и прочее',     'href' => '/services/device-repair',    'img' => 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',   'icon_color' => 'text-blue-600',    'icon_bg' => 'bg-blue-50' ],
    [ 'title' => 'Wi-Fi и сеть',           'desc' => 'Настройка сети, усиление сигнала, устранение проблем',  'href' => '/services/wifi-network',     'img' => 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',   'icon_color' => 'text-sky-600',     'icon_bg' => 'bg-sky-50' ],
    [ 'title' => 'Умный дом',              'desc' => 'Установка и настройка умных устройств',                 'href' => '/services/smart-home',       'img' => 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',   'icon_color' => 'text-teal-600',    'icon_bg' => 'bg-teal-50' ],
    [ 'title' => 'Камеры видеонаблюдения', 'desc' => 'Монтаж и настройка систем CCTV',                       'href' => '/services/security-cameras', 'img' => 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',     'icon_color' => 'text-slate-600',   'icon_bg' => 'bg-slate-50' ],
    [ 'title' => 'IT-поддержка',           'desc' => 'IT-поддержка для бизнеса и решение проблем',            'href' => '/services/it-support',       'img' => 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',   'icon_color' => 'text-blue-600',    'icon_bg' => 'bg-blue-50' ],
    [ 'title' => 'Восстановление данных',  'desc' => 'Перенесём ваши данные на новое устройство без потерь',  'href' => '/services/data-recovery',    'img' => 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',     'icon_color' => 'text-cyan-600',    'icon_bg' => 'bg-cyan-50' ],
    [ 'title' => 'Диагностика',            'desc' => 'Найдём первопричину и предложим лучшее решение',        'href' => '/services/diagnostics',      'img' => 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',   'icon_color' => 'text-amber-600',   'icon_bg' => 'bg-amber-50' ],
    [ 'title' => 'Гарантийная поддержка',  'desc' => 'Помогаем с гарантийными случаями и сервисными центрами','href' => '/services/warranty',         'img' => 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',     'icon_color' => 'text-green-600',   'icon_bg' => 'bg-green-50' ],
    [ 'title' => 'Утилизация электроники', 'desc' => 'Принимаем старые устройства и утилизируем ответственно','href' => '/services/recycling',        'img' => 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',     'icon_color' => 'text-emerald-600', 'icon_bg' => 'bg-emerald-50' ],
];
?>

<section id="services" class="py-14 lg:py-20 bg-[#f8f9fb] relative">
    <div class="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div class="max-w-xl">
                <div class="inline-flex items-center gap-2 mb-3">
                    <div class="h-px w-6 bg-blue-600"></div>
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Наши услуги</span>
                </div>
                <h2 class="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight tracking-tight mb-3">
                    Решаем технические проблемы<br>
                    на любом <span class="text-blue-600">уровне</span>
                </h2>
                <p class="text-gray-500 text-base leading-relaxed">Широкий спектр услуг для дома и бизнеса. От настройки Wi-Fi до сложного ремонта техники.</p>
            </div>
            <div class="hidden lg:grid grid-cols-3 gap-3 text-center">
                <?php foreach ( $stats as $stat ) : ?>
                    <div class="bg-white rounded-xl px-4 py-3.5 shadow-soft border border-gray-100/80">
                        <div class="text-2xl font-bold text-navy-900"><?php echo esc_html( $stat['val'] ); ?></div>
                        <div class="text-xs text-gray-500 mt-0.5"><?php echo esc_html( $stat['label'] ); ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <?php foreach ( $services as $svc ) : ?>
                <a href="<?php echo esc_url( home_url( $svc['href'] ) ); ?>"
                   class="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
                    <div class="relative h-40 overflow-hidden">
                        <img src="<?php echo esc_url( $svc['img'] ); ?>" alt="<?php echo esc_attr( $svc['title'] ); ?>"
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        <div class="absolute top-3 left-3 w-9 h-9 <?php echo esc_attr( $svc['icon_bg'] ); ?> rounded-xl flex items-center justify-center shadow-sm border border-white/60">
                            <svg class="<?php echo esc_attr( $svc['icon_color'] ); ?>" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                        </div>
                    </div>
                    <div class="p-4 lg:p-5">
                        <h3 class="text-[15px] font-semibold text-navy-900 mb-1"><?php echo esc_html( $svc['title'] ); ?></h3>
                        <p class="text-[13px] text-gray-500 leading-relaxed mb-3"><?php echo esc_html( $svc['desc'] ); ?></p>
                        <span class="inline-flex items-center gap-1 text-[12px] font-semibold text-blue-600">
                            Подробнее
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-0.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </span>
                    </div>
                </a>
            <?php endforeach; ?>

            <!-- CTA card -->
            <div class="relative bg-gradient-to-br from-navy-900 to-blue-900 rounded-2xl overflow-hidden border border-navy-800 shadow-card p-5 lg:p-6 flex flex-col justify-between text-white min-h-[200px]">
                <div>
                    <h3 class="text-[15px] font-semibold mb-2">Не нашли нужное?</h3>
                    <p class="text-[13px] text-white/70 leading-relaxed">Напишите нам — подберём лучшее решение для вашей ситуации.</p>
                </div>
                <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center gap-2 mt-4 px-4 py-2.5 bg-white text-navy-900 text-[13px] font-semibold rounded-xl transition-opacity hover:opacity-90 self-start">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Написать в WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>
