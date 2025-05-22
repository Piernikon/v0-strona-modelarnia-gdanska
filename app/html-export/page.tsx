export default function HtmlExportPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">HTML Export for WordPress</h1>
      <p className="mb-4">
        To make this code ready for WordPress, you would need to convert the React components to HTML templates. Below
        are instructions for implementing this in WordPress:
      </p>

      <div className="space-y-6">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">WordPress Implementation Steps</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create a custom WordPress theme or use a page builder like Elementor or Beaver Builder</li>
            <li>Convert the React components to HTML/PHP templates</li>
            <li>Use WordPress's template hierarchy for different pages</li>
            <li>Implement the contact form using Contact Form 7 or another WordPress form plugin</li>
            <li>Use Advanced Custom Fields (ACF) for managing dynamic content</li>
            <li>Implement the portfolio as a custom post type</li>
          </ol>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Theme Structure</h2>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
            {`modelarnia-theme/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── front-page.php
├── page.php
├── single.php
├── archive.php
├── page-portfolio.php
├── page-guide.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── template-parts/
    ├── hero.php
    ├── services.php
    ├── process.php
    ├── gallery.php
    ├── testimonials.php
    ├── faq.php
    └── contact.php`}
          </pre>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Example: Converting Hero Section to WordPress</h2>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
            {`<!-- template-parts/hero.php -->
<section class="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
  <!-- Background Media -->
  <?php if (get_field('hero_media_type') === 'video'): ?>
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
        <source src="<?php echo esc_url(get_field('hero_video')); ?>" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-[#00330a]/60"></div>
    </div>
  <?php else: ?>
    <div class="absolute inset-0 z-0">
      <?php 
      $hero_image = get_field('hero_image');
      if ($hero_image): ?>
        <img src="<?php echo esc_url($hero_image['url']); ?>" alt="<?php echo esc_attr($hero_image['alt']); ?>" class="w-full h-full object-cover">
      <?php endif; ?>
      <div class="absolute inset-0 bg-[#00330a]/70"></div>
    </div>
  <?php endif; ?>

  <!-- Content -->
  <div class="container relative z-10 px-4 md:px-6 text-white">
    <div class="flex flex-col items-center space-y-4 text-center">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          <?php echo get_field('hero_title') ?: 'Modelarnia Gdańska'; ?>
        </h1>
        <p class="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
          <?php echo get_field('hero_description') ?: 'Precision 3D printing, laser cutting, and professional model painting services.'; ?>
        </p>
      </div>
      <div class="space-x-4">
        <a href="<?php echo esc_url(get_field('primary_button_link') ?: '#contact'); ?>" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45] h-10 px-4 py-2">
          <?php echo get_field('primary_button_text') ?: 'Get a Quote'; ?>
        </a>
        <a href="<?php echo esc_url(get_field('secondary_button_link') ?: '#services'); ?>" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 bg-transparent h-10 px-4 py-2">
          <?php echo get_field('secondary_button_text') ?: 'Explore Services'; ?>
        </a>
      </div>
    </div>
  </div>
</section>`}
          </pre>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">WordPress Plugins Recommended</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced Custom Fields (ACF) - For custom fields and content management</li>
            <li>Contact Form 7 - For the contact form with file uploads</li>
            <li>Custom Post Type UI - For creating portfolio and testimonial post types</li>
            <li>Elementor or Beaver Builder - For drag-and-drop page building</li>
            <li>WP Rocket - For performance optimization</li>
            <li>Yoast SEO - For search engine optimization</li>
            <li>UpdraftPlus - For backups</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
