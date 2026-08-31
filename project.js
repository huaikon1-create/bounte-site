const projects = [
  {
    id: "wind-tide",
    number: "PROJECT 01",
    title: "风起潮鸣",
    subtitle: "WIND & TIDE RESONANCE",
    year: "2026",
    duration: "待补充",
    type: "住宅空间",
    location: "中国义乌",
    scope: "空间设计 / 材料 / 陈设",
    lead: "让空间关系回到生活本身。",
    description: "以流动的弧线连接客餐厅与休憩区域，木、石与柔和织物在自然光中呈现层次，让家的日常拥有松弛而清晰的秩序。",
    tone: "red",
  },
  {
    id: "cloudview",
    number: "PROJECT 02",
    title: "万境观云",
    subtitle: "CLOUDVIEW REALM",
    year: "2026",
    duration: "待补充",
    type: "大平层",
    location: "中国义乌",
    scope: "室内 / 灯光 / 软装",
    lead: "让城市天际成为室内的远景。",
    description: "借城市天际与云层变化组织室内视线，以连续的水平界面展开公共空间，让开阔与安静在同一尺度中共存。",
    tone: "ivory",
  },
  {
    id: "peachland",
    number: "PROJECT 03",
    title: "桃花源",
    subtitle: "PEACHLAND MANOR",
    year: "2025",
    duration: "待补充",
    type: "别墅空间",
    location: "中国义乌",
    scope: "建筑改造 / 室内 / 庭院",
    lead: "让庭院的光、风与植物进入日常。",
    description: "将庭院的光、风与植物引入生活核心，重新梳理上下层关系，使家庭成员在不同场景中保持自然连接。",
    tone: "yellow",
  },
  {
    id: "cloudjade",
    number: "PROJECT 04",
    title: "澐璟",
    subtitle: "CLOUDJADE",
    year: "2025",
    duration: "待补充",
    type: "住宅空间",
    location: "中国金华",
    scope: "空间策略 / 室内 / 陈设",
    lead: "在克制的对比中建立安静气质。",
    description: "深浅石材与温润木作形成克制对比，隐藏式收纳释放完整界面，在细部转折中建立沉静、耐看的居住气质。",
    tone: "black",
  },
  {
    id: "rose-garden",
    number: "PROJECT 05",
    title: "绿城玫瑰园",
    subtitle: "GREENTOWN ROSE GARDEN",
    year: "2025",
    duration: "待补充",
    type: "私宅改造",
    location: "中国义乌",
    scope: "改造 / 室内 / 软装",
    lead: "保留生活记忆，让熟悉的家继续生长。",
    description: "保留原有住宅的生活记忆，通过新的开口、光线与家具尺度改善动线，让熟悉的家重新生长。",
    tone: "rose",
  },
  {
    id: "vista",
    number: "PROJECT 06",
    title: "望品",
    subtitle: "VISTA MANSION",
    year: "2024",
    duration: "待补充",
    type: "大平层",
    location: "中国杭州",
    scope: "空间设计 / 定制家具 / 灯光",
    lead: "用完整视线托起窗外的景观。",
    description: "以一条宽阔视线贯穿公共区域，低矮家具与留白墙面共同托起窗外景观，回应更从容的家庭生活。",
    tone: "blue",
  },
  {
    id: "lotus",
    number: "PROJECT 07",
    title: "荷塘名邸",
    subtitle: "LOTUS MANOR",
    year: "2024",
    duration: "待补充",
    type: "住宅空间",
    location: "中国义乌",
    scope: "室内 / 材料 / 陈设",
    lead: "在开放与私密之间保留柔和弹性。",
    description: "从荷叶的舒展关系中提取空间线索，以轻盈隔断和柔和色泽平衡开放与私密，形成温柔且有韧性的居所。",
    tone: "moss",
  },
  {
    id: "qin-pond",
    number: "PROJECT 08",
    title: "秦塘府",
    subtitle: "QIN POND MANSION",
    year: "2024",
    duration: "待补充",
    type: "住宅改造",
    location: "中国义乌",
    scope: "改造 / 室内 / 收纳系统",
    lead: "从真实习惯出发，重新分配空间尺度。",
    description: "围绕真实居住习惯重新分配尺度，将收纳纳入墙体与转角，让高频日常保持顺手、整洁和长期弹性。",
    tone: "coral",
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

const nextLink = document.querySelector("[data-next-project]");
if (nextLink) nextLink.href = `./project.html?id=${nextProject.id}`;

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
