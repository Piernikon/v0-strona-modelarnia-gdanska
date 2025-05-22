<?php
/**
 * The header for our theme
 *
 * @package Modelarnia_Gdanska
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> class="<?php echo is_admin_bar_showing() ? 'admin-bar' : ''; ?>">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
    <script>
        // Check for saved theme preference or respect OS preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
</head>

<body <?php body_class('bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'modelarnia-gdanska'); ?></a>

	<header class="sticky top-0 z-50 w-full backdrop-blur transition-all duration-200 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800">
		<div class="container mx-auto px-4 flex h-16 items-center justify-between">
			<div class="flex items-center gap-2">
				<?php
				the_custom_logo();
				if (is_front_page() && is_home()) :
					?>
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="font-bold text-xl text-[#00330a] dark:text-[#dfae4f]"><?php bloginfo('name'); ?></a>
					<?php
				else :
					?>
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="font-bold text-xl text-[#00330a] dark:text-[#dfae4f]"><?php bloginfo('name'); ?></a>
					<?php
				endif;
				?>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex items-center gap-6 overflow-x-auto">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
						'container'      => false,
						'menu_class'     => 'flex items-center gap-6',
						'fallback_cb'    => false,
						'items_wrap'     => '%3$s',
						'walker'         => new Modelarnia_Gdanska_Nav_Walker(),
					)
				);
				?>
				
				<div class="relative group">
					<button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
					</button>
					<div class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
						<?php
						$languages = apply_filters('wpml_active_languages', NULL, 'orderby=id&order=desc');
						if (!empty($languages)) {
							foreach ($languages as $language) {
								echo '<a href="' . esc_url($language['url']) . '" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">' . esc_html($language['native_name']) . '</a>';
							}
						} else {
							// Fallback if WPML is not active
							echo '<a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Polski</a>';
							echo '<a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">English</a>';
						}
						?>
					</div>
				</div>
				
				<button id="dark-mode-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun block dark:hidden"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon hidden dark:block"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
				</button>
			</nav>

			<!-- Mobile Menu Button -->
			<div class="flex lg:hidden items-center gap-4">
				<div class="relative group">
					<button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
					</button>
					<div class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
						<?php
						$languages = apply_filters('wpml_active_languages', NULL, 'orderby=id&order=desc');
						if (!empty($languages)) {
							foreach ($languages as $language) {
								echo '<a href="' . esc_url($language['url']) . '" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">' . esc_html($language['native_name']) . '</a>';
							}
						} else {
							// Fallback if WPML is not active
							echo '<a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Polski</a>';
							echo '<a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">English</a>';
						}
						?>
					</div>
				</div>
				
				<button id="dark-mode-toggle-mobile" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun block dark:hidden"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon hidden dark:block"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
				</button>
				
				<button id="mobile-menu-button" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		<div id="mobile-menu" class="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 hidden">
			<div class="container mx-auto py-4 space-y-2 px-4">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'mobile-menu-items',
						'container'      => false,
						'menu_class'     => 'space-y-2',
						'fallback_cb'    => false,
						'items_wrap'     => '%3$s',
						'walker'         => new Modelarnia_Gdanska_Mobile_Nav_Walker(),
					)
				);
				?>
			</div>
		</div>
	</header>
