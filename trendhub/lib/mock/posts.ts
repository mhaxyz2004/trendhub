import type { CategorySlug } from "./categories";

export interface Post {
  id: string;
  category: CategorySlug;
  title_fa: string;
  title_en: string;
  summary_fa: string;
  summary_en: string;
  body_fa: string[];
  body_en: string[];
  image: string;
  source: string;
  created_at: string;
  likes: number;
  commentsCount: number;
  trendScore: number;
  trending: boolean;
  tags_fa: string[];
  tags_en: string[];
  readMinutes: number;
  featured?: boolean;
}

export const posts: Post[] = [
  // ---------------- AI ----------------
  {
    id: "ai-orion-r2",
    category: "ai",
    title_fa: "مدل «اوریون R2» رکورد استدلال ریاضی را جابه‌جا کرد",
    title_en: "Orion R2 model shatters math-reasoning benchmarks",
    summary_fa:
      "نسخه تازه مدل استدلالی اوریون توانست در آزمون‌های سطح المپیاد ریاضی، از میانگین عملکرد انسانی فراتر برود و بحث‌های تازه‌ای درباره سقف توانایی مدل‌های زبانی به راه انداخت.",
    summary_en:
      "The new Orion reasoning model topped olympiad-level math benchmarks, edging past average human performance and reigniting debate over how far language models can push abstract reasoning.",
    body_fa: [
      "آزمایشگاه توسعه‌دهنده اوریون امروز نسخه R2 را معرفی کرد؛ مدلی که روی مجموعه‌ای از مسائل استدلالی چندمرحله‌ای آموزش دیده و در آزمون‌های استاندارد ریاضی امتیازی نزدیک به برترین شرکت‌کنندگان انسانی کسب کرده است.",
      "بر اساس گزارش داخلی منتشرشده، بهبود اصلی نه از افزایش اندازه مدل، بلکه از روش تازه‌ای در آموزش زنجیره تفکر و بازبینی خودکار پاسخ‌ها پیش از ارائه خروجی نهایی حاصل شده است. این رویکرد باعث شده مدل بتواند اشتباهات محاسباتی خود را در میانه مسیر تشخیص داده و اصلاح کند.",
      "با این حال برخی پژوهشگران مستقل هشدار داده‌اند که عملکرد قوی در آزمون‌های استاندارد لزوماً به معنای تعمیم‌پذیری در مسائل باز و دنیای واقعی نیست، و خواستار انتشار جزئیات بیشتری از داده‌های آموزشی شده‌اند.",
      "شرکت‌های رقیب نیز اعلام کرده‌اند که در ماه‌های آینده مدل‌های مشابهی با تمرکز بر استدلال علمی و کدنویسی عرضه خواهند کرد، روندی که نشان می‌دهد رقابت در حوزه استدلال به مرحله تازه‌ای رسیده است.",
    ],
    body_en: [
      "The lab behind Orion unveiled the R2 model today, trained on a curated set of multi-step reasoning problems and scoring close to top human competitors on standardized math olympiad benchmarks.",
      "According to an internal report, the core gain didn't come from scaling parameters but from a new chain-of-thought training method paired with an automatic self-review pass before the model commits to a final answer, letting it catch and fix arithmetic slips mid-solution.",
      "Independent researchers caution that strong benchmark scores don't necessarily translate to open-ended, real-world reasoning, and are calling for more transparency around the training data mix.",
      "Rival labs have signaled similar reasoning-focused releases in the coming months, suggesting the reasoning race has entered a new, more competitive phase.",
    ],
    image: "https://picsum.photos/seed/ai-orion/1200/700",
    source: "AI Weekly",
    created_at: "2026-07-05T08:15:00Z",
    likes: 4210,
    commentsCount: 312,
    trendScore: 98,
    trending: true,
    tags_fa: ["هوش مصنوعی", "مدل زبانی", "استدلال"],
    tags_en: ["AI", "LLM", "Reasoning"],
    readMinutes: 4,
    featured: true,
  },
  {
    id: "ai-copilot-agents",
    category: "ai",
    title_fa: "عامل‌های هوشمند جدید می‌توانند کل یک پروژه نرم‌افزاری را مدیریت کنند",
    title_en: "New autonomous coding agents can now manage an entire software project",
    summary_fa:
      "نسل تازه‌ای از ابزارهای دستیار برنامه‌نویسی معرفی شده‌اند که نه‌تنها کد می‌نویسند، بلکه می‌توانند تیکت‌ها را اولویت‌بندی کرده، تست بنویسند و پول ریکوئست ثبت کنند.",
    summary_en:
      "A new generation of coding-agent tools can prioritize tickets, write tests and open pull requests on their own, without a human writing a single line first.",
    body_fa: [
      "چند شرکت به‌طور هم‌زمان از ابزارهایی رونمایی کردند که به آن‌ها «عامل توسعه» می‌گویند؛ سامانه‌هایی که می‌توانند یک تیکت باگ را بخوانند، در کدبیس جست‌وجو کنند، راه‌حل پیشنهاد دهند و در نهایت پول ریکوئست آماده برای بازبینی ثبت کنند.",
      "توسعه‌دهندگانی که این ابزارها را امتحان کرده‌اند می‌گویند بیشترین کارایی در وظایف تکراری و رفع باگ‌های کوچک دیده می‌شود، در حالی که برای تصمیم‌های معماری بزرگ همچنان نیاز به نظارت انسانی جدی است.",
      "نگرانی اصلی تیم‌های امنیتی این است که این عامل‌ها به کدبیس‌های حساس دسترسی پیدا کنند؛ به همین دلیل اغلب شرکت‌ها فعلاً استفاده از این ابزارها را به مخازن داخلی و غیرحیاتی محدود کرده‌اند.",
    ],
    body_en: [
      "Several companies simultaneously unveiled what they're calling 'dev agents' — systems that can read a bug ticket, search the codebase, propose a fix, and open a review-ready pull request end to end.",
      "Developers who tested the tools say they shine on repetitive tasks and small bug fixes, while major architectural decisions still need close human oversight.",
      "Security teams' main concern is these agents gaining access to sensitive codebases, so most companies are for now limiting usage to internal, non-critical repositories.",
    ],
    image: "https://picsum.photos/seed/ai-agents/1200/700",
    source: "DevPulse",
    created_at: "2026-07-05T05:40:00Z",
    likes: 2870,
    commentsCount: 198,
    trendScore: 91,
    trending: true,
    tags_fa: ["دستیار کد", "عامل هوشمند"],
    tags_en: ["Coding Agents", "Automation"],
    readMinutes: 3,
  },
  {
    id: "ai-regulation-eu",
    category: "ai",
    title_fa: "قانون جدید نظارت بر مدل‌های مرزی هوش مصنوعی در اروپا کلید خورد",
    title_en: "New oversight rules for frontier AI models take effect in Europe",
    summary_fa:
      "قوانین تازه اروپا شرکت‌های سازنده مدل‌های بزرگ را ملزم می‌کند پیش از انتشار عمومی، گزارش ارزیابی ریسک ارائه دهند.",
    summary_en:
      "New EU rules now require makers of the largest frontier models to file a risk-assessment report before any public release.",
    body_fa: [
      "از این هفته، شرکت‌هایی که مدل‌هایی بالاتر از یک آستانه محاسباتی مشخص آموزش می‌دهند، موظف‌اند پیش از عرضه عمومی، ارزیابی ریسک مستقل ارائه دهند.",
      "ناظران این حوزه می‌گویند هدف اصلی، شفافیت بیشتر درباره توانایی‌های بالقوه خطرناک مانند کمک به تولید سلاح‌های زیستی یا حملات سایبری پیچیده است، نه کند کردن نوآوری.",
      "برخی استارتاپ‌های کوچک‌تر نگران هزینه انطباق با این مقررات هستند و خواستار معافیت‌های بیشتر برای تیم‌های کم‌نفر شده‌اند.",
    ],
    body_en: [
      "As of this week, companies training models above a defined compute threshold must file an independent risk assessment before any public release.",
      "Regulators say the goal is more transparency around potentially dangerous capabilities, like assistance with bioweapons or sophisticated cyberattacks, not slowing innovation.",
      "Some smaller startups worry about compliance costs and are asking for broader exemptions for small teams.",
    ],
    image: "https://picsum.photos/seed/ai-regulation/1200/700",
    source: "Policy Wire",
    created_at: "2026-07-04T14:00:00Z",
    likes: 1540,
    commentsCount: 267,
    trendScore: 74,
    trending: false,
    tags_fa: ["قانون‌گذاری", "اتحادیه اروپا"],
    tags_en: ["Regulation", "EU"],
    readMinutes: 3,
  },

  // ---------------- TECH ----------------
  {
    id: "tech-foldable-thin",
    category: "tech",
    title_fa: "نازک‌ترین گوشی تاشوی جهان با لولای فلزی تازه رونمایی شد",
    title_en: "World's thinnest foldable phone debuts with a new metal hinge",
    summary_fa:
      "طراحی تازه لولا ضخامت گوشی تاشو را به کمتر از یک سانتی‌متر رسانده و باتری هم بزرگ‌تر شده است.",
    summary_en:
      "A redesigned hinge brings the foldable's folded thickness under one centimeter, while battery capacity actually grows.",
    body_fa: [
      "سازنده این گوشی مدعی است لولای تازه با استفاده از آلیاژ سبک‌تر و مقاوم‌تر توانسته ضخامت را در حالت تاشده به کمتر از ۱۰ میلی‌متر برساند، بدون آنکه به دوام دستگاه لطمه بزند.",
      "در آزمایش‌های اولیه رسانه‌های تخصصی، خط تا روی صفحه نمایش تقریباً نامحسوس گزارش شده که یکی از بزرگ‌ترین شکایات کاربران گوشی‌های تاشو در نسل‌های قبلی بوده است.",
      "قیمت‌گذاری این مدل هنوز نزدیک به گوشی‌های تاشوی پرچمدار است، اما تحلیلگران انتظار دارند با گسترش تولید لولای جدید، قیمت‌ها در یکی دو سال آینده کاهش یابد.",
    ],
    body_en: [
      "The maker claims the new hinge, built from a lighter and tougher alloy, brings folded thickness under 10mm without sacrificing durability.",
      "In early hands-on tests, reviewers report the crease on the display is nearly invisible — long one of the biggest complaints about earlier foldable generations.",
      "Pricing is still close to flagship foldable territory, though analysts expect costs to drop over the next year or two as the new hinge scales into production.",
    ],
    image: "https://picsum.photos/seed/tech-foldable/1200/700",
    source: "GadgetDaily",
    created_at: "2026-07-05T07:20:00Z",
    likes: 3320,
    commentsCount: 221,
    trendScore: 88,
    trending: true,
    tags_fa: ["گوشی تاشو", "گجت"],
    tags_en: ["Foldables", "Gadgets"],
    readMinutes: 3,
  },
  {
    id: "tech-quantum-chip",
    category: "tech",
    title_fa: "تراشه کوانتومی جدید خطای محاسباتی را به شکل چشمگیری کاهش داد",
    title_en: "New quantum chip cuts computational error rates dramatically",
    summary_fa:
      "نسل تازه تراشه‌های کوانتومی با روش تازه تصحیح خطا، گامی مهم به‌سوی محاسبات کوانتومی کاربردی برداشته است.",
    summary_en:
      "A new generation of quantum chips uses an improved error-correction scheme, marking a real step toward practical quantum computing.",
    body_fa: [
      "تیم تحقیقاتی سازنده این تراشه می‌گوید با گروه‌بندی کیوبیت‌های فیزیکی به‌صورت متراکم‌تر، توانسته‌اند نرخ خطا را به‌طور قابل‌توجهی پایین بیاورند بدون افزایش چشمگیر تعداد کیوبیت مورد نیاز.",
      "این پیشرفت می‌تواند مسیر رسیدن به «برتری کوانتومی کاربردی» را کوتاه‌تر کند؛ جایی که کامپیوترهای کوانتومی بتوانند مسائل واقعی صنعتی مانند طراحی داروهای جدید را سریع‌تر از ابررایانه‌های کلاسیک حل کنند.",
      "با این حال کارشناسان تاکید می‌کنند که تجاری‌سازی کامل این فناوری همچنان چند سال زمان می‌برد.",
    ],
    body_en: [
      "The research team says packing physical qubits more densely let them cut error rates significantly without a big jump in the number of qubits needed.",
      "The advance could shorten the path to 'useful quantum advantage' — the point where quantum computers solve real industrial problems, like drug design, faster than classical supercomputers.",
      "Experts still caution that full commercialization remains several years away.",
    ],
    image: "https://picsum.photos/seed/tech-quantum/1200/700",
    source: "SciTech Report",
    created_at: "2026-07-04T18:10:00Z",
    likes: 1980,
    commentsCount: 145,
    trendScore: 80,
    trending: true,
    tags_fa: ["کوانتوم", "تراشه"],
    tags_en: ["Quantum Computing", "Chips"],
    readMinutes: 4,
  },
  {
    id: "tech-battery-solid",
    category: "tech",
    title_fa: "باتری حالت‌جامد جدید ۸۰ درصد شارژ را در ۱۰ دقیقه انجام می‌دهد",
    title_en: "New solid-state battery hits 80% charge in 10 minutes",
    summary_fa:
      "شرکتی نوپا از باتری حالت‌جامدی رونمایی کرد که ادعا می‌شود چگالی انرژی بالاتر و شارژ بسیار سریع‌تری نسبت به باتری‌های لیتیوم-یون فعلی دارد.",
    summary_en:
      "A startup unveiled a solid-state battery claiming higher energy density and dramatically faster charging than today's lithium-ion cells.",
    body_fa: [
      "این باتری از الکترولیت جامد به جای مایع استفاده می‌کند که هم ایمنی را بالا می‌برد و هم اجازه فشرده‌سازی بیشتر انرژی در حجم کوچک‌تر را می‌دهد.",
      "شرکت سازنده اعلام کرده اولین کاربرد تجاری این باتری در خودروهای الکتریکی و پس از آن در گوشی‌های هوشمند خواهد بود.",
      "تحلیلگران صنعت باتری هشدار می‌دهند تولید انبوه فناوری‌های حالت‌جامد در گذشته همواره کندتر از وعده‌های اولیه بوده است.",
    ],
    body_en: [
      "The battery uses a solid electrolyte instead of liquid, improving safety while packing more energy into a smaller volume.",
      "The company says the first commercial use will be in electric vehicles, followed by smartphones.",
      "Battery-industry analysts caution that solid-state mass production has historically lagged behind early promises.",
    ],
    image: "https://picsum.photos/seed/tech-battery/1200/700",
    source: "EnergyNext",
    created_at: "2026-07-03T09:45:00Z",
    likes: 1120,
    commentsCount: 88,
    trendScore: 63,
    trending: false,
    tags_fa: ["باتری", "خودرو الکتریکی"],
    tags_en: ["Battery", "EV"],
    readMinutes: 3,
  },

  // ---------------- GAMING ----------------
  {
    id: "gaming-open-world-2027",
    category: "gaming",
    title_fa: "استودیوی بزرگ سازنده بازی‌های نقش‌آفرینی، دنباله بازی جهان‌باز خود را معرفی کرد",
    title_en: "Major RPG studio reveals sequel to its flagship open-world game",
    summary_fa:
      "تریلر معرفی با نقشه‌ای سه برابر بزرگ‌تر و سیستم آب‌وهوای پویا، شبکه‌های اجتماعی را به تسخیر خود درآورد.",
    summary_en:
      "The reveal trailer, showing a map three times larger and a dynamic weather system, took over social media within hours.",
    body_fa: [
      "استودیو در رویداد امروز خود، تریلر ۴ دقیقه‌ای از دنباله پرفروش‌ترین بازی جهان‌باز خود را نمایش داد که در آن نقشه بازی نسبت به نسخه قبلی سه برابر شده است.",
      "یکی از ویژگی‌های تازه، سیستم آب‌وهوای کاملاً پویاست که به گفته سازندگان روی رفتار هوش مصنوعی دشمنان و حتی مسیر ماموریت‌ها تاثیر می‌گذارد.",
      "بازی برای پلتفرم‌های نسل جدید و رایانه‌های شخصی در نظر گرفته شده و تاریخ عرضه آن اوایل سال آینده اعلام شده است.",
      "واکنش اولیه بازیکنان بسیار مثبت بوده، هرچند برخی نگران زمان طولانی توسعه و احتمال تاخیر در عرضه هستند.",
    ],
    body_en: [
      "At today's showcase, the studio revealed a four-minute trailer for the sequel to its best-selling open-world title, with a map three times the size of the original.",
      "One headline feature is a fully dynamic weather system that developers say affects enemy AI behavior and even how missions play out.",
      "The game is planned for current-gen consoles and PC, with a release window set for early next year.",
      "Early player reaction has been overwhelmingly positive, though some worry about the long development cycle and potential delays.",
    ],
    image: "https://picsum.photos/seed/gaming-openworld/1200/700",
    source: "GameSphere",
    created_at: "2026-07-05T06:00:00Z",
    likes: 5600,
    commentsCount: 480,
    trendScore: 95,
    trending: true,
    tags_fa: ["بازی جهان‌باز", "تریلر"],
    tags_en: ["Open World", "Trailer"],
    readMinutes: 4,
  },
  {
    id: "gaming-esports-prize",
    category: "gaming",
    title_fa: "جایزه نقدی تازه‌ترین تورنمنت جهانی از مرز ۴۰ میلیون دلار گذشت",
    title_en: "Prize pool for the latest world championship crosses $40 million",
    summary_fa:
      "بزرگ‌ترین تورنمنت اسپورت الکترونیک سال با رکورد جدید جایزه نقدی، صدها هزار تماشاگر آنلاین را جذب کرد.",
    summary_en:
      "The year's biggest esports tournament drew hundreds of thousands of concurrent viewers with a record-setting prize pool.",
    body_fa: [
      "بخشی از این جایزه از فروش آیتم‌های داخل بازی تامین شده که هواداران با خرید آن‌ها مستقیماً در افزایش جایزه نهایی سهیم شدند.",
      "تیم قهرمان که از منطقه آسیا بود، در فینالی نفس‌گیر مقابل تیمی اروپایی به پیروزی رسید و رکورد بیشترین برد پیاپی فصل را نیز ثبت کرد.",
      "برگزارکنندگان اعلام کردند تعداد بینندگان همزمان پخش زنده در لحظه فینال از مرز ۵ میلیون نفر عبور کرده است.",
    ],
    body_en: [
      "Part of the prize pool came from in-game item sales, letting fans directly contribute to the final prize by purchasing cosmetics.",
      "The champion team, hailing from the Asia region, edged out a European squad in a nail-biting final, also setting the season's record for consecutive wins.",
      "Organizers said concurrent live viewership during the final peaked above 5 million.",
    ],
    image: "https://picsum.photos/seed/gaming-esports/1200/700",
    source: "EsportsHub",
    created_at: "2026-07-04T20:30:00Z",
    likes: 3010,
    commentsCount: 210,
    trendScore: 86,
    trending: true,
    tags_fa: ["اسپورت الکترونیک", "تورنمنت"],
    tags_en: ["Esports", "Tournament"],
    readMinutes: 3,
  },
  {
    id: "gaming-remaster",
    category: "gaming",
    title_fa: "بازسازی کامل یکی از بازی‌های کلاسیک دهه ۲۰۰۰ اعلام شد",
    title_en: "Full remake of a beloved 2000s classic officially announced",
    summary_fa:
      "بازسازی با موتور گرافیکی کاملاً تازه، صداپیشگی جدید و چند ماموریت فرعی اضافه‌شده عرضه خواهد شد.",
    summary_en:
      "The remake ships with an all-new graphics engine, fresh voice acting and several newly added side missions.",
    body_fa: [
      "ناشر بازی تایید کرد که داستان اصلی دست‌نخورده باقی می‌ماند اما گرافیک، موسیقی و بخشی از مکانیک‌های گیم‌پلی به‌طور کامل بازسازی شده‌اند.",
      "طرفداران قدیمی این عنوان با استقبال گرم از خبر، هشتگ مربوط به آن را به یکی از پرطرفدارترین موضوعات روز در شبکه‌های اجتماعی تبدیل کردند.",
    ],
    body_en: [
      "The publisher confirmed the core story remains untouched, while the visuals, soundtrack, and parts of the gameplay mechanics have been fully rebuilt.",
      "Longtime fans welcomed the news warmly, pushing the game's hashtag to one of the day's top trending topics on social media.",
    ],
    image: "https://picsum.photos/seed/gaming-remaster/1200/700",
    source: "RetroPlay",
    created_at: "2026-07-03T11:15:00Z",
    likes: 2440,
    commentsCount: 176,
    trendScore: 70,
    trending: false,
    tags_fa: ["بازسازی", "کلاسیک"],
    tags_en: ["Remake", "Classic"],
    readMinutes: 2,
  },

  // ---------------- CARS ----------------
  {
    id: "cars-ev-range-record",
    category: "cars",
    title_fa: "خودروی الکتریکی جدید با یک بار شارژ رکورد ۹۰۰ کیلومتر ثبت کرد",
    title_en: "New EV sets a 900km single-charge range record",
    summary_fa:
      "با استفاده از باتری با چگالی انرژی بالاتر و بهبود آیرودینامیک، این خودرو رکورد برد مسیر را در کلاس خود جابه‌جا کرد.",
    summary_en:
      "Thanks to a higher-density battery pack and improved aerodynamics, the car reset the range record in its class.",
    body_fa: [
      "این رکورد در آزمایش مستقل و تحت شرایط استاندارد جاده‌ای ثبت شده، نه در شرایط آزمایشگاهی ایده‌آل، که باعث اعتبار بیشتر این عدد شده است.",
      "سازنده می‌گوید ترکیبی از سلول‌های باتری تازه و کاهش ضریب مقاومت هوا با طراحی بدنه جدید، عامل اصلی این جهش بوده است.",
      "این مدل قرار است اواخر امسال با قیمتی نزدیک به رقبای پرچمدار خود وارد بازار شود.",
    ],
    body_en: [
      "The record was set in an independent test under standard road conditions, not ideal lab conditions, adding credibility to the number.",
      "The automaker says a combination of new battery cells and a lower drag coefficient from the redesigned body were the main drivers of the jump.",
      "The model is expected to reach the market later this year, priced close to its flagship rivals.",
    ],
    image: "https://picsum.photos/seed/cars-ev/1200/700",
    source: "AutoTrend",
    created_at: "2026-07-05T04:50:00Z",
    likes: 2680,
    commentsCount: 154,
    trendScore: 84,
    trending: true,
    tags_fa: ["خودرو الکتریکی", "رکورد برد"],
    tags_en: ["EV", "Range Record"],
    readMinutes: 3,
  },
  {
    id: "cars-self-driving-city",
    category: "cars",
    title_fa: "اولین شهر با مجوز کامل تاکسی‌های بدون راننده در سطح شهر معرفی شد",
    title_en: "First city grants full citywide approval for driverless robotaxis",
    summary_fa:
      "پس از دو سال آزمایش محدود، شورای شهر مجوز فعالیت بدون محدودیت منطقه‌ای را برای ناوگان تاکسی‌های خودران صادر کرد.",
    summary_en:
      "After two years of limited testing, the city council approved unrestricted, citywide operation for the driverless taxi fleet.",
    body_fa: [
      "بر اساس داده‌های منتشرشده، ناوگان آزمایشی طی دو سال گذشته میلیون‌ها کیلومتر بدون تصادف قابل توجه طی کرده است.",
      "برخی گروه‌های صنفی رانندگان تاکسی نسبت به این تصمیم اعتراض کرده و خواستار دوره گذار طولانی‌تر برای حفظ مشاغل شده‌اند.",
      "شرکت اپراتور اعلام کرده قصد دارد تا پایان سال ناوگان خود را دو برابر کند.",
    ],
    body_en: [
      "Published data shows the pilot fleet logged millions of miles over two years without a significant collision.",
      "Some taxi driver associations have objected to the decision, calling for a longer transition period to protect jobs.",
      "The operating company says it plans to double its fleet size by year's end.",
    ],
    image: "https://picsum.photos/seed/cars-robotaxi/1200/700",
    source: "MobilityNow",
    created_at: "2026-07-04T16:25:00Z",
    likes: 1870,
    commentsCount: 302,
    trendScore: 77,
    trending: false,
    tags_fa: ["خودران", "تاکسی هوشمند"],
    tags_en: ["Self-driving", "Robotaxi"],
    readMinutes: 3,
  },
  {
    id: "cars-classic-revival",
    category: "cars",
    title_fa: "یک برند کلاسیک نسخه الکتریکی مدل نمادین دهه ۹۰ خود را برمی‌گرداند",
    title_en: "Classic automaker revives its iconic 90s model in electric form",
    summary_fa:
      "طراحی بیرونی وفادار به نسخه اصلی باقی مانده اما زیر کاپوت، این بار موتور الکتریکی جای موتور احتراقی را گرفته است.",
    summary_en:
      "The exterior stays faithful to the original, but under the hood an electric motor now replaces the combustion engine.",
    body_fa: [
      "طرفداران قدیمی برند از حفظ خطوط طراحی اصلی خودرو استقبال کرده‌اند، هرچند برخی معتقدند صدای موتور الکتریکی هویت اصلی مدل را کم‌رنگ می‌کند.",
      "شرکت اعلام کرده تولید در تعداد محدود آغاز می‌شود و بر اساس استقبال بازار افزایش می‌یابد.",
    ],
    body_en: [
      "Longtime fans of the brand have welcomed the preserved design lines, though some argue the electric motor's silence dilutes the model's original character.",
      "The company says production will begin in limited numbers and scale based on market demand.",
    ],
    image: "https://picsum.photos/seed/cars-classic/1200/700",
    source: "AutoTrend",
    created_at: "2026-07-02T13:00:00Z",
    likes: 990,
    commentsCount: 132,
    trendScore: 58,
    trending: false,
    tags_fa: ["کلاسیک", "خودرو الکتریکی"],
    tags_en: ["Classic Revival", "EV"],
    readMinutes: 2,
  },

  // ---------------- SPACE ----------------
  {
    id: "space-exoplanet-signal",
    category: "space",
    title_fa: "تلسکوپ فضایی نشانه‌ای احتمالی از بخار آب در جو یک سیاره فراخورشیدی یافت",
    title_en: "Space telescope spots possible water-vapor signal on distant exoplanet",
    summary_fa:
      "طیف‌سنجی جو یک سیاره فراخورشیدی هم‌اندازه زمین، الگویی نشان داده که می‌تواند نشانه وجود بخار آب باشد؛ اگرچه تیم پژوهشی محتاطانه صحبت می‌کند.",
    summary_en:
      "Atmospheric spectroscopy of an Earth-sized exoplanet shows a pattern consistent with water vapor, though the research team is cautious about the interpretation.",
    body_fa: [
      "این سیاره در منطقه قابل سکونت ستاره میزبان خود قرار دارد؛ یعنی دمای سطحی آن به‌طور نظری می‌تواند اجازه وجود آب مایع را بدهد.",
      "تیم پژوهشی تاکید می‌کند که داده‌های فعلی برای اعلام قطعی وجود آب کافی نیست و نیاز به مشاهدات تکمیلی در چند ماه آینده دارند.",
      "در صورت تایید، این یکی از قوی‌ترین شواهد غیرمستقیم برای وجود آب در جو یک سیاره فراخورشیدی هم‌اندازه زمین خواهد بود.",
    ],
    body_en: [
      "The planet sits within its host star's habitable zone, meaning its surface temperature could theoretically allow liquid water.",
      "The research team stresses current data isn't enough for a definitive water claim and follow-up observations over the coming months are needed.",
      "If confirmed, it would be among the strongest indirect pieces of evidence yet for water in the atmosphere of an Earth-sized exoplanet.",
    ],
    image: "https://picsum.photos/seed/space-exoplanet/1200/700",
    source: "Cosmos Daily",
    created_at: "2026-07-05T02:30:00Z",
    likes: 4890,
    commentsCount: 401,
    trendScore: 93,
    trending: true,
    tags_fa: ["سیاره فراخورشیدی", "تلسکوپ فضایی"],
    tags_en: ["Exoplanet", "Space Telescope"],
    readMinutes: 4,
  },
  {
    id: "space-lunar-base",
    category: "space",
    title_fa: "اولین ماژول سکونتی پایگاه قمری برای پرتاب سال آینده آماده شد",
    title_en: "First habitat module for the lunar base cleared for launch next year",
    summary_fa:
      "این ماژول قرار است به‌عنوان هسته اولیه پایگاه دائمی روی قطب جنوب ماه مورد استفاده قرار گیرد.",
    summary_en:
      "The module is set to serve as the initial core of a permanent base near the Moon's south pole.",
    body_fa: [
      "ماژول با در نظر گرفتن شرایط دمایی شدید قطب جنوب ماه طراحی شده و سامانه محافظت در برابر تشعشع پیشرفته‌ای دارد.",
      "برنامه‌ریزان ماموریت می‌گویند هدف نهایی، فراهم کردن اقامت طولانی‌مدت برای فضانوردان پیش از ماموریت‌های آینده به مریخ است.",
    ],
    body_en: [
      "The module is engineered for the extreme temperature swings near the lunar south pole and includes an advanced radiation-shielding system.",
      "Mission planners say the ultimate goal is enabling long-duration stays for astronauts ahead of future Mars missions.",
    ],
    image: "https://picsum.photos/seed/space-lunar/1200/700",
    source: "OrbitNews",
    created_at: "2026-07-04T10:00:00Z",
    likes: 2210,
    commentsCount: 189,
    trendScore: 79,
    trending: false,
    tags_fa: ["پایگاه قمری", "ماموریت فضایی"],
    tags_en: ["Lunar Base", "Space Mission"],
    readMinutes: 3,
  },
  {
    id: "space-reusable-record",
    category: "space",
    title_fa: "یک بوستر فضایی برای بیستمین بار پرتاب و بازیابی شد",
    title_en: "A single rocket booster launches and lands for the 20th time",
    summary_fa:
      "این رکورد تازه، هزینه هر پرتاب را به شکل چشمگیری کاهش داده و رقابت در بازار پرتاب ماهواره را تشدید کرده است.",
    summary_en:
      "The new milestone sharply lowers the cost per launch and is intensifying competition in the satellite-launch market.",
    body_fa: [
      "شرکت سازنده می‌گوید بازرسی پس از بیستمین پرواز نشان داده بوستر همچنان ظرفیت چند پرواز دیگر را دارد.",
      "کاهش هزینه ناشی از استفاده مجدد، فشار رقابتی بیشتری بر سایر شرکت‌های فعال در بازار پرتاب ماهواره‌های تجاری وارد کرده است.",
    ],
    body_en: [
      "The company says post-flight inspection after the 20th launch shows the booster still has capacity for several more flights.",
      "The resulting cost reduction from reusability is putting added competitive pressure on other players in the commercial satellite-launch market.",
    ],
    image: "https://picsum.photos/seed/space-booster/1200/700",
    source: "OrbitNews",
    created_at: "2026-07-03T07:40:00Z",
    likes: 1660,
    commentsCount: 97,
    trendScore: 66,
    trending: false,
    tags_fa: ["بوستر قابل استفاده مجدد", "پرتاب ماهواره"],
    tags_en: ["Reusable Rocket", "Satellite Launch"],
    readMinutes: 2,
  },
];

export function getPostsByCategory(category: CategorySlug) {
  return posts.filter((p) => p.category === category);
}

export function getFeaturedPost() {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getPost(id: string) {
  return posts.find((p) => p.id === id);
}

export function getTrendingPosts(limit = 8) {
  return [...posts].sort((a, b) => b.trendScore - a.trendScore).slice(0, limit);
}

export function getLatestPosts(limit = 12) {
  return [...posts]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, limit);
}

export function getRelatedPosts(post: Post, limit = 3) {
  return posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, limit);
}
