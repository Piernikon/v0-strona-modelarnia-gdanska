<?php
/**
 * Template part for displaying the service order form modal
 *
 * @package Modelarnia_Gdanska
 */
?>

<!-- Service Order Modal -->
<div id="order-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 hidden">
    <div class="absolute inset-0 bg-black/50" id="modal-overlay"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 z-10">
        <button id="close-modal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span class="sr-only">Close</span>
        </button>
        
        <div class="space-y-4">
            <div class="space-y-2">
                <h3 class="text-lg font-medium">
                    <?php esc_html_e('Order', 'modelarnia-gdanska'); ?>: <span id="service-name"></span>
                </h3>
                <p class="text-sm text-muted-foreground">
                    <?php esc_html_e('Fill out the form below to request this service. We\'ll get back to you with a quote.', 'modelarnia-gdanska'); ?>
                </p>
            </div>

            <form id="order-form" class="space-y-4">
                <?php wp_nonce_field('service_order_nonce', 'service_order_nonce'); ?>
                <input type="hidden" name="action" value="service_order_submit">
                <input type="hidden" id="service-details" name="service_details" value="">
                
                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <label for="name" class="block text-sm font-medium">
                            <?php esc_html_e('Name', 'modelarnia-gdanska'); ?>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#dfae4f] focus:border-[#dfae4f] dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium">
                            <?php esc_html_e('Email', 'modelarnia-gdanska'); ?>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#dfae4f] focus:border-[#dfae4f] dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                </div>

                <div class="space-y-2">
                    <label for="quantity" class="block text-sm font-medium">
                        <?php esc_html_e('Quantity', 'modelarnia-gdanska'); ?>
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value="1"
                        required
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#dfae4f] focus:border-[#dfae4f] dark:bg-gray-700 dark:text-white"
                    />
                </div>

                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label for="details" class="block text-sm font-medium">
                            <?php esc_html_e('Details', 'modelarnia-gdanska'); ?>
                        </label>
                        <div class="relative group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                            <div class="absolute right-0 bottom-full mb-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 text-xs text-gray-600 dark:text-gray-300 hidden group-hover:block z-10">
                                <span id="order-tips"></span>
                            </div>
                        </div>
                    </div>
                    <textarea
                        id="details"
                        name="details"
                        required
                        rows="4"
                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-[#dfae4f] focus:border-[#dfae4f] dark:bg-gray-700 dark:text-white"
                    ></textarea>
                </div>

                <!-- File Upload -->
                <div class="space-y-2">
                    <label for="files" class="block text-sm font-medium">
                        <?php esc_html_e('Attach Files', 'modelarnia-gdanska'); ?>
                    </label>
                    <div class="flex items-center justify-center w-full">
                        <label
                            for="file-upload"
                            class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload mb-2 text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold"><?php esc_html_e('Click to upload', 'modelarnia-gdanska'); ?></span>
                                    <?php esc_html_e('or drag and drop', 'modelarnia-gdanska'); ?>
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    <?php esc_html_e('STL, OBJ, ZIP, PDF, JPG (max 50MB)', 'modelarnia-gdanska'); ?>
                                </p>
                            </div>
                            <input
                                id="file-upload"
                                type="file"
                                name="files[]"
                                class="hidden"
                                accept=".stl,.obj,.zip,.pdf,.jpg,.jpeg,.png"
                                multiple
                            />
                        </label>
                    </div>
                    <div id="file-list" class="mt-4 space-y-2 hidden"></div>
                </div>

                <div class="flex justify-end space-x-2 pt-2">
                    <button type="button" id="cancel-order" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                        <?php esc_html_e('Cancel', 'modelarnia-gdanska'); ?>
                    </button>
                    <button type="submit" class="px-4 py-2 text-sm font-medium text-[#1e1e1e] bg-[#dfae4f] border border-transparent rounded-md shadow-sm hover:bg-[#c99c45]">
                        <?php esc_html_e('Submit Request', 'modelarnia-gdanska'); ?>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
