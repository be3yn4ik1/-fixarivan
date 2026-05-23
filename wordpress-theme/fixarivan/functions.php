<?php
defined( 'ABSPATH' ) || exit;

/* ─── Theme Setup ─────────────────────────────────────────────────────────── */
function fixarivan_setup() {
    load_theme_textdomain( 'fixarivan', get_template_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ] );
    add_theme_support( 'custom-logo', [
        'height'      => 40,
        'width'       => 160,
        'flex-height' => true,
        'flex-width'  => true,
    ] );

    register_nav_menus( [
        'primary' => __( 'Основное меню', 'fixarivan' ),
        'footer'  => __( 'Меню подвала', 'fixarivan' ),
    ] );
}
add_action( 'after_setup_theme', 'fixarivan_setup' );

/* ─── Enqueue styles & scripts ───────────────────────────────────────────── */
function fixarivan_enqueue() {
    // Google Fonts: Inter
    wp_enqueue_style(
        'fixarivan-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
        [],
        null
    );
    // Theme stylesheet (has theme metadata)
    wp_enqueue_style( 'fixarivan-style', get_stylesheet_uri(), [ 'fixarivan-fonts' ], '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'fixarivan_enqueue' );

/* ─── Tailwind CDN config injected into <head> ───────────────────────────── */
function fixarivan_tailwind_cdn() {
    ?>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                },
                colors: {
                    navy: {
                        50:  '#f0f4f9',
                        100: '#dce6f0',
                        200: '#b3cce0',
                        300: '#80aac9',
                        400: '#4d87b2',
                        500: '#2b6491',
                        600: '#1e4d72',
                        700: '#163a56',
                        800: '#0f2a3d',
                        900: '#0a1c29',
                        950: '#060f17',
                    },
                },
                boxShadow: {
                    soft:   '0 2px 20px rgba(0,0,0,0.06)',
                    card:   '0 4px 24px rgba(0,0,0,0.08)',
                    lifted: '0 8px 40px rgba(0,0,0,0.12)',
                },
            },
        },
    };
    </script>
    <?php
}
add_action( 'wp_head', 'fixarivan_tailwind_cdn', 1 );

/* ─── Mobile menu toggle script ──────────────────────────────────────────── */
function fixarivan_inline_scripts() {
    ?>
    <script>
    function fvToggleMenu() {
        const m = document.getElementById('fv-mobile-menu');
        const open = m.classList.toggle('hidden');
        document.getElementById('fv-menu-icon-open').classList.toggle('hidden', !open);
        document.getElementById('fv-menu-icon-close').classList.toggle('hidden', open);
    }
    function fvToggleServices() {
        document.getElementById('fv-services-dropdown').classList.toggle('hidden');
    }
    window.addEventListener('scroll', function () {
        const h = document.getElementById('fv-header');
        if (window.scrollY > 20) {
            h.classList.add('bg-white/96', 'backdrop-blur-md', 'shadow-soft', 'border-b', 'border-gray-100');
            h.classList.remove('bg-transparent');
        } else {
            const isHome = document.body.classList.contains('home');
            if (isHome) {
                h.classList.remove('bg-white/96', 'backdrop-blur-md', 'shadow-soft', 'border-b', 'border-gray-100');
                h.classList.add('bg-transparent');
            }
        }
    });
    </script>
    <?php
}
add_action( 'wp_footer', 'fixarivan_inline_scripts' );

/* ─── Contact form handler (AJAX) ────────────────────────────────────────── */
function fixarivan_handle_contact() {
    check_ajax_referer( 'fixarivan_contact', 'nonce' );

    $name    = sanitize_text_field( $_POST['name']    ?? '' );
    $phone   = sanitize_text_field( $_POST['phone']   ?? '' );
    $service = sanitize_text_field( $_POST['service'] ?? '' );
    $message = sanitize_textarea_field( $_POST['message'] ?? '' );

    if ( ! $name || ! $phone ) {
        wp_send_json_error( 'Заполните обязательные поля.' );
    }

    $to      = get_option( 'admin_email' );
    $subject = 'Новая заявка с сайта FixariVan';
    $body    = "Имя: $name\nТелефон: $phone\nУслуга: $service\n\nСообщение:\n$message";
    $headers = [ 'Content-Type: text/plain; charset=UTF-8' ];

    wp_mail( $to, $subject, $body, $headers );
    wp_send_json_success( 'Заявка отправлена!' );
}
add_action( 'wp_ajax_fixarivan_contact',        'fixarivan_handle_contact' );
add_action( 'wp_ajax_nopriv_fixarivan_contact', 'fixarivan_handle_contact' );
