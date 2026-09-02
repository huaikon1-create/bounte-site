const projects = [
  {
    id: "wind-tide",
    number: "PROJECT 01",
    title: "万境观云",
    subtitle: "WANJING GUANYUN",
    year: "2026",
    duration: "待补充",
    type: "住宅空间",
    location: "中国义乌",
    scope: "空间设计 / 材料 / 陈设",
    lead: "让空间关系回到生活本身。",
    description: "以流动的弧线连接客餐厅与休憩区域，木、石与柔和织物在自然光中呈现层次，让家的日常拥有松弛而清晰的秩序。",
    tone: "red",
    media: { hero: "./image/cases/wanjing/02.jpg", effects: ["./image/cases/wanjing/01.jpg", "./image/cases/wanjing/03.jpg", "./image/cases/wanjing/04.jpg", "./image/cases/wanjing/05.jpg"] },
  },
  {
    id: "cloudview",
    number: "PROJECT 02",
    title: "中兴花园",
    subtitle: "ZHONGXING GARDEN",
    year: "2026",
    duration: "待补充",
    type: "大平层",
    location: "中国义乌",
    scope: "室内 / 灯光 / 软装",
    lead: "让城市天际成为室内的远景。",
    description: "借城市天际与云层变化组织室内视线，以连续的水平界面展开公共空间，让开阔与安静在同一尺度中共存。",
    tone: "ivory",
    media: { hero: "./image/cases/zhongxing/03.jpg", effects: ["./image/cases/zhongxing/01.jpg", "./image/cases/zhongxing/02.jpg", "./image/cases/zhongxing/04.jpg"] },
  },
  {
    id: "peachland",
    number: "PROJECT 03",
    title: "全备三区",
    subtitle: "QUANBEI DISTRICT THREE",
    year: "2025",
    duration: "待补充",
    type: "别墅空间",
    location: "中国义乌",
    scope: "建筑改造 / 室内 / 庭院",
    lead: "让庭院的光、风与植物进入日常。",
    description: "将庭院的光、风与植物引入生活核心，重新梳理上下层关系，使家庭成员在不同场景中保持自然连接。",
    tone: "yellow",
    media: { hero: "./image/cases/quanbei3/01.jpg", effects: ["./image/cases/quanbei3/02.jpg", "./image/cases/quanbei3/03.jpg", "./image/cases/quanbei3/04.jpg"] },
  },
  {
    id: "cloudjade",
    number: "PROJECT 04",
    title: "全备二区",
    subtitle: "QUANBEI DISTRICT TWO",
    year: "2025",
    duration: "待补充",
    type: "住宅空间",
    location: "中国金华",
    scope: "空间策略 / 室内 / 陈设",
    lead: "在克制的对比中建立安静气质。",
    description: "深浅石材与温润木作形成克制对比，隐藏式收纳释放完整界面，在细部转折中建立沉静、耐看的居住气质。",
    tone: "black",
    media: { hero: "./image/cases/quanbei2/03.jpg", effects: ["./image/cases/quanbei2/01.jpg", "./image/cases/quanbei2/02.jpg", "./image/cases/quanbei2/04.jpg"] },
  },
  {
    id: "rose-garden",
    number: "PROJECT 05",
    title: "桃李春风",
    subtitle: "TAOLI SPRING BREEZE",
    year: "2025",
    duration: "待补充",
    type: "私宅改造",
    location: "中国义乌",
    scope: "改造 / 室内 / 软装",
    lead: "保留生活记忆，让熟悉的家继续生长。",
    description: "保留原有住宅的生活记忆，通过新的开口、光线与家具尺度改善动线，让熟悉的家重新生长。",
    tone: "rose",
    media: { hero: "./image/cases/taoli/07.jpg", effects: ["./image/cases/taoli/01.jpg", "./image/cases/taoli/02.jpg", "./image/cases/taoli/03.jpg", "./image/cases/taoli/04.jpg", "./image/cases/taoli/05.jpg", "./image/cases/taoli/06.jpg"] },
  },
  {
    id: "vista",
    number: "PROJECT 06",
    title: "福田印象",
    subtitle: "FUTIAN IMPRESSION",
    year: "2024",
    duration: "待补充",
    type: "大平层",
    location: "中国杭州",
    scope: "空间设计 / 定制家具 / 灯光",
    lead: "用完整视线托起窗外的景观。",
    description: "以一条宽阔视线贯穿公共区域，低矮家具与留白墙面共同托起窗外景观，回应更从容的家庭生活。",
    tone: "blue",
    media: { hero: "./image/cases/futian/04.jpg", effects: ["./image/cases/futian/01.jpg", "./image/cases/futian/02.jpg", "./image/cases/futian/03.jpg"] },
  },
  {
    id: "lotus",
    number: "PROJECT 07",
    title: "秦塘名邸",
    subtitle: "QINTANG MANSION",
    year: "2024",
    duration: "待补充",
    type: "住宅空间",
    location: "中国义乌",
    scope: "室内 / 材料 / 陈设",
    lead: "在开放与私密之间保留柔和弹性。",
    description: "从荷叶的舒展关系中提取空间线索，以轻盈隔断和柔和色泽平衡开放与私密，形成温柔且有韧性的居所。",
    tone: "moss",
    media: { hero: "./image/cases/qintang/03.jpg", effects: ["./image/cases/qintang/01.jpg", "./image/cases/qintang/02.jpg", "./image/cases/qintang/04.jpg", "./image/cases/qintang/05.jpg", "./image/cases/qintang/06.jpg", "./image/cases/qintang/07.jpg", "./image/cases/qintang/08.jpg"] },
  },
  {
    id: "qin-pond",
    number: "PROJECT 08",
    title: "紫金城品",
    subtitle: "ZIJIN CITY",
    year: "2024",
    duration: "待补充",
    type: "住宅改造",
    location: "中国义乌",
    scope: "改造 / 室内 / 收纳系统",
    lead: "从真实习惯出发，重新分配空间尺度。",
    description: "围绕真实居住习惯重新分配尺度，将收纳纳入墙体与转角，让高频日常保持顺手、整洁和长期弹性。",
    tone: "coral",
    media: { hero: "./image/cases/zijincheng/04.jpg", effects: ["./image/cases/zijincheng/01.jpg", "./image/cases/zijincheng/02.jpg", "./image/cases/zijincheng/03.jpg", "./image/cases/zijincheng/05.jpg", "./image/cases/zijincheng/06.jpg"] },
  },
  {
    id: "run-court",
    number: "PROJECT 09",
    title: "华润润府",
    subtitle: "CR RUN COURT",
    year: "2023",
    duration: "待补充",
    type: "精装改造",
    location: "中国杭州",
    scope: "精装优化 / 软装 / 灯光",
    lead: "用精准的局部更新改变整体生活感受。",
    description: "在既有精装基础上调整材质、光环境与家具比例，以精准的局部更新获得更完整、更符合主人气质的生活场景。",
    tone: "silver",
  },
  {
    id: "riverside",
    number: "PROJECT 10",
    title: "滨江一品",
    subtitle: "RIVERSIDE PRIME",
    year: "2023",
    duration: "待补充",
    type: "江景住宅",
    location: "中国金华",
    scope: "室内 / 定制家具 / 陈设",
    lead: "让四季光线成为居室里的主角。",
    description: "将江景作为空间最重要的背景，控制界面色彩与陈设高度，使四季光线成为居室中不断变化的主角。",
    tone: "cobalt",
  },
  {
    id: "spring-breeze",
    number: "PROJECT 11",
    title: "桃李春风",
    subtitle: "SPRING BREEZE MANOR",
    year: "2022",
    duration: "待补充",
    type: "别墅空间",
    location: "中国义乌",
    scope: "建筑优化 / 室内 / 庭院",
    lead: "让庭院与家庭共处成为空间核心。",
    description: "以庭院和家庭共处为核心重构空间，天然材料随时间留下温润痕迹，让居所能够陪伴生活持续成熟。",
    tone: "clay",
  },
];

