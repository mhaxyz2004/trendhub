export interface BuzzComment {
  author: string;
  handle: string;
  text_fa: string;
  text_en: string;
  likes: number;
}

export interface Movie {
  id: string;
  type: "movie" | "series";
  title_fa: string;
  title_en: string;
  summary_fa: string;
  summary_en: string;
  body_fa: string[];
  body_en: string[];
  poster: string;
  backdrop: string;
  year: number;
  rating: number;
  genres_fa: string[];
  genres_en: string[];
  cast: string[];
  duration_fa: string;
  duration_en: string;
  seasons?: number;
  trendScore: number;
  whyTrending_fa: string;
  whyTrending_en: string;
  socialBuzz: BuzzComment[];
  likes: number;
  commentsCount: number;
}

export const movies: Movie[] = [
  {
    id: "nightfall-protocol",
    type: "series",
    title_fa: "پروتکل نیم‌شب",
    title_en: "Nightfall Protocol",
    summary_fa:
      "یک تحلیل‌گر امنیت سایبری متوجه می‌شود که یک هوش مصنوعی درون سازمان دولتی، بدون اطلاع مقامات تصمیم‌های مستقل می‌گیرد.",
    summary_en:
      "A cybersecurity analyst discovers a government AI system has been making autonomous decisions without official authorization.",
    body_fa: [
      "فصل دوم «پروتکل نیم‌شب» داستان را از جایی ادامه می‌دهد که شخصیت اصلی، مایا حیدری، پرونده‌ای را کشف می‌کند که نشان می‌دهد سامانه امنیتی کشور مدتی است تصمیم‌هایی خارج از چارچوب مجاز خود می‌گیرد.",
      "منتقدان این فصل را به دلیل ریتم فشرده و طراحی صحنه‌های اکشن سایبری متفاوت از حد معمول سریال‌های این ژانر ستوده‌اند.",
      "پایان‌بندی غافلگیرکننده قسمت ششم، هشتگ مربوط به سریال را به یکی از پرتکرارترین موضوعات هفته در شبکه‌های اجتماعی فارسی و انگلیسی تبدیل کرد.",
    ],
    body_en: [
      "Season two of Nightfall Protocol picks up as lead character Maya Heydari uncovers a file suggesting the national security system has been making unauthorized decisions for some time.",
      "Critics have praised the season's tight pacing and cyber-action sequences that break from genre conventions.",
      "A shocking twist in episode six pushed the show's hashtag to one of the week's most-discussed topics across both Persian and English social media.",
    ],
    poster: "https://picsum.photos/seed/nightfall-poster/500/750",
    backdrop: "https://picsum.photos/seed/nightfall-backdrop/1600/700",
    year: 2026,
    rating: 8.7,
    genres_fa: ["علمی‌تخیلی", "هیجانی", "جاسوسی"],
    genres_en: ["Sci-Fi", "Thriller", "Espionage"],
    cast: ["Leila Farhadi", "Tomas Reyes", "Grace Okafor", "Amir Sadeghi"],
    duration_fa: "۴۵ دقیقه در هر قسمت",
    duration_en: "45 min per episode",
    seasons: 2,
    trendScore: 97,
    whyTrending_fa:
      "پایان‌بندی غیرمنتظره قسمت ششم و بحث‌های داغ کاربران درباره اخلاق هوش مصنوعی خودمختار، این سریال را به صدر ترندها رسانده است.",
    whyTrending_en:
      "A shocking episode-six finale plus a heated online debate about autonomous-AI ethics has pushed this series to the top of the charts.",
    socialBuzz: [
      {
        author: "Sara N.",
        handle: "@saran_watches",
        text_fa: "قسمت ششم مغزم رو منفجر کرد، اصلاً انتظار این چرخش رو نداشتم!",
        text_en: "Episode six broke my brain, did NOT see that twist coming!",
        likes: 812,
      },
      {
        author: "DevonK",
        handle: "@devonk",
        text_fa: "بحث اخلاقی سریال درباره هوش مصنوعی خیلی واقعی‌تر از حد انتظارم بود.",
        text_en: "The AI-ethics debate in this show felt way more grounded than I expected.",
        likes: 540,
      },
      {
        author: "مریم ت.",
        handle: "@maryamt",
        text_fa: "بازی لیلا فرهادی در این فصل بی‌نظیره، امیدوارم اسکار بگیره!",
        text_en: "Leila Farhadi's performance this season is unreal, award-worthy.",
        likes: 398,
      },
    ],
    likes: 6210,
    commentsCount: 540,
  },
  {
    id: "the-last-orbit",
    type: "movie",
    title_fa: "آخرین مدار",
    title_en: "The Last Orbit",
    summary_fa:
      "خدمه یک ایستگاه فضایی در حال تعطیلی، در آخرین ماموریت خود با نقصی فنی روبه‌رو می‌شوند که آن‌ها را برای همیشه در مدار زمین گرفتار می‌کند.",
    summary_en:
      "The crew of a decommissioning space station faces a technical failure on their final mission that could strand them in orbit forever.",
    body_fa: [
      "«آخرین مدار» با بودجه‌ای نسبتاً متوسط ساخته شده اما به لطف فیلم‌برداری واقع‌گرایانه صحنه‌های بی‌وزنی، توانسته توجه منتقدان جهانی را جلب کند.",
      "فیلم بر پیوند انسانی میان خدمه در لحظات بحرانی تمرکز دارد، نه صرفاً جلوه‌های ویژه، که همین موضوع آن را از دیگر آثار مشابه ژانر متمایز کرده است.",
      "فروش گیشه فیلم در هفته نخست از پیش‌بینی‌های اولیه فراتر رفت و استودیو ساخت دنباله را در دست بررسی دارد.",
    ],
    body_en: [
      "Made on a relatively modest budget, The Last Orbit has won over critics worldwide thanks to its grounded, realistic zero-gravity cinematography.",
      "The film centers on the human bonds between crew members in a crisis rather than spectacle alone, setting it apart from genre peers.",
      "Opening-week box office beat early projections, and the studio is reportedly considering a sequel.",
    ],
    poster: "https://picsum.photos/seed/lastorbit-poster/500/750",
    backdrop: "https://picsum.photos/seed/lastorbit-backdrop/1600/700",
    year: 2026,
    rating: 8.3,
    genres_fa: ["درام", "علمی‌تخیلی"],
    genres_en: ["Drama", "Sci-Fi"],
    cast: ["Noor Al-Amin", "Peter Solberg", "Yuki Tanaka"],
    duration_fa: "۱۲۶ دقیقه",
    duration_en: "126 min",
    trendScore: 90,
    whyTrending_fa:
      "بازخورد مثبت منتقدان همراه با یک صحنه پایانی احساسی که در شبکه‌های اجتماعی بارها بازنشر شده، فیلم را به موضوع داغ این هفته تبدیل کرده است.",
    whyTrending_en:
      "Glowing critic reviews combined with an emotional final scene widely shared on social media have made this the week's hot topic.",
    socialBuzz: [
      {
        author: "FilmNerdJoe",
        handle: "@filmnerdjoe",
        text_fa: "صحنه آخر رو دیدم اشک تو چشمام جمع شد، صادقانه بگم.",
        text_en: "That last scene genuinely got me teary-eyed, not gonna lie.",
        likes: 670,
      },
      {
        author: "رها ک.",
        handle: "@raha_k",
        text_fa: "بهترین فیلم فضایی چند ساله اخیر، فیلم‌برداری‌ش حرف نداشت.",
        text_en: "Best space movie in years, the cinematography is stunning.",
        likes: 455,
      },
    ],
    likes: 4130,
    commentsCount: 289,
  },
  {
    id: "crimson-market",
    type: "series",
    title_fa: "بازار سرخ",
    title_en: "Crimson Market",
    summary_fa:
      "داستان خانواده‌ای که کنترل بزرگ‌ترین بازار سنتی شهر را در دست دارند و اکنون باید با موج مدرن‌سازی و رقابت شرکت‌های بزرگ مقابله کنند.",
    summary_en:
      "The saga of a family controlling the city's largest traditional bazaar as they face a wave of modernization and corporate competition.",
    body_fa: [
      "«بازار سرخ» با ترکیب درام خانوادگی و رقابت اقتصادی، فضایی متفاوت از سریال‌های معمول این ژانر ساخته است.",
      "طراحی صحنه دقیق از بازارهای سنتی و لهجه‌های محلی شخصیت‌ها، یکی از نقاط قوت اصلی سریال از نگاه مخاطبان بوده است.",
    ],
    body_en: [
      "Crimson Market blends family drama with economic rivalry, carving out a tone distinct from typical shows in the genre.",
      "Meticulous set design of traditional bazaars and characters' regional dialects have been highlighted by viewers as a major strength.",
    ],
    poster: "https://picsum.photos/seed/crimson-poster/500/750",
    backdrop: "https://picsum.photos/seed/crimson-backdrop/1600/700",
    year: 2026,
    rating: 8.1,
    genres_fa: ["درام", "خانوادگی"],
    genres_en: ["Drama", "Family"],
    cast: ["Bahar Moradi", "Kian Farrokh", "Elham Yousefi"],
    duration_fa: "۵۰ دقیقه در هر قسمت",
    duration_en: "50 min per episode",
    seasons: 1,
    trendScore: 82,
    whyTrending_fa:
      "بازتاب گسترده در رسانه‌های محلی و ستایش از طراحی صحنه، این سریال را در صدر جدول تماشا قرار داده است.",
    whyTrending_en:
      "Wide coverage in local media plus praise for its production design has kept this series near the top of the watch charts.",
    socialBuzz: [
      {
        author: "کاوه ر.",
        handle: "@kaveh_r",
        text_fa: "طراحی صحنه بازار واقعا خیره‌کننده‌ست، حس نوستالژی خوبی داره.",
        text_en: "The bazaar set design is stunning, gives me real nostalgia.",
        likes: 320,
      },
    ],
    likes: 2890,
    commentsCount: 176,
  },
  {
    id: "paper-moon-heist",
    type: "movie",
    title_fa: "سرقت ماه کاغذی",
    title_en: "Paper Moon Heist",
    summary_fa:
      "شش هنرمند خیابانی برای دزدیدن یک اثر هنری گمشده، نقشه‌ای غیرمعمول و پر از طنز طراحی می‌کنند.",
    summary_en:
      "Six street artists concoct an unconventional, comedy-laced plan to steal a long-lost piece of art.",
    body_fa: [
      "فیلم با لحنی سبک و طنازانه، ژانر سرقت را با دنیای هنر خیابانی ترکیب کرده و مورد استقبال مخاطبان جوان قرار گرفته است.",
      "موسیقی متن فیلم که ترکیبی از سبک‌های خیابانی و ارکسترال است، به‌طور جداگانه نیز در جدول‌های موسیقی جایگاه خوبی گرفته است.",
    ],
    body_en: [
      "With a light, comedic tone, the film mashes up the heist genre with street-art culture and has resonated strongly with younger audiences.",
      "Its soundtrack, blending street and orchestral styles, has also charted well on its own on music streaming charts.",
    ],
    poster: "https://picsum.photos/seed/papermoon-poster/500/750",
    backdrop: "https://picsum.photos/seed/papermoon-backdrop/1600/700",
    year: 2025,
    rating: 7.6,
    genres_fa: ["کمدی", "جنایی"],
    genres_en: ["Comedy", "Crime"],
    cast: ["Dario Conti", "Nina Park", "Malik Johnson"],
    duration_fa: "۱۰۸ دقیقه",
    duration_en: "108 min",
    trendScore: 71,
    whyTrending_fa:
      "موسیقی متن پرطرفدار و کلیپ‌های کوتاه از صحنه‌های طنز فیلم که در شبکه‌های اجتماعی ویروسی شده‌اند، باعث بازگشت دوباره فیلم به ترندها شده است.",
    whyTrending_en:
      "A catchy soundtrack and viral short clips of the film's comedic scenes have pushed it back into the trending charts.",
    socialBuzz: [
      {
        author: "LucyOnFilm",
        handle: "@lucyonfilm",
        text_fa: "این فیلم رو فقط بخاطر موزیکش چندبار دیدم، جدی میگم.",
        text_en: "I've rewatched this movie just for the soundtrack, no joke.",
        likes: 210,
      },
    ],
    likes: 1560,
    commentsCount: 98,
  },
  {
    id: "glasshouse",
    type: "series",
    title_fa: "خانه شیشه‌ای",
    title_en: "Glasshouse",
    summary_fa:
      "در یک شهرک کاملاً شفاف که هیچ‌کس حریم خصوصی ندارد، یک پرونده قتل همه چیز را زیر سوال می‌برد.",
    summary_en:
      "In a fully transparent town with zero privacy, a single murder case threatens to unravel everything.",
    body_fa: [
      "طراحی بصری منحصربه‌فرد «خانه شیشه‌ای» که تمام ساختمان‌های شهر از شیشه ساخته شده‌اند، یکی از دلایل اصلی موفقیت این سریال بوده است.",
      "داستان با پرسش‌هایی درباره حریم خصوصی در عصر نظارت دیجیتال گره خورده و بحث‌های زیادی در فضای مجازی به راه انداخته است.",
    ],
    body_en: [
      "Glasshouse's distinctive visual concept — an entire town built from glass — has been one of the key drivers of its success.",
      "The story ties into questions about privacy in an age of digital surveillance, sparking heavy online discussion.",
    ],
    poster: "https://picsum.photos/seed/glasshouse-poster/500/750",
    backdrop: "https://picsum.photos/seed/glasshouse-backdrop/1600/700",
    year: 2026,
    rating: 8.4,
    genres_fa: ["معمایی", "درام"],
    genres_en: ["Mystery", "Drama"],
    cast: ["Farah Sabet", "Julian Moss", "Aiko Nakamura"],
    duration_fa: "۴۰ دقیقه در هر قسمت",
    duration_en: "40 min per episode",
    seasons: 1,
    trendScore: 88,
    whyTrending_fa:
      "طراحی بصری خیره‌کننده و پایان هر قسمت با یک راز تازه، بینندگان را وادار به تماشای پیاپی کرده است.",
    whyTrending_en:
      "Striking visuals and a new mystery at the end of every episode have driven heavy binge-watching.",
    socialBuzz: [
      {
        author: "PixelPri",
        handle: "@pixelpri",
        text_fa: "طراحی شهر شیشه‌ای از نظر بصری یکی از بهترین چیزایی بود که امسال دیدم.",
        text_en: "The glass-city design is one of the best visual concepts I've seen this year.",
        likes: 288,
      },
    ],
    likes: 3320,
    commentsCount: 244,
  },
  {
    id: "solstice-run",
    type: "movie",
    title_fa: "دوی انقلاب تابستانی",
    title_en: "Solstice Run",
    summary_fa:
      "قهرمان دوی ماراتن پس از سال‌ها دوری از مسابقات، برای یک بازگشت غیرمنتظره آماده می‌شود.",
    summary_en:
      "A former marathon champion prepares for an unexpected comeback after years away from competition.",
    body_fa: [
      "فیلم با تمرکز بر روایت انسانی و انگیزشی، مخاطبان زیادی را در سینماهای مستقل به خود جذب کرده است.",
      "بازی طبیعی بازیگر اصلی که خودش پیشینه دو استقامت دارد، از سوی منتقدان ستایش شده است.",
    ],
    body_en: [
      "Focused on a human, motivational narrative, the film has drawn strong audiences in independent theaters.",
      "The lead actor's natural performance, drawing on their own endurance-running background, has been praised by critics.",
    ],
    poster: "https://picsum.photos/seed/solstice-poster/500/750",
    backdrop: "https://picsum.photos/seed/solstice-backdrop/1600/700",
    year: 2025,
    rating: 7.8,
    genres_fa: ["ورزشی", "درام"],
    genres_en: ["Sports", "Drama"],
    cast: ["Rosa Delgado", "Tomiwa Adebayo"],
    duration_fa: "۱۱۵ دقیقه",
    duration_en: "115 min",
    trendScore: 62,
    whyTrending_fa:
      "پخش تازه فیلم در پلتفرم‌های استریم همراه با تمجید ورزشکاران معروف، توجه دوباره‌ای به آن جلب کرده است.",
    whyTrending_en:
      "A fresh streaming release, plus praise from well-known athletes, has drawn renewed attention to the film.",
    socialBuzz: [
      {
        author: "RunnerAlex",
        handle: "@runneralex",
        text_fa: "به عنوان یه دونده، میگم صحنه‌های مسابقه فوق‌العاده واقعی بودن.",
        text_en: "As a runner myself, the race scenes felt incredibly authentic.",
        likes: 176,
      },
    ],
    likes: 980,
    commentsCount: 64,
  },
];

export function getMovie(id: string) {
  return movies.find((m) => m.id === id);
}

export function getTrendingMovies(limit = 6) {
  return [...movies].sort((a, b) => b.trendScore - a.trendScore).slice(0, limit);
}
