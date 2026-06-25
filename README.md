# kdefarsi.github.io

وبسایت جامعه کی‌دی‌ای فارسی — اولین وبسایت جامعه کاربران و توسعه‌دهندگان کی‌دی‌ای فارسی زبان

ساخته شده با [Zola](https://www.getzola.org) و پوسته [Xuan](https://xuan-theme.jhq223.workers.dev).

## ساختار

```
content/          — محتوای وبسایت (مقالات، برگه‌ها)
  blog/           — پست‌های وبلاگ
  about/          — برگه درباره ما
  archive/        — برگه آرشیو
  links/          — برگه پیوندها
static/           — فایل‌های ایستا (JS, CSS سفارشی)
  jalali-dates.js — تبدیل تاریخ به شمسی
templates/        — قالب‌های سفارشی (جایگزین قالب پیش‌فرض پوسته)
themes/xuan/      — پوسته Xuan (ویرایش شده برای راست‌چین)
i18n/             — ترجمه فارسی واسط کاربری
data/             — داده‌های ایستا (پیوندها)
```

## توسعه

```bash
# نصب وابستگی‌ها (Pagefind برای جستجو)
npm install

# ساخت وبسایت
zola build

# ساخت ایندکس جستجو (بعد از هر build)
./node_modules/.bin/pagefind --site public

# سرور توسعه
zola serve
```

## مجوز

محتوای وبسایت تحت مجوز [CC BY-SA 4.0](https://github.com/kdefarsi/kdefarsi.github.io/blob/main/LICENSE) منتشر می‌شود.
