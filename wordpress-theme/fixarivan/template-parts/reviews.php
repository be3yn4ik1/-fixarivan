<?php
$reviews = [
    [ 'name' => 'Alex T.',    'location' => 'Турку',     'text' => 'Приехал в течение часа, мгновенно диагностировал проблему и починил ноутбук на месте. Честная цена, никаких сюрпризов. Очень рекомендую!', 'service' => 'Ремонт устройств' ],
    [ 'name' => 'Maria K.',   'location' => 'Турку',     'text' => 'Wi-Fi в новой квартире был ужасным. Они приехали, установили mesh-систему — теперь сигнал отличный везде. Очень профессионально.',       'service' => 'Wi-Fi и сеть' ],
    [ 'name' => 'Jukka H.',   'location' => 'Раисио',    'text' => 'Настроили весь умный дом: камеры, автоматизации. Очень тщательно, объяснили всё понятно. Обязательно обращусь снова.',                   'service' => 'Умный дом + Камеры' ],
    [ 'name' => 'Anna L.',    'location' => 'Кааринa',   'text' => 'Нужна была помощь с гарантийным случаем для телефона. Они взяли на себя всё общение с сервисным центром и держали меня в курсе. Без стресса!', 'service' => 'Гарантийная поддержка' ],
    [ 'name' => 'Mikael P.',  'location' => 'Турку',     'text' => 'IT-поддержка для нашего небольшого офиса — быстро, надёжно, и они явно знают своё дело. Наша техническая команда уже 2 года.',           'service' => 'IT-поддержка' ],
    [ 'name' => 'Sofia V.',   'location' => 'Наантали',  'text' => 'Перенесли все данные со старого телефона на новый без потери ни одной фотографии или контакта. Быстро, аккуратно и очень дружелюбно.',   'service' => 'Восстановление данных' ],
];
?>

<section id="reviews" class="py-14 lg:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 mb-3">
                <div class="h-px w-6 bg-blue-600"></div>
                <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Отзывы клиентов</span>
                <div class="h-px w-6 bg-blue-600"></div>
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-3">Что говорят наши клиенты</h2>
            <p class="text-gray-500 text-base">Настоящие отзывы от настоящих людей.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <?php foreach ( $reviews as $r ) : ?>
                <div class="bg-[#f8f9fb] rounded-2xl p-5 border border-gray-100 shadow-soft flex flex-col">
                    <!-- Stars -->
                    <div class="flex mb-3">
                        <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <?php endfor; ?>
                    </div>

                    <p class="text-[13px] text-navy-900 leading-relaxed mb-4 flex-1"><?php echo esc_html( $r['text'] ); ?></p>

                    <div class="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                        <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[11px] font-bold">
                                <?php echo esc_html( mb_substr( $r['name'], 0, 1 ) ); ?>
                            </div>
                            <div>
                                <p class="text-[12px] font-semibold text-navy-900"><?php echo esc_html( $r['name'] ); ?></p>
                                <p class="text-[11px] text-gray-400"><?php echo esc_html( $r['location'] ); ?></p>
                            </div>
                        </div>
                        <span class="text-[10px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full"><?php echo esc_html( $r['service'] ); ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
