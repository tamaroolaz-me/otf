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
  youtubeId?: string;
  downloads?: Array<{ label: string; href: string }>;
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
    thumbnail: "/images/call-to-courage.png",
    href: "https://www.netflix.com/title/81010166",
    isExternal: true,
    featured: true,
    cost: "Netflix subscription",
    timeToComplete: "1h 16m",
  },
  {
    slug: "locating-yourself-above-or-below-the-line",
    title: "Locating yourself above or below the line",
    category: "Watch",
    description:
      "One of the most useful things you can do before a feedback conversation takes almost no time at all. You just need to ask yourself one honest question: where am I right now?",
    detailDescription: `One of the most useful things you can do before a feedback conversation takes almost no time at all. You just need to ask yourself one honest question: where am I right now?

This is the "above or below the line" framework, drawn from Conscious Leadership. It's a simple way to describe the mental and emotional state you're operating from at any given moment. And it turns out, that state matters far more than most people realise when it comes to how a feedback conversation will go.

---

## What the line means

Think of a horizontal line dividing two ways of showing up.

**Above the line**, you're open. You're curious about what someone is telling you, willing to take responsibility for your part, and genuinely interested in learning. You might not love what you're hearing, but you're present enough to actually receive it.

**Below the line**, you're in protection mode. Your nervous system has decided there's a threat, and it's doing exactly what it evolved to do: defend. You might notice yourself shutting down, looking for flaws in the feedback, rehearsing your counter-argument, or going quiet in a way that looks calm but isn't.

Neither state is a moral failing. Below the line is not a character flaw. It's an ancient biological response that kept your ancestors alive. The problem is that it doesn't serve you in a feedback conversation. You can't take in useful information when your system is working hard to protect you from it.

---

## What above the line looks like in practice

When you're above the line, you tend to:

- Ask genuine questions instead of defensive ones. You want to understand, not to catch the other person out.
- Own your part in a situation rather than looking for where the blame lands elsewhere.
- Stay present. You're listening to what's being said rather than preparing your response.
- Approach the conversation with a real interest in what you might learn, even when it's uncomfortable.

This doesn't mean being passive or agreeing with everything. You can be above the line and still push back. The difference is that your pushback comes from curiosity rather than fear.

---

## What below the line looks like in practice

When you're below the line, you tend to:

- Get defensive quickly, even before the other person has finished speaking.
- Blame the situation, the other person, or circumstances rather than exploring your own role.
- Focus on why the feedback is wrong, unfair, or doesn't apply to you.
- Shut down or go through the motions of listening without actually taking anything in.

These responses feel completely reasonable in the moment. That's the tricky part. Your brain isn't trying to sabotage you. It genuinely believes it's protecting you. But in a feedback conversation, protection and growth pull in opposite directions.

---

## The first step: locate yourself

Before anything else, you need to know where you are. Not to judge yourself for it. Just to see it clearly.

Ask yourself: am I open right now, or am I defended?

You don't need to analyse why. You don't need to fix it immediately. You just need an honest read on your current state. The awareness itself is useful. It creates just enough distance between your emotional reaction and your next action that you have a real choice about what to do.

Some useful signals to watch for:

**In your body:** tension in your jaw or shoulders, a tight chest, shallow breathing, the urge to lean back or physically close off.

**In your thoughts:** a strong pull toward "but" and "however," planning what you'll say rather than listening to what's being said, mentally cataloguing reasons why the feedback is wrong.

**In your behaviour:** shorter responses, less eye contact, a flat or over-controlled tone, the feeling of watching yourself from a slight distance.

If you notice any of these, you're probably below the line. That's useful information. What you do with it is up to you.

---

## What to do once you've located yourself

This is where the framework gets practical.

### Option 1: Stay and shift

If you're only a little below the line, sometimes acknowledging it internally is enough to bring you back. Take a breath. Slow down. Remind yourself that feedback is information, not a verdict. Ask a question you're genuinely curious about rather than one designed to challenge.

The shift doesn't have to be dramatic. Even moving from "how do I defend this" to "what is this person actually trying to tell me" is significant.

### Option 2: Name it

If you trust the other person enough, you can say it out loud. Something like "I notice I'm feeling a bit defensive right now" or "I want to make sure I'm hearing this properly and I don't think I'm quite there yet." This kind of honesty usually makes the conversation better, not worse. It signals self-awareness. It slows things down in a good way.

### Option 3: Postpone

This one is underused. If you're well below the line, especially when you're about to receive difficult feedback, the most productive thing you can do is not have the conversation yet.

A conversation you're not ready for rarely goes well. You might hear the words, but you won't actually take them in. You'll walk away with your defences confirmed rather than your thinking expanded.

It's completely reasonable to say: "I want to give this the attention it deserves. Can we find a time in the next day or two when I've had a chance to think?"

You're not avoiding the conversation. You're choosing a version of it that will actually work.

---

## Using this framework with your team

Once you know this framework, you can bring it into team culture in a way that makes feedback conversations consistently better.

Before you start a feedback conversation with someone, check in. Ask them: "Is this a good time for you?"

It sounds almost too simple. But you're essentially asking whether they're above or below the line without requiring them to know the framework or the language. You're giving them permission to say no, to ask for more time, to show up as a full person rather than a performing one.

If you share the framework explicitly with your team, the check-in becomes even more direct. "I want to share some feedback. Where are you right now, and is this a good moment?"

Two minutes of that question can save you from a conversation that goes nowhere, or worse, one that damages trust.

---

## Try this

The next time you're about to give or receive feedback, pause for ten seconds before the conversation starts. Ask yourself where you are. If you're above the line, go ahead. If you're below, decide whether to shift, name it, or postpone.

And if you're working with a team, introduce the language this week. You don't need a training session. You just need to start asking the question.`,
    thumbnail: "https://img.youtube.com/vi/fLqzYDZAqCI/maxresdefault.jpg",
    href: "https://www.youtube.com/watch?v=fLqzYDZAqCI",
    youtubeId: "fLqzYDZAqCI",
    isExternal: true,
    featured: true,
    cost: "Free",
    timeToComplete: "3.5 min",
    downloads: [
      { label: "Above or Below the Line worksheet", href: "/downloads/above-below-the-line.pdf" },
    ],
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
    thumbnail: "/images/thanks-for-the-feedback.png",
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
    thumbnail: "/images/radical-candor-book.png",
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
    thumbnail: "/images/four-agreements.png",
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
    thumbnail: "/images/drive-book.png",
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
    thumbnail: "/images/thinking-fast-and-slow.png",
    href: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
    isExternal: true,
    featured: false,
    cost: "~$17",
    timeToComplete: "~15 hours",
  },
];
