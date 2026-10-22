const chapters = [
  {
    id: "wanbi",
    number: "第一章",
    title: "完璧歸趙",
    range: "第 1–10 頁",
    mark: "璧",
    color: "#3b2a22",
    lead: "秦王以十五座城換取和氏璧。面對強秦的誘惑與威脅，藺相如用勇氣、判斷與周旋，保全趙國的寶玉與顏面。",
    focus: "看藺相如如何從「判讀局勢」到「設法保璧」；他的勇敢，是有策略的勇敢。",
    original: "秦王聞之，使人遺趙王書，願以十五城請易璧。……相如度秦王雖齋，決負約不償城，乃使其從者衣褐，懷其璧，從徑道亡，歸璧於趙。",
    translation: "秦王願拿十五座城交換和氏璧，但藺相如看出秦王恐怕不會遵守承諾，便暗中派隨從把玉璧帶回趙國。",
    terms: [
      ["遺", "送給、致送。此處指秦王派人送信給趙王。"],
      ["易", "交換。『易璧』就是用城池交換玉璧。"],
      ["度", "推測、估量。相如先判斷秦王的真實意圖。"],
      ["負約", "違背約定。『負』在此有辜負、違背之意。"]
    ],
    think: "如果你是藺相如，你會先公開指責秦王，還是設法拖延時間？請用「目的、風險、後果」說明你的選擇。",
    teacher: "可停在第 4–6 頁，請學生圈出秦王失信的兩個線索。"
  },
  {
    id: "mianchi",
    number: "第二章",
    title: "澠池之會",
    range: "第 11–14 頁",
    mark: "缶",
    color: "#244b45",
    lead: "秦國一再攻趙後邀趙王在澠池相會。藺相如與廉頗分別在外交與軍事上支撐趙國，讓強秦無法任意羞辱趙王。",
    focus: "看文臣與武將如何分工：相如護住宴會上的尊嚴，廉頗穩住邊境的安全。",
    original: "秦王與趙王會飲，令趙王鼓瑟。藺相如前曰：『趙王竊聞秦王善為秦聲，請奉盆缶秦王，以相娛樂。』……相如曰：『五步之內，相如請得以頸血濺大王矣。』",
    translation: "秦王要趙王彈瑟時，藺相如要求秦王也擊缶助興；面對威脅，他寧可冒死，也不讓趙國在禮儀上受辱。",
    terms: [
      ["竊聞", "私下聽聞；古人對尊者說話時常用的謙詞。"],
      ["奉", "恭敬地捧、獻上。『奉盆缶』是請秦王接受缶。"],
      ["缶", "古代瓦器，可盛物，也可擊打作樂。"],
      ["頸血濺", "以生命威脅的強烈說法，顯示相如不惜一死的決心。"]
    ],
    think: "相如冒生命危險爭取『擊缶』，是為了面子，還是為了國家的尊嚴？兩者有何不同？",
    teacher: "可先讓兩組學生分別扮演相如與廉頗，說明自己守護趙國的方式。"
  },
  {
    id: "fujing",
    number: "第三章",
    title: "負荊請罪",
    range: "第 15–18 頁",
    mark: "荊",
    color: "#7a3328",
    lead: "澠池之會後，藺相如位在廉頗之上。廉頗不服，相如卻屢次避讓；直到廉頗理解相如的用心，兩人終於化解嫌隙。",
    focus: "看『退讓』背後的價值判斷：相如不是怕廉頗，而是不願讓內鬥傷害趙國。",
    original: "相如曰：『強秦之所以不敢加兵於趙者，徒以吾兩人在也。今兩虎共鬥，其勢不俱生。吾所以為此者，以先國家之急而後私讎也。』……廉頗肉袒負荊，因賓客至藺相如門謝罪。卒相與歡，為刎頸之交。",
    translation: "相如說，秦國不敢輕易攻趙，是因為趙國有他與廉頗；若兩人互相爭鬥，反而會讓國家受傷。因此他先考量國家危急，再處理私人恩怨。廉頗明白後裸露上身、背著荊條登門道歉，兩人成為生死相託的朋友。",
    terms: [
      ["加兵", "用兵攻打。『不敢加兵於趙』即不敢攻趙。"],
      ["私讎", "私人仇怨。『讎』通『仇』。"],
      ["肉袒", "裸露上身，古代表示請罪或謝罪。"],
      ["刎頸之交", "可以共生死的朋友，形容交情極深。"]
    ],
    think: "當你被誤解或不被尊重時，何時該堅持、何時可暫時退讓？判斷的基準可以是什麼？",
    teacher: "可把第 17 頁的『兩虎共鬥』比喻投影出來，請學生用自己的話解釋它。"
  }
];

