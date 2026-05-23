<?php
$items = [
    [ 'title' => 'Гарантия на каждую работу',    'desc' => 'Все ремонты и установки сопровождаются письменной гарантией. Если что-то пойдёт не так — приедем снова бесплатно.' ],
    [ 'title' => 'В тот же день в большинстве случаев', 'desc' => 'Держим популярные запчасти в наличии. Большинство ремонтов и установок выполняется за один визит.' ],
    [ 'title' => 'Прозрачность до начала работ', 'desc' => 'Вы узнаете точную стоимость до начала любых работ. Никаких неожиданных счетов.' ],
    [ 'title' => 'Остаёмся на связи',             'desc' => 'Вопросы после визита? Пишите в любое время через WhatsApp — быстрые, личные ответы.' ],
];
$icons = [
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
];
?>

<section class="py-14 lg:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <?php foreach ( $items as $i => $item ) : ?>
                <div class="bg-[#f8f9fb] rounded-2xl p-5 border border-gray-100 shadow-soft">
                    <div class="w-11 h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4">
                        <?php echo $icons[ $i ]; ?>
                    </div>
                    <h3 class="text-[13px] font-semibold text-navy-900 mb-2"><?php echo esc_html( $item['title'] ); ?></h3>
                    <p class="text-[12px] text-gray-500 leading-relaxed"><?php echo esc_html( $item['desc'] ); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
