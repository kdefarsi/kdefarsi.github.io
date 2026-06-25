+++
title = "خانه"
+++

<style>
.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero h1 {
  font-size: var(--font-size-xxx-large);
  margin-bottom: 1rem;
}

.hero p {
  font-size: var(--font-size-large);
  color: var(--fg-muted-5);
  max-width: 30rem;
  margin: 0 auto 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.feature-card {
  padding: 1.5rem;
  border-radius: var(--rounded-corner);
  background: var(--fg-muted-1);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-raised);
}

.feature-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
}

.feature-card p {
  margin: 0;
  font-size: var(--font-size-small);
  color: var(--fg-muted-5);
  line-height: 1.6;
}

@media only screen and (max-width: 720px) {
  .hero { padding: 2rem 0; }
  .hero h1 { font-size: var(--font-size-xx-large); }
  .hero p { font-size: var(--font-size-medium); }
  .features { grid-template-columns: 1fr; }
}

@media only screen and (max-width: 480px) {
  .hero h1 { font-size: var(--font-size-x-large); }
  .buttons { flex-direction: column; align-items: center; }
  .buttons a { width: 100%; text-align: center; }
}
</style>

<div class="hero">
  <h1>به جامعه کی‌دی‌ای فارسی خوش آمدید</h1>
  <p>اولین وبسایت جامعه کاربران و توسعه‌دهندگان کی‌دی‌ای فارسی زبان؛ جایی برای یادگیری، همکاری و به اشتراک‌گذاری تجربیات</p>
  <div class="buttons centered">
    <a href="/blog" class="big colored">مشاهده وبلاگ</a>
    <a href="/about" class="big">درباره ما</a>
  </div>
</div>

---

## چه کاری می‌توانید انجام دهید؟

<div class="features">
  <div class="feature-card">
    <h3>📰 وبلاگ</h3>
    <p>مقالات، آموزش‌ها و اخبار دنیای کی‌دی‌ای را به زبان فارسی مطالعه کنید.</p>
  </div>
  <div class="feature-card">
    <h3>💬 انجمن</h3>
    <p>در بحث‌های جامعه شرکت کنید، سوال بپرسید و تجربیات خود را به اشتراک بگذارید.</p>
  </div>
  <div class="feature-card">
    <h3>🧩 توسعه</h3>
    <p>با توسعه‌دهندگان کی‌دی‌ای همکاری کنید و در پروژه‌های متن‌باز مشارکت کنید.</p>
  </div>
  <div class="feature-card">
    <h3>🌍 ترجمه</h3>
    <p>به ترجمه نرم‌افزارها و مستندات کی‌دی‌ای به زبان فارسی کمک کنید.</p>
  </div>
  <div class="feature-card">
    <h3>🎨 شخصی‌سازی</h3>
    <p>با پوسته‌ها، ویجت‌ها و افزونه‌ها، میزکار خود را زیباتر کنید.</p>
  </div>
  <div class="feature-card">
    <h3>📚 مستندات</h3>
    <p>راهنماها و مستندات فارسی کی‌دی‌ای را مطالعه و تکمیل کنید.</p>
  </div>
</div>

---

## جدیدترین نوشته‌ها

جدیدترین مقالات و آموزش‌های کی‌دی‌ای را در [صفحه وبلاگ](/blog) بخوانید.
