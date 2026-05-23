<?php
$service_options = $service_options ?? [
    'Ремонт устройств',
    'Ремонт ноутбука / ПК',
    'Ремонт телефона',
    'Wi-Fi и сеть',
    'Умный дом',
    'Камеры видеонаблюдения',
    'IT-поддержка',
    'Восстановление данных',
    'Диагностика',
    'Другое',
];
$form_title    = $form_title    ?? 'Запросить визит';
$form_headline = $form_headline ?? 'Свяжитесь с нами';
$form_sub      = $form_sub      ?? 'Быстрый ответ через WhatsApp или форму ниже.';
$sidebar_img   = $sidebar_img   ?? 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1';
$trust_points  = $trust_points  ?? [ 'Нет ремонта — нет оплаты', 'Гарантия на все работы', 'Прозрачные цены', 'Местный сервис в Турку' ];
?>

<section id="request" class="py-14 lg:py-20 bg-[#f8f9fb]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-10 items-start">

            <!-- Form -->
            <div class="flex-1 bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft">
                <h2 class="text-2xl font-bold text-navy-900 mb-1"><?php echo esc_html( $form_headline ); ?></h2>
                <p class="text-[13px] text-gray-500 mb-6"><?php echo esc_html( $form_sub ); ?></p>

                <form id="fv-contact-form" class="space-y-4">
                    <?php wp_nonce_field( 'fixarivan_contact', 'nonce' ); ?>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[12px] font-semibold text-navy-900 mb-1.5">Ваше имя *</label>
                            <input type="text" name="name" required placeholder="Иван Иванов"
                                   class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors">
                        </div>
                        <div>
                            <label class="block text-[12px] font-semibold text-navy-900 mb-1.5">Номер телефона *</label>
                            <input type="tel" name="phone" required placeholder="+358 000 000 000"
                                   class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[12px] font-semibold text-navy-900 mb-1.5">Услуга</label>
                        <select name="service"
                                class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors">
                            <option value="">Выберите услугу...</option>
                            <?php foreach ( $service_options as $opt ) : ?>
                                <option value="<?php echo esc_attr( $opt ); ?>"><?php echo esc_html( $opt ); ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[12px] font-semibold text-navy-900 mb-1.5">Опишите вашу проблему</label>
                        <textarea name="message" rows="4" placeholder="Опишите вашу проблему..."
                                  class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit"
                            class="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] rounded-xl transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        <span id="fv-submit-label">Отправить заявку</span>
                    </button>

                    <div id="fv-form-success" class="hidden p-4 bg-green-50 border border-green-100 rounded-xl text-center">
                        <p class="text-[14px] font-semibold text-green-700">Заявка отправлена!</p>
                        <p class="text-[12px] text-green-600">Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                </form>

                <script>
                document.getElementById('fv-contact-form').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const btn   = this.querySelector('button[type=submit]');
                    const label = document.getElementById('fv-submit-label');
                    btn.disabled = true;
                    label.textContent = 'Отправляем...';
                    const data = new FormData(this);
                    data.append('action', 'fixarivan_contact');
                    const res = await fetch('<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>', { method: 'POST', body: data });
                    const json = await res.json();
                    if (json.success) {
                        document.getElementById('fv-form-success').classList.remove('hidden');
                        this.reset();
                    }
                    btn.disabled = false;
                    label.textContent = 'Отправить заявку';
                });
                </script>
            </div>

            <!-- Sidebar -->
            <div class="lg:w-80 flex-shrink-0 space-y-5">
                <div class="rounded-2xl overflow-hidden border border-gray-100 shadow-soft h-44">
                    <img src="<?php echo esc_url( $sidebar_img ); ?>" alt="Сервис" class="w-full h-full object-cover" loading="lazy">
                </div>

                <div class="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
                    <h3 class="text-[13px] font-bold text-navy-900 mb-3">Почему выбирают нас</h3>
                    <ul class="space-y-2.5">
                        <?php foreach ( $trust_points as $tp ) : ?>
                            <li class="flex items-center gap-2.5 text-[13px] text-navy-900">
                                <svg class="text-blue-600 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                <?php echo esc_html( $tp ); ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>

                <div class="bg-blue-600 rounded-2xl p-5 text-white">
                    <p class="text-[13px] font-semibold mb-1">Предпочитаете WhatsApp?</p>
                    <p class="text-[12px] text-white/70 mb-3">Напишите нам напрямую — ответим в течение нескольких минут.</p>
                    <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                       class="flex items-center gap-2 px-4 py-2.5 bg-white text-blue-600 text-[12px] font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        Написать в WhatsApp
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
