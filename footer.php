<?php
/**
 * The template for displaying the footer
 *
 * @package Modelarnia_Gdanska
 */

?>

	<footer class="w-full bg-[#1e1e1e] dark:bg-black text-white">
      <div class="container px-4 md:px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-[#dfae4f]"><?php bloginfo('name'); ?></h3>
            <p class="text-zinc-400 mb-4">
              <?php echo get_theme_mod('footer_description', 'Professional 3D printing, laser cutting, and model painting services in Gdańsk, Poland.'); ?>
            </p>
            <p class="text-zinc-400">
              <?php echo get_theme_mod('contact_email', 'Email: contact@modelarniagdanska.pl'); ?>
              <br />
              <?php echo get_theme_mod('contact_phone', 'Phone: +48 123 456 789'); ?>
            </p>
          </div>

          <?php if (is_active_sidebar('footer-1')) : ?>
            <div>
              <?php dynamic_sidebar('footer-1'); ?>
            </div>
          <?php endif; ?>

          <?php if (is_active_sidebar('footer-2')) : ?>
            <div>
              <?php dynamic_sidebar('footer-2'); ?>
            </div>
          <?php endif; ?>

          <?php if (is_active_sidebar('footer-3')) : ?>
            <div>
              <?php dynamic_sidebar('footer-3'); ?>
            </div>
          <?php endif; ?>
        </div>

        <div class="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-zinc-400">© <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
          <p class="text-sm text-zinc-400 mt-2 md:mt-0"><?php echo get_theme_mod('footer_location', 'Gdańsk, Poland'); ?></p>
        </div>
      </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
