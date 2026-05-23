<?php
/*
 * Reusable service page layout.
 * Caller must set these variables before get_template_part():
 *   $fv_service = [ 'label', 'headline', 'headline_accent', 'subheadline',
 *                   'hero_img', 'trust_items', 'offer_title', 'offer_items',
 *                   'problems_title', 'problems', 'problems_img',
 *                   'process_title', 'process_steps',
 *                   'pricing', 'form_title', 'form_headline', 'form_sub',
 *                   'form_services', 'trust_points', 'related', 'review' ]
 */
$s = $fv_service;
?>

<?php get_header(); ?>

<!-- Breadcrumb -->
<div class="pt-24 pb-4 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-[12px] text-gray-400">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-blue-600 transition-colors">Главная</a>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <a href="<?php echo esc_url( home_url( '/#services' ) ); ?>" class="hover:text-blue-600 transition-colors">Услуги</a>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <span class="text-navy-900 font-medium"><?php echo esc_html( $s['label'] ); ?></span>
        </nav>
    </div>
</div>

<!-- Hero -->
<section class="relative overflow-hidden bg-navy-950">
    <div class="absolute inset-0">
        <img src="<?php echo esc_url( $s['hero_img'] ); ?>" alt="<?php echo esc_attr( $s['label'] ); ?>"
             class="w-full h-full object-cover opacity-25" loading="eager">
        <div class="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/30"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <span class="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-[11px] font-bold uppercase tracking-widest rounded-full mb-5">
            <?php echo esc_html( $s['label'] ); ?>
        </span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            <?php echo esc_html( $s['headline'] ); ?><br>
            <span class="text-blue-400"><?php echo esc_html( $s['headline_accent'] ); ?></span>
        </h1>
        <p class="text-[15px] text-white/60 leading-relaxed max-w-xl mb-8">
            <?php echo esc_html( $s['subheadline'] ); ?>
        </p>

        <!-- Trust strip -->
        <div class="flex flex-wrap gap-3">
            <?php foreach ( $s['trust_items'] as $ti ) : ?>
                <div class="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-3.5 py-2.5">
                    <span class="text-blue-300"><?php echo $ti['icon']; ?></span>
                    <div>
                        <p class="text-[12px] font-semibold text-white leading-none"><?php echo esc_html( $ti['label'] ); ?></p>
                        <p class="text-[10px] text-white/50 mt-0.5"><?php echo esc_html( $ti['sub'] ); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- What we offer -->
<?php if ( ! empty( $s['offer_items'] ) ) : ?>
<section class="py-12 lg:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php if ( ! empty( $s['offer_title'] ) ) : ?>
            <h2 class="text-2xl font-bold text-navy-900 mb-7"><?php echo esc_html( $s['offer_title'] ); ?></h2>
        <?php endif; ?>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <?php foreach ( $s['offer_items'] as $oi ) : ?>
                <div class="rounded-2xl overflow-hidden border border-gray-100 shadow-soft group">
                    <div class="h-28 overflow-hidden">
                        <img src="<?php echo esc_url( $oi['img'] ); ?>" alt="<?php echo esc_attr( $oi['label'] ); ?>"
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy">
                    </div>
                    <div class="p-3 bg-white">
                        <p class="text-[12px] font-semibold text-navy-900"><?php echo esc_html( $oi['label'] ); ?></p>
                        <p class="text-[11px] text-gray-500"><?php echo esc_html( $oi['sub'] ); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php endif; ?>

<!-- Common problems + process -->
<section class="py-12 lg:py-16 bg-[#f8f9fb]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-10">

            <!-- Problems -->
            <?php if ( ! empty( $s['problems'] ) ) : ?>
            <div class="lg:w-1/2">
                <h2 class="text-2xl font-bold text-navy-900 mb-6"><?php echo esc_html( $s['problems_title'] ?? 'Что мы решаем' ); ?></h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <?php foreach ( $s['problems'] as $prob ) : ?>
                        <div class="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-soft">
                            <svg class="text-blue-600 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            <span class="text-[13px] text-navy-900"><?php echo esc_html( $prob ); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
                <?php if ( ! empty( $s['problems_img'] ) ) : ?>
                    <div class="mt-5 rounded-2xl overflow-hidden border border-gray-100 shadow-soft h-44">
                        <img src="<?php echo esc_url( $s['problems_img'] ); ?>" alt="Ремонт" class="w-full h-full object-cover" loading="lazy">
                    </div>
                <?php endif; ?>
            </div>
            <?php endif; ?>

            <!-- Process steps -->
            <div class="<?php echo empty( $s['problems'] ) ? 'w-full' : 'lg:w-1/2'; ?>">
                <h2 class="text-2xl font-bold text-navy-900 mb-6"><?php echo esc_html( $s['process_title'] ?? 'Как мы работаем' ); ?></h2>
                <div class="space-y-4">
                    <?php foreach ( $s['process_steps'] as $step ) : ?>
                        <div class="flex items-start gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-soft">
                            <div class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-[13px] flex-shrink-0">
                                <?php echo esc_html( $step['number'] ); ?>
                            </div>
                            <div>
                                <p class="text-[13px] font-semibold text-navy-900 mb-0.5"><?php echo esc_html( $step['title'] ); ?></p>
                                <p class="text-[12px] text-gray-500 leading-relaxed"><?php echo esc_html( $step['description'] ); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Pricing -->
