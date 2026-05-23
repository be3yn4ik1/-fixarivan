<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
$is_home = is_front_page();
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
    [ 'label' => 'Гарантийная поддержка',  'href' => '/services/warranty' ],
    [ 'label' => 'Утилизация электроники', 'href' => '/services/recycling' ],
];
$base_header_cls = $is_home
    ? 'bg-transparent'
    : 'bg-white/96 backdrop-blur-md shadow-soft border-b border-gray-100';
?>

<header id="fv-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 <?php echo esc_attr( $base_header_cls ); ?>">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">

            <!-- Logo -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2.5 flex-shrink-0">
                <div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="3" width="15" height="13" rx="2"/>
                        <path d="m16 8 6 6-6 6"/>
                        <path d="M1 13h15"/>
                    </svg>
                </div>
                <div class="leading-none">
                    <div class="font-bold text-[17px] text-navy-900 tracking-tight">
                        Fixari<span class="text-blue-600">Van</span>
                    </div>
                    <div class="text-[9px] font-medium text-gray-400 uppercase tracking-widest">Mobile Tech Service</div>
                </div>
            </a>

            <!-- Desktop nav -->
            <nav class="hidden lg:flex items-center gap-0.5">
                <!-- Services dropdown -->
                <div class="relative" onmouseenter="document.getElementById('fv-services-dropdown').classList.remove('hidden')" onmouseleave="document.getElementById('fv-services-dropdown').classList.add('hidden')">
                    <button class="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                        Услуги
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mt-px"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    <div id="fv-services-dropdown" class="hidden absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-lifted border border-gray-100 py-2 z-50">
                        <?php foreach ( $service_links as $sl ) : ?>
                            <a href="<?php echo esc_url( home_url( $sl['href'] ) ); ?>"
                               class="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 transition-colors">
                                <?php echo esc_html( $sl['label'] ); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>

                <a href="<?php echo esc_url( home_url( '/#for-business' ) ); ?>" class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">Для бизнеса</a>
                <a href="<?php echo esc_url( home_url( '/#reviews' ) ); ?>"      class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">Отзывы</a>
                <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>"      class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">Контакты</a>
            </nav>

            <!-- Right: CTA -->
            <div class="hidden lg:flex items-center gap-2.5">
                <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                   class="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Написать в WhatsApp
                </a>
            </div>

            <!-- Mobile toggle -->
            <button class="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors" onclick="fvToggleMenu()">
                <svg id="fv-menu-icon-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                <svg id="fv-menu-icon-close" class="hidden" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        </div>
    </div>

    <!-- Mobile menu -->
    <div id="fv-mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 shadow-lifted max-h-[80vh] overflow-y-auto">
        <div class="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
            <p class="px-4 pt-2 pb-1 text-xs font-bold text-gray-400 uppercase tracking-widest">Услуги</p>
            <?php foreach ( $service_links as $sl ) : ?>
                <a href="<?php echo esc_url( home_url( $sl['href'] ) ); ?>"
                   class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">
                    <?php echo esc_html( $sl['label'] ); ?>
                </a>
            <?php endforeach; ?>
            <div class="h-px bg-gray-100 my-2"></div>
            <a href="<?php echo esc_url( home_url( '/#for-business' ) ); ?>" class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">Для бизнеса</a>
            <a href="<?php echo esc_url( home_url( '/#reviews' ) ); ?>"      class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">Отзывы</a>
            <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>"      class="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors">Контакты</a>
            <div class="pt-2">
                <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                   class="flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Написать в WhatsApp
                </a>
            </div>
        </div>
    </div>
</header>
