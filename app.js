'use strict';

const announce = (text) => {
  const status = document.getElementById('status-message');
  if (status) status.textContent = text;
};

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('aria-label', 'Prompt to copy');
    textarea.style.cssText = 'position:fixed;top:0;left:-9999px;';
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) throw new Error('Copy unavailable');
  }
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  const label = button.querySelector('span');
  button.addEventListener('click', async () => {
    try {
      await copyText(button.dataset.copy);
      label.textContent = 'Copied ✓';
      button.classList.add('is-copied');
      announce('Prompt copied to clipboard.');
      clearTimeout(button.copyReset);
      button.copyReset = setTimeout(() => {
        label.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 2400);
    } catch {
      label.textContent = 'Select text to copy';
      announce('Copy is unavailable in this browser. Select and copy the prompt text.');
    }
  });
});

function updateSteps() {
  for (const demo of [1, 2]) {
    const checks = [...document.querySelectorAll(`[data-step^="demo-${demo}-"]`)];
    checks.forEach((check) => check.closest('tr').classList.toggle('is-complete', check.checked));
    const counter = document.querySelector(`[data-counter="${demo}"]`);
    if (counter) counter.textContent = `${checks.filter((check) => check.checked).length} / ${checks.length} steps`;
  }
}

document.querySelectorAll('[data-step]').forEach((check) => {
  const key = `dku-workshop-v2:${check.dataset.step}`;
  try { check.checked = localStorage.getItem(key) === 'true'; } catch { /* Progress still works without storage. */ }
  check.addEventListener('change', () => {
    try { localStorage.setItem(key, String(check.checked)); } catch { /* Storage may be disabled. */ }
    updateSteps();
  });
});
updateSteps();

document.querySelectorAll('[data-open]').forEach((link) => {
  link.addEventListener('click', () => {
    const details = document.getElementById(link.dataset.open);
    if (details) details.open = true;
  });
});

// Use bundled file bytes synchronously: no fetch, path proxy, or lost click activation.
document.querySelectorAll('a[download]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const label = link.querySelector('span');
    if (label) {
      label.dataset.downloadLabel ||= label.textContent;
      label.textContent = label.dataset.downloadLabel;
    }
    try {
      const key = link.getAttribute('href');
      const data = window.WORKSHOP_DOWNLOADS[key];
      if (!data) throw new Error(`Missing download data: ${key}`);
      const bytes = Uint8Array.from(atob(data), (character) => character.charCodeAt(0));
      const blob = new Blob([bytes], { type: 'application/octet-stream' });
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = objectUrl;
      anchor.download = link.getAttribute('download');
      anchor.hidden = true;
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
      announce(`${link.getAttribute('download')} downloaded.`);
    } catch (error) {
      console.error('Download could not start:', error);
      if (label) label.textContent = 'Retry download';
      announce('Download could not start. Please refresh this page and try again.');
    }
  });
});

// Pre-rendered documents keep Preview and Raw views usable without a CDN or fetch.
document.querySelectorAll('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const raw = button.dataset.view === 'raw';
    document.getElementById('document-content').hidden = raw;
    document.getElementById('raw-content').hidden = !raw;
    document.querySelector('.document-toc').hidden = raw;
    document.querySelector('.document-layout').classList.toggle('is-raw', raw);
    document.querySelectorAll('[data-view]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
});

document.querySelectorAll('.markdown-body table').forEach((table) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'markdown-table-scroll';
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', 'Scrollable reference table');
  table.before(wrapper);
  wrapper.append(table);
});

// External resources open independently of the workshop's current practice step.
document.querySelectorAll('a[href^="https://"]').forEach((link) => {
  if (link.hasAttribute('download')) return;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
