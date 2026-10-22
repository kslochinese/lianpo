const chapters = [
  { number: "第一章", title: "完璧歸趙", range: "第 1–10 頁", start: 0 },
  { number: "第二章", title: "澠池之會", range: "第 11–14 頁", start: 10 },
  { number: "第三章", title: "負荊請罪", range: "第 15–18 頁", start: 14 }
];

const pages = [
  ["秦書求璧", 0], ["慧眼薦賢", 0], ["奉璧入秦", 0], ["持璧抗秦", 0], ["巧設緩兵", 0],
  ["完璧歸趙", 0], ["九賓召見", 0], ["請王熟議", 0], ["厚遇歸趙", 0], ["不辱使命", 0],
  ["風雲再起", 1], ["澠池設宴", 1], ["缶前爭衡", 1], ["文武護國", 1],
  ["澠池封卿", 2], ["避讓風波", 2], ["先國後私", 2], ["負荊交心", 2]
].map(([title, chapter], index) => ({
  page: index + 1,
  title,
  chapter,
  src: `./assets/pages/page-${String(index + 1).padStart(2, "0")}.jpg`
}));

const state = { page: 0 };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderChapterList() {
  $("#chapter-list").innerHTML = chapters.map((chapter, index) => `
    <button class="chapter-nav-item" type="button" data-chapter="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${chapter.title}<small>${chapter.range}</small></strong>
    </button>
  `).join("");
}

function renderPageDots() {
  $("#page-dots").innerHTML = pages.map((page, index) => `
    <button class="page-dot ${index === state.page ? "is-active" : ""}" type="button" data-page="${index}" aria-label="前往第 ${page.page} 頁" aria-current="${index === state.page ? "page" : "false"}">${page.page}</button>
  `).join("");
}

function setPage(index, shouldScroll = false) {
  state.page = Math.max(0, Math.min(index, pages.length - 1));
  const page = pages[state.page];
  const chapter = chapters[page.chapter];
  const image = $("#comic-image");
  image.src = page.src;
  image.alt = `《廉頗藺相如列傳》漫畫第 ${page.page} 頁：${page.title}`;
  $("#dialog-image").src = page.src;
  $("#dialog-image").alt = image.alt;
  $("#dialog-title").textContent = `第 ${page.page} 頁・${page.title}`;
  $("#page-chapter").textContent = `${chapter.number}・${chapter.title}`;
  $("#page-title").textContent = `第 ${page.page} 頁・${page.title}`;
  $("#progress-label").textContent = `第 ${page.page} / ${pages.length} 頁`;
  $("#reading-progress").value = page.page;
  $("#prev-page").disabled = state.page === 0;
  $("#next-page").disabled = state.page === pages.length - 1;
  $$(".chapter-nav-item").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.chapter) === page.chapter));
  renderPageDots();
  if (shouldScroll) $("#reader").scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (pageButton) setPage(Number(pageButton.dataset.page), true);
    const chapterButton = event.target.closest("[data-chapter]");
    if (chapterButton) setPage(chapters[Number(chapterButton.dataset.chapter)].start, true);
  });
  $("#prev-page").addEventListener("click", () => setPage(state.page - 1));
  $("#next-page").addEventListener("click", () => setPage(state.page + 1));
  document.addEventListener("keydown", (event) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (event.key === "ArrowLeft") setPage(state.page - 1);
    if (event.key === "ArrowRight") setPage(state.page + 1);
  });
}

function bindDialog() {
  const dialog = $("#comic-dialog");
  const open = () => dialog.showModal();
  $("#image-zoom").addEventListener("click", open);
  $("#full-view").addEventListener("click", open);
  $("#dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

renderChapterList();
bindNavigation();
bindDialog();
setPage(0);