<?php if ( ! empty( $s['pricing'] ) ) : ?>
<section class="py-12 lg:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-navy-900 mb-7">Цены</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <?php foreach ( $s['pricing'] as $p ) : ?>
                <div class="relative bg-white rounded-2xl border <?php echo ! empty( $p['popular'] ) ? 'border-blue-500 shadow-card ring-1 ring-blue-100' : 'border-gray-100 shadow-soft'; ?> p-5 flex flex-col">
                    <?php if ( ! empty( $p['popular'] ) ) : ?>
                        <span class="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wide rounded-full">Популярное</span>
                    <?php endif; ?>
                    <?php if ( ! empty( $p['sameDay'] ) ) : ?>
                        <span class="self-start px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-semibold rounded-full mb-2">В тот же день</span>
                    <?php endif; ?>
                    <p class="text-[13px] font-semibold text-navy-900 mb-1"><?php echo esc_html( $p['title'] ); ?></p>
                    <p class="text-[12px] text-gray-500 mb-3 flex-1"><?php echo esc_html( $p['description'] ); ?></p>
                    <p class="text-2xl font-bold text-navy-900">от <?php echo esc_html( $p['from'] ); ?></p>
                    <?php if ( ! empty( $p['note'] ) ) : ?>
                        <p class="text-[10px] text-gray-400 mt-1"><?php echo esc_html( $p['note'] ); ?></p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        <p class="text-[12px] text-gray-400 mt-4">* Точная стоимость определяется после диагностики. Все цены включают выезд.</p>
    </div>
</section>
<?php endif; ?>

<!-- Contact form -->
<?php
$form_title    = $s['form_title']    ?? 'Запросить визит';
$form_headline = $s['form_headline'] ?? 'Запишитесь на ремонт';
$form_sub      = $s['form_sub']      ?? 'Быстрый ответ через WhatsApp или форму ниже.';
$service_options = $s['form_services'] ?? [];
$trust_points  = $s['trust_points']  ?? [];
$sidebar_img   = $s['sidebar_img']   ?? '';
get_template_part( 'template-parts/contact-form' );
?>

<!-- Review + related -->
<section class="py-12 lg:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8 items-start">

            <?php if ( ! empty( $s['review'] ) ) : ?>
            <!-- Customer review -->
            <div class="lg:w-1/2 bg-[#f8f9fb] rounded-2xl p-6 border border-gray-100 shadow-soft">
                <div class="flex mb-3">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <?php endfor; ?>
                </div>
                <p class="text-[14px] text-navy-900 italic leading-relaxed mb-4">"<?php echo esc_html( $s['review']['text'] ); ?>"</p>
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[11px] font-bold">
                        <?php echo esc_html( mb_substr( $s['review']['author'], 0, 1 ) ); ?>
                    </div>
                    <div>
                        <p class="text-[12px] font-semibold text-navy-900"><?php echo esc_html( $s['review']['author'] ); ?></p>
                        <p class="text-[11px] text-gray-400"><?php echo esc_html( $s['review']['location'] ); ?></p>
                    </div>
                </div>
            </div>
            <?php endif; ?>

            <?php if ( ! empty( $s['related'] ) ) : ?>
            <!-- Related services -->
            <div class="<?php echo empty( $s['review'] ) ? 'w-full' : 'lg:w-1/2'; ?>">
                <h3 class="text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-4">Похожие услуги</h3>
                <div class="flex flex-wrap gap-2">
                    <?php foreach ( $s['related'] as $rel ) : ?>
                        <a href="<?php echo esc_url( home_url( $rel['href'] ) ); ?>"
                           class="flex items-center gap-1.5 px-4 py-2.5 bg-[#f8f9fb] border border-gray-100 rounded-xl text-[13px] font-medium text-navy-900 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                            <?php echo esc_html( $rel['label'] ); ?>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php get_template_part( 'template-parts/cta' ); ?>

<?php get_footer(); ?>