const pages = [
  ["秦書求璧", "秦王以十五城求換和氏璧，趙國面對一場看似有利、實則危險的交易。", 0], ["慧眼薦賢", "繆賢推薦舍人藺相如，趙王決定召見這位有膽識的使者。", 0], ["奉璧入秦", "藺相如主動出使，承諾若秦國失信，必使寶璧完整歸趙。", 0], ["持璧抗秦", "相如看穿秦王只想玩玉、無意交城，持璧據柱以死相抗。", 0], ["巧設緩兵", "相如要求秦王齋戒、設九賓大禮，為送璧回趙爭取時間。", 0], ["完璧歸趙", "相如暗遣隨從帶璧走小路返趙，和氏璧終於安全回國。", 0], ["九賓召見", "九賓大禮備妥，秦王質問和氏璧的去處。", 0], ["請王熟議", "相如說明秦國曾多次失信，反請秦王與群臣慎重商議。", 0], ["厚遇歸趙", "秦王衡量利害後，以厚禮送相如離秦，避免衝突擴大。", 0], ["不辱使命", "相如平安回趙，趙王封他為上大夫；秦趙都沒有交出承諾中的十五城與和氏璧。", 0],
  ["風雲再起", "秦國攻趙後，邀趙王在澠池相會。廉頗與相如都主張不能示弱。", 1], ["澠池設宴", "廉頗安排退守之策；宴會上，秦王要趙王鼓瑟。", 1], ["缶前爭衡", "相如要求秦王擊缶，堅持在兩國禮儀上維持對等。", 1], ["文武護國", "相如護住趙國禮儀，廉頗守住趙國邊防，秦軍不敢妄動。", 1],
  ["澠池封卿", "趙王嘉獎相如，讓他的位次在廉頗之上，新的衝突悄悄開始。", 2], ["避讓風波", "面對廉頗的憤怒與車馬，相如選擇避讓，引發賓客不解。", 2], ["先國後私", "相如說明：兩虎相鬥只會讓秦國有機可乘，應先顧國家安危。", 2], ["負荊交心", "廉頗背荊請罪，兩人終成刎頸之交，共同守護趙國。", 2]
].map(([title, caption, chapter], index) => ({ page: index + 1, title, caption, src: `./assets/pages/page-${String(index + 1).padStart(2, "0")}.jpg`, chapter }));

const state = { page: 0, tab: "guide" };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderChapterCards() {
  $("#chapter-cards").innerHTML = chapters.map((chapter, index) => `
    <article class="chapter-card" data-mark="${chapter.mark}" style="--chapter-bg:${chapter.color}">
      <div><p class="chapter-number">${chapter.number}　${chapter.range}</p><h3>${chapter.title}</h3><p>${chapter.lead}</p></div>
      <button type="button" data-page="${pages.findIndex((page) => page.chapter === index)}">進入本章閱讀　→</button>
    </article>
  `).join("");
}

function renderChapterList() {
  $("#chapter-list").innerHTML = chapters.map((chapter, index) => `
    <button class="chapter-nav-item" type="button" data-chapter="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span><strong>${chapter.title}</strong>
    </button>
  `).join("");
}

function renderPageDots() {
  $("#page-dots").innerHTML = pages.map((page, index) => `
    <button class="page-dot ${index === state.page ? "is-active" : ""}" type="button" data-page="${index}" aria-label="前往第 ${page.page} 頁" aria-current="${index === state.page ? "page" : "false"}">${page.page}</button>
  `).join("");
}

function renderLearning() {
  const chapter = chapters[pages[state.page].chapter];
  const content = $("#learning-content");
  const entries = {
    guide: `
      <h3>${chapter.title}</h3>
      <p class="learning-lead">${chapter.focus}</p>
      <div class="think-card"><strong>這一章要追問：</strong><br />${chapter.think}</div>
    `,
    text: `
      <h3>文言節選</h3>
      <p class="text-excerpt">${chapter.original}</p>
      <p class="translation"><strong>白話提示：</strong>${chapter.translation}</p>
    `,
    vocab: `
      <h3>重點字詞</h3>
      <div class="term-list">${chapter.terms.map(([term, definition]) => `<div><strong>${term}</strong><span>${definition}</span></div>`).join("")}</div>
    `,
    think: `
      <h3>停下來想一想</h3>
      <div class="think-card">${chapter.think}</div>
      <p class="learning-lead">試著先提出一個立場，再從漫畫情節或原文節選找出至少一個證據。</p>
    `
  };
  content.innerHTML = entries[state.tab];
}

