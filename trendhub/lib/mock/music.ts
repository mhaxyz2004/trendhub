import type { BuzzComment } from "./movies";

export interface Song {
  id: string;
  title_fa: string;
  title_en: string;
  artist_fa: string;
  artist_en: string;
  album_fa: string;
  album_en: string;
  cover: string;
  genre_fa: string;
  genre_en: string;
  duration: string;
  releaseDate: string;
  trendScore: number;
  streams: number;
  whyTrending_fa: string;
  whyTrending_en: string;
  body_fa: string[];
  body_en: string[];
  socialBuzz: BuzzComment[];
  likes: number;
  commentsCount: number;
}

export interface Artist {
  id: string;
  name_fa: string;
  name_en: string;
  genre_fa: string;
  genre_en: string;
  avatar: string;
  monthlyListeners: number;
  bio_fa: string;
  bio_en: string;
}

export interface Album {
  id: string;
  title_fa: string;
  title_en: string;
  artist_fa: string;
  artist_en: string;
  cover: string;
  year: number;
  trackCount: number;
  genre_fa: string;
  genre_en: string;
}

export const songs: Song[] = [
  {
    id: "midnight-frequency",
    title_fa: "فرکانس نیمه‌شب",
    title_en: "Midnight Frequency",
    artist_fa: "آرمان روشن",
    artist_en: "Arman Roshan",
    album_fa: "امواج شهر",
    album_en: "City Waves",
    cover: "https://picsum.photos/seed/song-midnight/500/500",
    genre_fa: "پاپ الکترونیک",
    genre_en: "Electro Pop",
    duration: "3:24",
    releaseDate: "2026-06-28T00:00:00Z",
    trendScore: 96,
    streams: 8_400_000,
    whyTrending_fa:
      "استفاده گسترده این آهنگ در کلیپ‌های کوتاه شبکه‌های اجتماعی، آن را ظرف یک هفته به صدر پخش‌ها رساند.",
    whyTrending_en:
      "Heavy use in short-form social clips has pushed this track to the top of streaming charts within a week.",
    body_fa: [
      "«فرکانس نیمه‌شب» سومین تک‌آهنگ آرمان روشن از آلبوم «امواج شهر» است که با ترکیبی از سینت‌های الکترونیک و ملودی پاپ ساخته شده.",
      "خواننده در مصاحبه‌ای اخیر گفته این آهنگ درباره حس بی‌خوابی و افکار شبانه در یک شهر بزرگ است.",
    ],
    body_en: [
      "Midnight Frequency is the third single from Arman Roshan's album City Waves, blending electronic synths with a pop melody.",
      "In a recent interview, the artist said the track captures the feeling of sleeplessness and late-night thoughts in a big city.",
    ],
    socialBuzz: [
      {
        author: "نگار س.",
        handle: "@negar_s",
        text_fa: "این آهنگ رو صد بار توی روز گوش میدم، ریتمش اعتیادآوره.",
        text_en: "I've listened to this song a hundred times today, the beat is addictive.",
        likes: 430,
      },
    ],
    likes: 5200,
    commentsCount: 340,
  },
  {
    id: "golden-hour-drive",
    title_fa: "رانندگی در ساعت طلایی",
    title_en: "Golden Hour Drive",
    artist_fa: "لیلیت مور",
    artist_en: "Lilith Moore",
    album_fa: "افق‌های دور",
    album_en: "Distant Horizons",
    cover: "https://picsum.photos/seed/song-golden/500/500",
    genre_fa: "ایندی پاپ",
    genre_en: "Indie Pop",
    duration: "4:02",
    releaseDate: "2026-06-20T00:00:00Z",
    trendScore: 89,
    streams: 5_100_000,
    whyTrending_fa:
      "همکاری غافلگیرکننده با یک دی‌جی شناخته‌شده در ریمیکس این آهنگ، توجه رسانه‌های موسیقی را دوباره جلب کرد.",
    whyTrending_en:
      "A surprise remix collaboration with a well-known DJ has re-ignited music-press attention around this track.",
    body_fa: [
      "این آهنگ با گیتار آکوستیک شروع می‌شود و به‌تدریج به یک قطعه پرانرژی‌تر تبدیل می‌شود.",
      "نسخه ریمیکس آن هم‌اکنون در چند پلی‌لیست رسمی پلتفرم‌های پخش موسیقی قرار گرفته است.",
    ],
    body_en: [
      "The track opens with acoustic guitar before building into a more energetic full-band arrangement.",
      "Its remix version is now featured on several official streaming-platform playlists.",
    ],
    socialBuzz: [
      {
        author: "MoodMixer",
        handle: "@moodmixer",
        text_fa: "ریمیکسش خیلی بهتر از نسخه اصلیه به نظرم!",
        text_en: "Honestly the remix might be better than the original!",
        likes: 265,
      },
    ],
    likes: 3010,
    commentsCount: 188,
  },
  {
    id: "iron-lullaby",
    title_fa: "لالایی آهنین",
    title_en: "Iron Lullaby",
    artist_fa: "گروه اونیکس",
    artist_en: "Onyx Collective",
    album_fa: "لالایی آهنین",
    album_en: "Iron Lullaby",
    cover: "https://picsum.photos/seed/song-iron/500/500",
    genre_fa: "راک آلترناتیو",
    genre_en: "Alt Rock",
    duration: "3:48",
    releaseDate: "2026-06-15T00:00:00Z",
    trendScore: 78,
    streams: 2_600_000,
    whyTrending_fa:
      "قرارگیری این آهنگ در تریلر یک بازی جهان‌باز پرطرفدار باعث شد میلیون‌ها بازیکن برای اولین‌بار آن را بشنوند.",
    whyTrending_en:
      "Placement in the trailer for a hit open-world game exposed the track to millions of first-time listeners.",
    body_fa: [
      "این تک‌آهنگ عنوان اصلی آلبوم جدید گروه اونیکس است و با ریف‌های گیتار سنگین شناخته می‌شود.",
      "منتقدان موسیقی آن را بازگشتی به سبک راک دهه ۹۰ با تولید صدای امروزی توصیف کرده‌اند.",
    ],
    body_en: [
      "The title track from Onyx Collective's new album, known for its heavy guitar riffs.",
      "Music critics have described it as a return to 90s rock sensibilities with a modern production sound.",
    ],
    socialBuzz: [
      {
        author: "RiffLordX",
        handle: "@rifflordx",
        text_fa: "وقتی این آهنگ توی تریلر بازی پخش شد، تنم لرزید.",
        text_en: "When this dropped in the game trailer I got chills.",
        likes: 190,
      },
    ],
    likes: 1740,
    commentsCount: 120,
  },
  {
    id: "paper-planets",
    title_fa: "سیاره‌های کاغذی",
    title_en: "Paper Planets",
    artist_fa: "سارا کیان",
    artist_en: "Sara Kian",
    album_fa: "سیاره‌های کاغذی",
    album_en: "Paper Planets",
    cover: "https://picsum.photos/seed/song-paper/500/500",
    genre_fa: "فولک مدرن",
    genre_en: "Modern Folk",
    duration: "3:10",
    releaseDate: "2026-06-10T00:00:00Z",
    trendScore: 68,
    streams: 1_400_000,
    whyTrending_fa:
      "متن ساده و صمیمی آهنگ درباره دوری از خانواده، در میان مخاطبان جوان بازتاب زیادی داشته است.",
    whyTrending_en:
      "Simple, heartfelt lyrics about being far from family have deeply resonated with younger listeners.",
    body_fa: [
      "سارا کیان در این آهنگ با صدای آرام و سازبندی مینیمال، حس دلتنگی برای خانه را روایت می‌کند.",
    ],
    body_en: [
      "With a soft voice and minimal instrumentation, Sara Kian captures the feeling of homesickness in this track.",
    ],
    socialBuzz: [
      {
        author: "HomeAwayHana",
        handle: "@hana_away",
        text_fa: "این آهنگ رو با گریه گوش دادم، دقیقا حس منو گفته.",
        text_en: "I cried listening to this, it says exactly how I feel.",
        likes: 310,
      },
    ],
    likes: 2210,
    commentsCount: 165,
  },
];

