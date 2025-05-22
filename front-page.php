<?php
/**
 * The template for displaying the front page
 *
 * @package Modelarnia_Gdanska
 */

get_header();
?>

<main id="primary" class="site-main">

    <?php
    // Hero Section
    get_template_part('template-parts/hero');
    
    // About Section
    get_template_part('template-parts/about');
    
    // Services Section
    get_template_part('template-parts/services');
    
    // Process Steps Section
    get_template_part('template-parts/process');
    
    // Testimonials Section
    get_template_part('template-parts/testimonials');
    
    // Gallery Section
    get_template_part('template-parts/gallery');
    
    // FAQ Section
    get_template_part('template-parts/faq');
    
    // Contact Section
    get_template_part('template-parts/contact');
    ?>

</main><!-- #main -->

<?php
get_footer();