function setPage(index, shouldScroll = false) {
  state.page = Math.max(0, Math.min(index, pages.length - 1));
  const page = pages[state.page];
  const chapter = chapters[page.chapter];
  const image = $("#comic-image");
  image.src = page.src;
  image.alt = `《完璧歸趙》漫畫第 ${page.page} 頁：${page.title}`;
  $("#dialog-image").src = page.src;
  $("#dialog-image").alt = image.alt;
  $("#dialog-title").textContent = `第 ${page.page} 頁・${page.title}`;
  $("#page-chapter").textContent = `${chapter.number}・${chapter.title}`;
  $("#page-title").textContent = `第 ${page.page} 頁・${page.title}`;
  $("#page-caption").textContent = page.caption;
  $("#progress-label").textContent = `第 ${page.page} / ${pages.length} 頁`;
  $("#reading-progress").value = page.page;
  $("#drawer-chapter").textContent = chapter.title;
  $("#prev-page").disabled = state.page === 0;
  $("#next-page").disabled = state.page === pages.length - 1;
  $$(".chapter-nav-item").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.chapter) === page.chapter));
  renderPageDots();
  renderLearning();
  if (shouldScroll) $("#reader").scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");
    if (pageButton) setPage(Number(pageButton.dataset.page), true);
    const chapterButton = event.target.closest("[data-chapter]");
    if (chapterButton) setPage(pages.findIndex((page) => page.chapter === Number(chapterButton.dataset.chapter)), true);
  });
  $("#prev-page").addEventListener("click", () => setPage(state.page - 1));
  $("#next-page").addEventListener("click", () => setPage(state.page + 1));
  document.addEventListener("keydown", (event) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (event.key === "ArrowLeft") setPage(state.page - 1);
    if (event.key === "ArrowRight") setPage(state.page + 1);
  });
}

function bindTabs() {
  $$(".drawer-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      $$(".drawer-tab").forEach((tab) => {
        const active = tab === button;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      renderLearning();
    });
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

function bindPrintGuide() {
  $("#print-guide").addEventListener("click", () => window.print());
}

function bindQuiz() {
  const form = $("#quiz-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let correct = 0;
    let complete = 0;
    $$("#quiz-form fieldset").forEach((fieldset) => {
      const selected = fieldset.querySelector("input:checked");
      fieldset.classList.remove("is-correct", "is-wrong", "is-unanswered");
      fieldset.querySelectorAll("label").forEach((label) => label.classList.remove("is-answer"));
      fieldset.querySelector(".answer-key")?.remove();
      if (selected) {
        complete += 1;
      } else {
        fieldset.classList.add("is-unanswered");
      }
    });
    if (complete < 3) {
      $("#quiz-result").textContent = `還有 ${3 - complete} 題尚未作答；完成後可查看正確答案與解析。`;
      return;
    }
    $$("#quiz-form fieldset").forEach((fieldset) => {
      const selected = fieldset.querySelector("input:checked");
      const correctInput = fieldset.querySelector(`input[value="${fieldset.dataset.answer}"]`);
      const isCorrect = selected.value === fieldset.dataset.answer;
      fieldset.classList.remove("is-unanswered");
      fieldset.classList.add(isCorrect ? "is-correct" : "is-wrong");
      correctInput.closest("label").classList.add("is-answer");
      const answerKey = document.createElement("p");
      answerKey.className = "answer-key";
      answerKey.textContent = `正確答案：${correctInput.closest("label").textContent.trim()}`;
      fieldset.append(answerKey);
      if (isCorrect) correct += 1;
    });
    $("#quiz-result").textContent = `完成！你答對 ${correct} / 3 題。`;
  });
  $("#reset-quiz").addEventListener("click", () => {
    form.reset();
    $$("#quiz-form fieldset").forEach((fieldset) => {
      fieldset.classList.remove("is-correct", "is-wrong", "is-unanswered");
      fieldset.querySelectorAll("label").forEach((label) => label.classList.remove("is-answer"));
      fieldset.querySelector(".answer-key")?.remove();
    });
    $("#quiz-result").textContent = "";
  });
}

renderChapterCards();
renderChapterList();
bindNavigation();
bindTabs();
bindDialog();
bindPrintGuide();
bindQuiz();
setPage(0);