export const artists: Artist[] = [
  {
    id: "arman-roshan",
    name_fa: "آرمان روشن",
    name_en: "Arman Roshan",
    genre_fa: "پاپ الکترونیک",
    genre_en: "Electro Pop",
    avatar: "https://i.pravatar.cc/300?img=12",
    monthlyListeners: 3_200_000,
    bio_fa: "آرمان روشن، خواننده و آهنگ‌ساز، با ترکیب موسیقی الکترونیک و پاپ فارسی، در سال‌های اخیر یکی از پرشنونده‌ترین هنرمندان نسل جوان شده است.",
    bio_en:
      "Arman Roshan is a singer-songwriter blending electronic and Persian pop influences, becoming one of the most-streamed young artists in recent years.",
  },
  {
    id: "lilith-moore",
    name_fa: "لیلیت مور",
    name_en: "Lilith Moore",
    genre_fa: "ایندی پاپ",
    genre_en: "Indie Pop",
    avatar: "https://i.pravatar.cc/300?img=45",
    monthlyListeners: 2_100_000,
    bio_fa: "لیلیت مور با صدای مشخص و ترانه‌سرایی صادقانه، از صحنه‌های موسیقی مستقل به فهرست‌های پخش جهانی راه یافته است.",
    bio_en:
      "With a distinctive voice and candid songwriting, Lilith Moore has crossed over from the indie scene to global streaming playlists.",
  },
  {
    id: "onyx-collective",
    name_fa: "گروه اونیکس",
    name_en: "Onyx Collective",
    genre_fa: "راک آلترناتیو",
    genre_en: "Alt Rock",
    avatar: "https://i.pravatar.cc/300?img=33",
    monthlyListeners: 1_450_000,
    bio_fa: "گروه اونیکس یکی از شناخته‌شده‌ترین گروه‌های راک آلترناتیو دهه اخیر است که با ریف‌های قدرتمند گیتار شهرت دارد.",
    bio_en:
      "Onyx Collective is one of the decade's most recognized alt-rock bands, known for powerful guitar riffs.",
  },
  {
    id: "sara-kian",
    name_fa: "سارا کیان",
    name_en: "Sara Kian",
    genre_fa: "فولک مدرن",
    genre_en: "Modern Folk",
    avatar: "https://i.pravatar.cc/300?img=47",
    monthlyListeners: 890_000,
    bio_fa: "سارا کیان با صدایی آرام و ترانه‌های صمیمی درباره خانواده و مهاجرت، جامعه کوچک اما وفاداری از شنوندگان پیدا کرده است.",
    bio_en:
      "With a soft voice and intimate songs about family and migration, Sara Kian has built a small but devoted listener base.",
  },
];

