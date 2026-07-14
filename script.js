const projects = {
  "light-court": {
    index: "PROJECT 01",
    title: "光院居所",
    en: "LIGHT COURT RESIDENCE",
    type: "住宅空间",
    place: "中国义乌",
    scope: "空间设计 / 材料 / 陈设",
    description:
      "以天光为轴重新组织公共区域，让材质的细微变化成为空间里最安静的秩序。居住、阅读与相聚由连续的光线自然连接。",
  },
  "quiet-house": {
    index: "PROJECT 02",
    title: "静宅",
    en: "THE QUIET HOUSE",
    type: "私宅设计",
    place: "中国 · 重庆",
    scope: "空间策略 / 室内 / 软装",
    description:
      "克制的结构、低饱和的材料与深浅交替的界面，让日常活动拥有清晰却不被限定的边界。",
  },
  "grid-home": {
    index: "PROJECT 03",
    title: "格间",
    en: "HOME BETWEEN GRIDS",
    type: "住宅改造",
    place: "中国义乌",
    scope: "改造 / 室内 / 灯光",
    description:
      "从原始柱网出发，将收纳、转角和开口整合为一套连续系统，在有限尺度中建立更自由的生活动线。",
  },
  "axis-apartment": {
    index: "PROJECT 04",
    title: "静轴公寓",
    en: "QUIET AXIS APARTMENT",
    type: "公寓设计",
    place: "中国 · 杭州",
    scope: "室内 / 定制家具 / 陈设",
    description:
      "一条贯穿空间的静默轴线连接起居与休息区域，深色木作和柔和反射共同塑造沉静的居住氛围。",
  },
  "serein-studio": {
    index: "PROJECT 05",
    title: "微雨工作室",
    en: "SEREIN STUDIO",
    type: "创意办公",
    place: "中国义乌",
    scope: "空间设计 / 导视 / 家具",
    description:
      "开放工作区与独立思考空间相互穿插，以蓝色界面和温暖金属作为方向提示，保留自由协作的弹性。",
  },
  "grain-house": {
    index: "PROJECT 06",
    title: "谷物之家",
    en: "GRAIN HOUSE",
    type: "餐饮空间",
    place: "中国义乌",
    scope: "品牌空间 / 室内 / 陈设",
    description:
      "从谷物的质感与自然色泽中提取材料线索，以长桌为核心，形成开放、温暖且适合共同分享的空间。",
  },
};

const dialog = document.querySelector(".project-dialog");
const closeButton = document.querySelector(".dialog-close");
const projectCards = document.querySelectorAll("[data-project]");

function setDialogContent(project) {
  document.querySelector("[data-dialog-index]").textContent = project.index;
  document.querySelector("[data-dialog-title]").textContent = project.title;
  document.querySelector("[data-dialog-en]").textContent = project.en;
  document.querySelector("[data-dialog-type]").textContent = project.type;
  document.querySelector("[data-dialog-place]").textContent = project.place;
  document.querySelector("[data-dialog-scope]").textContent = project.scope;
  document.querySelector("[data-dialog-description]").textContent = project.description;
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    setDialogContent(projects[card.dataset.project]);
    dialog.showModal();
  });
});

document.querySelector("[data-view-all]").addEventListener("click", () => {
  setDialogContent({
    index: "SELECTED PROJECTS",
    title: "朔果作品集",
    en: "BOUNTE SELECTED WORK",
    type: "住宅 / 商业",
    place: "中国",
    scope: "策略 / 空间 / 陈设",
    description:
      "朔果关注空间与真实生活之间的关系。完整项目资料与在建项目可通过邮件联系工作室获取。",
  });
  dialog.showModal();
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
