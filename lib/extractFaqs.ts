/** Strip common inline markdown for FAQ schema `text` fields. */
function faqAnswerToPlainText(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

const FAQ_SECTION_HEADING = "## Frequently Asked Questions";

/**
 * Parses `### Question` / answer blocks under ## Frequently Asked Questions.
 * Used for FAQPage JSON-LD (SEO / AEO) without duplicating content in frontmatter.
 */
export function extractFaqsFromMdx(content: string): Array<{
  question: string;
  answer: string;
}> {
  const markerIndex = content.indexOf(FAQ_SECTION_HEADING);
  if (markerIndex === -1) return [];

  let section = content.slice(markerIndex + FAQ_SECTION_HEADING.length);
  const nextSection = section.search(/\n## (?![#])/);
  if (nextSection !== -1) {
    section = section.slice(0, nextSection);
  }

  const faqs: Array<{ question: string; answer: string }> = [];

  for (const block of section.split(/\n### /)) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    const newline = trimmed.indexOf("\n");
    if (newline === -1) continue;

    const question = trimmed.slice(0, newline).trim();
    const answerMd = trimmed.slice(newline + 1).trim();
    const answer = faqAnswerToPlainText(answerMd);

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}