export const albums: Album[] = [
  {
    id: "city-waves",
    title_fa: "امواج شهر",
    title_en: "City Waves",
    artist_fa: "آرمان روشن",
    artist_en: "Arman Roshan",
    cover: "https://picsum.photos/seed/album-city/500/500",
    year: 2026,
    trackCount: 11,
    genre_fa: "پاپ الکترونیک",
    genre_en: "Electro Pop",
  },
  {
    id: "distant-horizons",
    title_fa: "افق‌های دور",
    title_en: "Distant Horizons",
    artist_fa: "لیلیت مور",
    artist_en: "Lilith Moore",
    cover: "https://picsum.photos/seed/album-distant/500/500",
    year: 2026,
    trackCount: 9,
    genre_fa: "ایندی پاپ",
    genre_en: "Indie Pop",
  },
  {
    id: "iron-lullaby-album",
    title_fa: "لالایی آهنین",
    title_en: "Iron Lullaby",
    artist_fa: "گروه اونیکس",
    artist_en: "Onyx Collective",
    cover: "https://picsum.photos/seed/album-iron/500/500",
    year: 2026,
    trackCount: 10,
    genre_fa: "راک آلترناتیو",
    genre_en: "Alt Rock",
  },
  {
    id: "paper-planets-album",
    title_fa: "سیاره‌های کاغذی",
    title_en: "Paper Planets",
    artist_fa: "سارا کیان",
    artist_en: "Sara Kian",
    cover: "https://picsum.photos/seed/album-paper/500/500",
    year: 2026,
    trackCount: 8,
    genre_fa: "فولک مدرن",
    genre_en: "Modern Folk",
  },
];

export function getSong(id: string) {
  return songs.find((s) => s.id === id);
}

export function getTrendingSongs(limit = 6) {
  return [...songs].sort((a, b) => b.trendScore - a.trendScore).slice(0, limit);
}
