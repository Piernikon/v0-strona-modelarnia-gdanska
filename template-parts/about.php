<?php
/**
 * Template part for displaying the about section
 *
 * @package Modelarnia_Gdanska
 */

// Get ACF fields if available
$about_title = function_exists('get_field') ? get_field('about_title', 'option') : 'O Nas';
$about_subtitle = function_exists('get_field') ? get_field('about_subtitle', 'option') : 'Poznaj Modelarnię Gdańską';
$about_description_1 = function_exists('get_field') ? get_field('about_description_1', 'option') : 'Modelarnia Gdańska to profesjonalne studio modelarskie założone w 2015 roku przez grupę pasjonatów druku 3D i modelarstwa. Nasza firma specjalizuje się w wysokiej jakości usługach druku 3D, cięcia laserowego oraz profesjonalnego malowania modeli.';
$about_description_2 = function_exists('get_field') ? get_field('about_description_2', 'option') : 'Nasz zespół składa się z doświadczonych specjalistów, którzy łączą wiedzę techniczną z artystycznym podejściem. Każdy projekt traktujemy indywidualnie, dbając o najdrobniejsze szczegóły i najwyższą jakość wykonania.';
$about_description_3 = function_exists('get_field') ? get_field('about_description_3', 'option') : 'Dysponujemy nowoczesnym parkiem maszynowym, który obejmuje precyzyjne drukarki 3D (FDM i SLA), profesjonalne plotery laserowe oraz specjalistyczne stanowiska do malowania i wykańczania modeli. Dzięki temu jesteśmy w stanie realizować zarówno proste projekty, jak i skomplikowane zamówienia dla klientów indywidualnych oraz firm.';
$values_title = function_exists('get_field') ? get_field('values_title', 'option') : 'Nasze wartości';

// Get values
$values = array();
if (function_exists('get_field') && have_rows('values', 'option')) {
    while (have_rows('values', 'option')) {
        the_row();
        $values[] = array(
            'title' => get_sub_field('title'),
            'description' => get_sub_field('description'),
        );
    }
} else {
    // Default values
    $values = array(
        array(
            'title' => 'Jakość',
            'description' => 'Dbamy o najwyższą jakość każdego elementu, który opuszcza naszą pracownię.',
        ),
        array(
            'title' => 'Precyzja',
            'description' => 'Skupiamy się na detalach, które czynią każdy model wyjątkowym.',
        ),
        array(
            'title' => 'Innowacyjność',
            'description' => 'Stale rozwijamy nasze umiejętności i wprowadzamy nowe technologie.',
        ),
        array(
            'title' => 'Pasja',
            'description' => 'Kochamy to, co robimy, i wkładamy serce w każdy projekt.',
        ),
    );
}

// Get images
$workshop_image = function_exists('get_field') ? get_field('workshop_image', 'option') : '';
$printer_image = function_exists('get_field') ? get_field('printer_image', 'option') : '';
$team_image = function_exists('get_field') ? get_field('team_image', 'option') : '';
?>

<section id="about" class="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12 fade-in">
            <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
                    <?php echo esc_html($about_title); ?>
                </h2>
                <p class="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    <?php echo esc_html($about_subtitle); ?>
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Company Photos -->
            <div class="space-y-6 slide-in-left">
                <div class="grid grid-cols-2 gap-4">
                    <div class="relative h-64 rounded-lg overflow-hidden">
                        <?php if ($workshop_image) : ?>
                            <img src="<?php echo esc_url($workshop_image['url']); ?>" alt="<?php echo esc_attr($workshop_image['alt']); ?>" class="object-cover w-full h-full">
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/workshop.jpg" alt="Workshop" class="object-cover w-full h-full">
                        <?php endif; ?>
                    </div>
                    <div class="relative h-64 rounded-lg overflow-hidden">
                        <?php if ($printer_image) : ?>
                            <img src="<?php echo esc_url($printer_image['url']); ?>" alt="<?php echo esc_attr($printer_image['alt']); ?>" class="object-cover w-full h-full">
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/3d-printer.jpg" alt="3D Printer" class="object-cover w-full h-full">
                        <?php endif; ?>
                    </div>
                    <div class="relative h-64 rounded-lg overflow-hidden col-span-2">
                        <?php if ($team_image) : ?>
                            <img src="<?php echo esc_url($team_image['url']); ?>" alt="<?php echo esc_attr($team_image['alt']); ?>" class="object-cover w-full h-full">
                        <?php else : ?>
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/team.jpg" alt="Team" class="object-cover w-full h-full">
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Company Description -->
            <div class="space-y-6 slide-in-right">
                <div class="space-y-4">
                    <p class="text-gray-500 dark:text-gray-400">
                        <?php echo esc_html($about_description_1); ?>
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                        <?php echo esc_html($about_description_2); ?>
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                        <?php echo esc_html($about_description_3); ?>
                    </p>
                </div>

                <div class="pt-6">
                    <h3 class="text-xl font-bold mb-6 text-[#00330a] dark:text-[#dfae4f]"><?php echo esc_html($values_title); ?></h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <?php foreach ($values as $value) : ?>
                            <div class="space-y-2">
                                <h4 class="font-semibold text-[#00330a] dark:text-[#dfae4f]"><?php echo esc_html($value['title']); ?></h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400"><?php echo esc_html($value['description']); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