const requestedId = new URLSearchParams(window.location.search).get("id");
const projectIndex = Math.max(0, projects.findIndex((project) => project.id === requestedId));
const project = projects[projectIndex];
const nextProject = projects[(projectIndex + 1) % projects.length];

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

setText("[data-project-number]", project.number);
setText("[data-project-title]", project.title);
setText("[data-project-subtitle]", project.subtitle);
setText("[data-project-name]", project.title);
setText("[data-project-year]", project.year);
setText("[data-project-duration]", project.duration);
setText("[data-project-type]", project.type);
setText("[data-project-location]", project.location);
setText("[data-project-scope]", project.scope);
setText("[data-project-lead]", project.lead);
setText("[data-project-description]", project.description);
setText("[data-next-project-title]", nextProject.title);

document.body.dataset.projectTone = project.tone;
document.title = `${project.title} | 朔果 · Bounte`;

const createMediaImage = (src, alt, onLoad) => {
  const image = document.createElement("img");
  image.alt = alt;
  image.loading = "lazy";
  image.decoding = "async";
  image.className = "project-media-image";
  if (onLoad) {
    image.addEventListener("load", () => onLoad(image.naturalWidth / image.naturalHeight), { once: true });
  }
  image.src = src;
  return image;
};

const heroMedia = document.querySelector("[data-project-hero-media]");
if (heroMedia && project.media?.hero) {
  heroMedia.replaceChildren(createMediaImage(project.media.hero, `${project.title} 项目主效果图`));
}

const effectsMedia = document.querySelector("[data-project-effects-media]");
if (effectsMedia && project.media?.effects) {
  const effectFigures = project.media.effects.map((src, index) => {
    const figure = document.createElement("figure");
    figure.className = "project-media-slot";
    const image = createMediaImage(src, `${project.title} 项目效果图 ${index + 1}`);
    image.loading = "eager";
    figure.append(image);
    return { figure, image, index };
  });

  effectsMedia.replaceChildren(...effectFigures.map(({ figure }) => figure));

  // Wait for dimensions so horizontal images can lead the gallery without cropping.
  Promise.all(effectFigures.map(({ image }) => new Promise((resolve) => {
    if (image.complete) {
      resolve();
      return;
    }
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  }))).then(() => {
    const horizontalFirst = [...effectFigures].sort((a, b) => {
      const aWide = a.image.naturalWidth / a.image.naturalHeight >= 1.2;
      const bWide = b.image.naturalWidth / b.image.naturalHeight >= 1.2;
      return Number(bWide) - Number(aWide) || a.index - b.index;
    });

    horizontalFirst.forEach(({ figure, image }) => {
      figure.classList.toggle("project-media-wide", image.naturalWidth / image.naturalHeight >= 1.2);
    });
    effectsMedia.replaceChildren(...horizontalFirst.map(({ figure }) => figure));
  });
}

const nextLink = document.querySelector("[data-next-project]");
if (nextLink) nextLink.href = `./project.html?id=${nextProject.id}`;

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
