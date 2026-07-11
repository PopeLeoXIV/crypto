/* ============================================
   Renders `entries` (from entries.js) into #entries.
   You shouldn't need to touch this file — see
   entries.js to add new writing.
   ============================================ */

(function () {
  const container = document.getElementById("entries");

  if (!Array.isArray(entries) || entries.length === 0) {
    container.innerHTML = '<p class="empty-note">Nothing here yet — the first entry is on its way.</p>';
    return;
  }

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  function formatDate(raw) {
    const d = new Date(raw + "T00:00:00");
    if (isNaN(d)) return raw;
    return dateFormatter.format(d);
  }

  // Splits on blank lines so writers can just leave a gap between paragraphs.
  function paragraphs(text) {
    return text
      .trim()
      .split(/\n\s*\n/)
      .map((p) => `<p>${p.trim().replace(/\n/g, " ")}</p>`)
      .join("");
  }

  // A small hand-drawn pen-stroke, slightly different each render so it
  // never feels like a stamped-out template element.
  function squiggle() {
    const wobble = () => (Math.random() * 4 - 2).toFixed(1);
    return `
      <svg class="squiggle" viewBox="0 0 90 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 7 C 16 ${2 + wobble()}, 26 ${12 + wobble()}, 40 7 S 64 ${1 + wobble()}, 88 7"
          stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      </svg>`;
  }

  const html = entries
    .map((entry, i) => {
      const isLast = i === entries.length - 1;
      return `
        <article class="entry">
          <span class="entry__date">${formatDate(entry.date)}</span>
          <h2 class="entry__title">${entry.title}</h2>
          <div class="entry__body">${paragraphs(entry.body)}</div>
        </article>
        ${isLast ? "" : squiggle()}
      `;
    })
    .join("");

  container.innerHTML = html;
})();
