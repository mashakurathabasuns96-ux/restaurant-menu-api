// public/js/main.js
const output = document.getElementById('output');
const btnAll = document.getElementById('btn-all');
const btnVeg = document.getElementById('btn-veg');
const btnCats = document.getElementById('btn-cats');

btnAll.addEventListener('click', async () => {
  clearOutput();
  showLoading();
  try {
    const res = await fetch('/menu');
    if (!res.ok) throw new Error('Failed to fetch menu');
    const data = await res.json();
    renderMenuItems(data);
  } catch (err) {
    showError(err.message);
  }
});

btnVeg.addEventListener('click', async () => {
  clearOutput();
  showLoading();
  try {
    const res = await fetch('/menu/vegetarian');
    if (!res.ok) throw new Error('Failed to fetch vegetarian menu');
    const data = await res.json();
    renderMenuItems(data);
  } catch (err) {
    showError(err.message);
  }
});

btnCats.addEventListener('click', async () => {
  clearOutput();
  showLoading();
  try {
    const res = await fetch('/menu/categories');
    if (!res.ok) throw new Error('Failed to fetch categories');
    const { categories } = await res.json();
    renderCategories(categories);
  } catch (err) {
    showError(err.message);
  }
});

function clearOutput() {
  output.innerHTML = '';
}

function showLoading() {
  output.innerHTML = `<p class="hint">Loading…</p>`;
}

function showError(msg) {
  output.innerHTML = `<p class="hint">Error: ${escapeHtml(msg)}</p>`;
}

function renderMenuItems(items) {
  if (!items || items.length === 0) {
    output.innerHTML = `<p class="hint">No items to display.</p>`;
    return;
  }
  output.innerHTML = '';
  items.forEach(it => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="left">
        <h3 class="item-name">${escapeHtml(it.name)}</h3>
        <div class="item-meta">${escapeHtml(it.description)}</div>
        <div style="margin-top:8px;color:var(--muted);font-size:13px">
          Category: ${escapeHtml(it.category)}
        </div>
      </div>
      <div style="text-align:right">
        <div style="margin-bottom:8px">
          ${it.isVegetarian ? '<span class="badge">VEG</span>' : '<span class="badge nonveg">NON-VEG</span>'}
        </div>
        <div class="price">₹ ${Number(it.price).toFixed(0)}</div>
      </div>
    `;
    output.appendChild(div);
  });
}

function renderCategories(categories) {
  if (!categories || categories.length === 0) {
    output.innerHTML = `<p class="hint">No categories found.</p>`;
    return;
  }
  output.innerHTML = '';
  categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'category';
    div.innerHTML = `<strong>${escapeHtml(cat.name)}</strong> — ${escapeHtml(String(cat.itemCount))} item(s)`;
    output.appendChild(div);
  });
}

// simple helper to avoid XSS when inserting text
function escapeHtml(unsafe) {
  return String(unsafe)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
