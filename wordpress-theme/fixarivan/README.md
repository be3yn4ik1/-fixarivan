# FixariVan WordPress Theme

WordPress-тема для сайта мобильного технического сервиса **FixariVan** (Турку, Финляндия).

## Установка

1. Скопируйте папку `fixarivan/` в `/wp-content/themes/`
2. В админ-панели WordPress: **Внешний вид → Темы → Активировать FixariVan**
3. Установите главную страницу: **Настройки → Чтение → Главная страница → выбрать страницу** (создайте пустую страницу "Главная")

## Страницы услуг

Для каждой страницы услуги создайте страницу WordPress и назначьте соответствующий шаблон:

| URL slug             | Template Name               |
|----------------------|-----------------------------|
| services/laptop-repair    | Ремонт ноутбуков и ПК  |
| services/phone-repair     | Ремонт телефонов        |
| services/device-repair    | Ремонт устройств        |
| services/wifi-network     | Wi-Fi и сетевые решения |
| services/smart-home       | Умный дом               |
| services/security-cameras | Камеры видеонаблюдения  |
| services/it-support       | IT-поддержка            |
| services/data-recovery    | Восстановление данных   |
| services/diagnostics      | Диагностика устройств   |
| services/warranty         | Гарантийная поддержка   |
| services/recycling        | Утилизация электроники  |

## Настройка

- **Телефон / WhatsApp**: найдите `358000000000` в файлах и замените на реальный номер
- **Email**: найдите `hello@fixarivan.fi` и замените
- **Контактная форма**: отправляет письмо на email администратора WordPress (Настройки → Общие → Email)

## Технологии

- Tailwind CSS (CDN Play)
- Inter (Google Fonts)
- Нативный AJAX для формы обратной связи

## Структура файлов

```
fixarivan/
├── style.css              # Метаданные темы
├── functions.php          # Регистрация хуков, скриптов, AJAX
├── header.php             # Шапка + навигация
├── footer.php             # Подвал
├── index.php              # Запасной шаблон (обязательный)
├── front-page.php         # Главная страница
├── page.php               # Шаблон обычной страницы
├── 404.php                # Страница 404
├── template-parts/
│   ├── hero.php
│   ├── services.php
│   ├── how-it-works.php
│   ├── why-us.php
│   ├── reviews.php
│   ├── for-business.php
│   ├── before-after.php
│   ├── coverage.php
│   ├── guarantee.php
│   ├── cta.php
│   ├── contact-form.php
│   └── service-page.php   # Общий макет страницы услуги
└── page-templates/
    ├── laptop-repair.php
    ├── phone-repair.php
    ├── device-repair.php
    ├── wifi-network.php
    ├── smart-home.php
    ├── security-cameras.php
    ├── it-support.php
    ├── data-recovery.php
    ├── diagnostics.php
    ├── warranty.php
    └── recycling.php
```
