document.addEventListener('DOMContentLoaded', () => {
    const jalali = (date, opts = {}) =>
        new Intl.DateTimeFormat('fa-IR', { calendar: 'persian', ...opts }).format(date);

    const parseDate = (str) => {
        const d = new Date(str.trim());
        return isNaN(d.getTime()) ? null : d;
    };

    // Convert <time datetime="..."> — replaces text content with Jalali date
    document.querySelectorAll('time[datetime]').forEach((el) => {
        const date = parseDate(el.getAttribute('datetime'));
        if (!date) return;
        el.textContent = jalali(date, { year: 'numeric', month: 'long', day: 'numeric' });
    });

    // Convert archive year headers: .timeline-year
    document.querySelectorAll('.timeline-year').forEach((el) => {
        const year = parseInt(el.textContent, 10);
        if (isNaN(year)) return;
        // Approximate: use June 15 of that year as a reference point
        const date = parseDate(`${year}-06-15`);
        if (!date) return;
        el.textContent = jalali(date, { year: 'numeric' });
    });

    // Convert archive timeline dates when they lack datetime but are inside a timeline-row
    document.querySelectorAll('.timeline-date:not([datetime])').forEach((el) => {
        // The parent <a> links to the post; the date is in the .timeline-date text as "MM-DD"
        // Skip if JS conversion is not possible without a year context.
        // Try to find a sibling or ancestor with a data attribute or rely on the itemprop.
        // In our archive template, these will now have datetime attributes from the template fix.
    });
});
