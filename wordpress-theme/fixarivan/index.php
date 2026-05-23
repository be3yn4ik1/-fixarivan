<?php
/* Fallback template - WordPress requires this file. */
get_header();
?>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 min-h-screen">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <article class="prose max-w-none">
                <h1 class="text-3xl font-bold text-navy-900 mb-4"><?php the_title(); ?></h1>
                <div class="text-gray-600 leading-relaxed"><?php the_content(); ?></div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <div class="text-center py-16">
            <h1 class="text-2xl font-bold text-navy-900 mb-3">Страница не найдена</h1>
            <p class="text-gray-500 mb-6">Запрашиваемая страница не существует.</p>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>"
               class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                На главную
            </a>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
