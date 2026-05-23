<?php get_header(); ?>

<main class="min-h-screen flex items-center justify-center bg-[#f8f9fb]">
    <div class="text-center py-20 px-4">
        <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="text-blue-600" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
        </div>
        <h1 class="text-6xl font-bold text-navy-900 mb-3">404</h1>
        <h2 class="text-2xl font-semibold text-navy-900 mb-3">Страница не найдена</h2>
        <p class="text-gray-500 mb-8 max-w-md mx-auto">К сожалению, запрашиваемая страница не существует. Возможно, она была перемещена или удалена.</p>
        <div class="flex flex-wrap justify-center gap-3">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>"
               class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                На главную
            </a>
            <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-navy-900 font-semibold rounded-xl transition-colors hover:border-blue-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                WhatsApp
            </a>
        </div>
    </div>
</main>

<?php get_footer(); ?>
