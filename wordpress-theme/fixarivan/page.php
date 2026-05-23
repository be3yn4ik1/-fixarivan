<?php get_header(); ?>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 min-h-screen">
    <?php while ( have_posts() ) : the_post(); ?>
        <article>
            <h1 class="text-3xl font-bold text-navy-900 mb-6"><?php the_title(); ?></h1>
            <div class="text-gray-600 leading-relaxed"><?php the_content(); ?></div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
