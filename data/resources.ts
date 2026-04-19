export interface Resource {
  slug: string;
  title: string;
  category: "Watch" | "Listen" | "Read" | "Tool";
  description: string;
  detailDescription: string;
  thumbnail: string;
  href: string;
  isExternal: boolean;
  featured: boolean;
  cost: string;
  timeToComplete: string;
  author?: string;
}

export const CATEGORY_META: Record<string, { emoji: string; label: string }> = {
  Watch: { emoji: "📺", label: "Watch" },
  Listen: { emoji: "🎧", label: "Listen" },
  Read: { emoji: "📖", label: "Read" },
  Tool: { emoji: "🛠️", label: "Tool" },
};

export const resources: Resource[] = [
  {
    slug: "call-to-courage",
    title: "The Call to Courage",
    category: "Watch",
    author: "Brené Brown",
    description:
      "Brené Brown explores what it means to choose courage over comfort and show up even when it feels risky.",
    detailDescription:
      "In this Netflix special, Brené Brown delivers one of her most personal and direct talks on vulnerability, courage, and what it truly means to show up. Drawing on years of research and her own lived experience, she makes the case that courage and vulnerability are inseparable. Real connection requires the willingness to be seen.\n\nThis is essential viewing for anyone who wants to lead with authenticity, give and receive feedback more honestly, or simply understand why vulnerability isn't weakness. Brown's storytelling is warm, funny, and surprisingly confronting in the best way.\n\nAt just over an hour, it's one of the best investments of your time. Watch it alone or use it as a conversation starter with your team.",
    thumbnail: "https://placehold.co/600x400/15803d/ffffff?text=The+Call+to+Courage",
    href: "https://www.netflix.com/title/81010166",
    isExternal: true,
    featured: true,
    cost: "Netflix subscription",
    timeToComplete: "1h 16m",
  },
  {
    slug: "leading-above-the-line",
    title: "Leading Above the Line",
    category: "Listen",
    description:
      "A podcast for leaders who are serious about growth and want to build cultures where honest feedback is the norm.",
    detailDescription:
      "Leading Above the Line is a podcast designed for managers and leaders who are serious about their own growth. Each episode explores themes like psychological safety, honest communication, and what separates good leaders from great ones.\n\nIt's practical, conversational, and grounded in real leadership challenges rather than theory. The hosts bring in guests with a range of perspectives, so episodes vary in tone and focus. Scan the titles to find what's most relevant to where you are right now.\n\nWhether you're commuting or working out, this is a reliable way to keep learning without carving out extra time in your week. New episodes drop regularly, so there's always something new to come back to.",
    thumbnail: "https://placehold.co/600x400/166534/ffffff?text=Leading+Above+the+Line",
    href: "https://leadingabovetheline.com",
    isExternal: true,
    featured: true,
    cost: "Free",
    timeToComplete: "Ongoing",
  },
  {
    slug: "thanks-for-the-feedback",
    title: "Thanks for the Feedback",
    category: "Read",
    author: "Douglas Stone & Sheila Heen",
    description:
      "A practical guide to receiving feedback well, even when it's poorly delivered or feels unfair.",
    detailDescription:
      "Most books on feedback focus on how to give it. This one focuses on how to receive it. That turns out to be far harder and far more important. Stone and Heen break down why we resist feedback (even when we want to grow) and give concrete tools for pulling value from any kind of feedback, including the kind that feels wrong or unfair.\n\nIf you've ever shut down during a difficult conversation, or wished feedback didn't sting so much, this book will change how you see those moments. The authors identify three distinct types of feedback (evaluation, coaching, and appreciation) and explain why we often receive one when we wanted another.\n\nIt's the most practical book on the subject I've found, and I recommend it to almost everyone regardless of where they are in their career.",
    thumbnail: "https://placehold.co/600x400/14532d/ffffff?text=Thanks+for+the+Feedback",
    href: "https://www.amazon.com/Thanks-Feedback-Science-Receiving-Well/dp/0670014664",
    isExternal: true,
    featured: true,
    cost: "~$15",
    timeToComplete: "~8 hours",
  },
  {
    slug: "radical-candor",
    title: "Radical Candor",
    category: "Read",
    author: "Kim Scott",
    description:
      "Kim Scott's framework for caring personally while challenging directly. Essential reading for managers.",
    detailDescription:
      "Radical Candor introduces a simple but powerful idea: the best managers care personally about their people while still challenging them directly. Scott draws on her experience at Google and Apple to show what this looks like in practice, and what goes wrong when leaders are either too harsh or too nice.\n\nThe book is full of real examples and gives you language for conversations that most people avoid. Scott's core framework plots how much you care personally against how directly you challenge people. It sounds obvious until you mark your own behaviour on it.\n\nWhether you're a new manager or a seasoned leader, it will sharpen how you think about feedback, relationships, and what it means to truly support someone's growth.",
    thumbnail: "https://placehold.co/600x400/16a34a/ffffff?text=Radical+Candor",
    href: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375",
    isExternal: true,
    featured: false,
    cost: "~$15",
    timeToComplete: "~7 hours",
  },
  {
    slug: "the-four-agreements",
    title: "The Four Agreements",
    category: "Read",
    author: "Don Miguel Ruiz",
    description:
      "Four deceptively simple principles that transform how you communicate, interpret, and respond to others.",
    detailDescription:
      "The Four Agreements is a short but surprisingly deep book built around four principles: be impeccable with your word, don't take anything personally, don't make assumptions, and always do your best. Each one sounds simple until you try to actually live by it.\n\nIn the context of feedback, the second agreement (don't take anything personally) is quietly radical. It reframes how you receive even harsh or unfair feedback, and makes it much easier to hear what's actually useful without getting derailed by what isn't.\n\nA quick read with ideas that stick for years. If you only have a few hours, this is worth prioritising over longer, denser books on a similar theme.",
    thumbnail: "https://placehold.co/600x400/15803d/ffffff?text=The+Four+Agreements",
    href: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319",
    isExternal: true,
    featured: false,
    cost: "~$12",
    timeToComplete: "~3 hours",
  },
  {
    slug: "drive",
    title: "Drive",
    category: "Read",
    author: "Daniel H. Pink",
    description:
      "Daniel Pink reframes what actually motivates people and why traditional reward systems often backfire.",
    detailDescription:
      "Drive challenges the assumption that people are primarily motivated by external rewards like money and status. Pink draws on decades of behavioural science to show that autonomy, mastery, and purpose are the real drivers of sustained performance. This is especially true for complex, creative work.\n\nFor anyone thinking about feedback culture, this book provides essential context. It explains why feedback tied to performance reviews often demotivates people, and what kinds of feedback actually help people grow. The research on intrinsic vs. extrinsic motivation is surprising and, once you see it, hard to unsee.\n\nIt's well-written, full of surprising research, and practical enough to apply immediately whether you're leading a team or thinking about your own development.",
    thumbnail: "https://placehold.co/600x400/166534/ffffff?text=Drive",
    href: "https://www.amazon.com/Drive-Surprising-Truth-About-Motivates/dp/1594484805",
    isExternal: true,
    featured: false,
    cost: "~$15",
    timeToComplete: "~6 hours",
  },
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    category: "Read",
    author: "Daniel Kahneman",
    description:
      "Nobel laureate Daniel Kahneman reveals the two systems that drive how we think and where we go wrong.",
    detailDescription:
      "This is one of the most important books written on human decision-making. Kahneman introduces the idea of System 1 (fast, intuitive, automatic) and System 2 (slow, deliberate, effortful) thinking, and shows how the interplay between them shapes every judgment and decision we make.\n\nFor feedback, this matters enormously. Most of our reactions to feedback are System 1: fast, emotional, and often inaccurate. Understanding this doesn't make you immune to bias, but it gives you a framework for slowing down at the moments that matter most.\n\nDense in places, but deeply rewarding. This isn't a quick read, but it's one that fundamentally changes how you understand yourself and others.",
    thumbnail: "https://placehold.co/600x400/14532d/ffffff?text=Thinking+Fast+and+Slow",
    href: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
    isExternal: true,
    featured: false,
    cost: "~$17",
    timeToComplete: "~15 hours",
  },
];
