export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text_fa: string;
  text_en: string;
  created_at: string;
  likes: number;
  replies?: Comment[];
}

// A generic, realistic comment thread reused (with slight variation) across detail pages.
export const baseComments: Comment[] = [
  {
    id: "c1",
    author: "Reza Kamali",
    avatar: "https://i.pravatar.cc/150?img=8",
    text_fa: "خیلی جالب بود، منتظر ادامه‌ی این موضوع هستم. کسی منبع اصلی رو داره؟",
    text_en: "Really interesting piece, looking forward to the follow-up. Does anyone have the primary source?",
    created_at: "2026-07-05T09:10:00Z",
    likes: 84,
    replies: [
      {
        id: "c1r1",
        author: "Niloofar A.",
        avatar: "https://i.pravatar.cc/150?img=32",
        text_fa: "توی لینک منبع همین مقاله هست، اولین پاراگراف رو ببین.",
        text_en: "It's linked in the source of this very article, check the first paragraph.",
        created_at: "2026-07-05T09:25:00Z",
        likes: 21,
      },
    ],
  },
  {
    id: "c2",
    author: "Emma Souza",
    avatar: "https://i.pravatar.cc/150?img=20",
    text_fa: "من یکم نسبت به این خبر شکاک هستم، باید منتظر تاییدیه رسمی بمونیم.",
    text_en: "I'm a bit skeptical about this one, would want to wait for official confirmation.",
    created_at: "2026-07-05T08:40:00Z",
    likes: 46,
  },
  {
    id: "c3",
    author: "پویا مرادی",
    avatar: "https://i.pravatar.cc/150?img=15",
    text_fa: "این دقیقا همون چیزیه که چند وقت پیش پیش‌بینی کرده بودم! خوشحالم که درست از آب دراومد.",
    text_en: "This is exactly what I predicted a while back! Glad to see it play out.",
    created_at: "2026-07-05T07:55:00Z",
    likes: 133,
    replies: [
      {
        id: "c3r1",
        author: "Jonas W.",
        avatar: "https://i.pravatar.cc/150?img=51",
        text_fa: "کجا این پیش‌بینی رو نوشته بودی؟ لینکش رو بذار.",
        text_en: "Where did you post that prediction? Would love to see it.",
        created_at: "2026-07-05T08:02:00Z",
        likes: 12,
      },
      {
        id: "c3r2",
        author: "پویا مرادی",
        avatar: "https://i.pravatar.cc/150?img=15",
        text_fa: "توی کامنت‌های هفته پیش همین سایت گفته بودم :)",
        text_en: "In the comments here last week actually :)",
        created_at: "2026-07-05T08:10:00Z",
        likes: 9,
      },
    ],
  },
  {
    id: "c4",
    author: "Hana Vahedi",
    avatar: "https://i.pravatar.cc/150?img=44",
    text_fa: "ممنون از پوشش خوب و بی‌طرفانه. کمتر جایی این‌قدر شفاف می‌نویسه.",
    text_en: "Thanks for the balanced coverage, not many outlets are this transparent about it.",
    created_at: "2026-07-04T22:30:00Z",
    likes: 58,
  },
];
