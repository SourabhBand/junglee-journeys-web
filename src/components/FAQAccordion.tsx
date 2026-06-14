'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  /** When provided, these render instead of the default homepage FAQs. */
  items?: FAQItem[];
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "How much does a tiger safari in India cost?",
    answer: "The actual cost depends on three things: which park, which lodge, and how long you go for. Premium lodges, peak season, and longer multi-park itineraries push the number up. Shoulder months and shorter single-park trips bring it down. Rather than quote a range that would be wrong for half our guests, we send a written and itemised quote within 24 hours of an enquiry. The quote is detailed enough that you can compare it line by line against any other operator's offer, and there is no deposit until you say yes.",
  },
  {
    question: "Will I actually see a tiger?",
    answer: "Probably. We do not guarantee wildlife sightings, because anyone who guarantees you a wild animal is selling you something we are not. Our guests see tigers on roughly 95% of trips, though, and that number is the result of ten years of knowing which park, which guide, which waterhole, and which hour. It is not luck.",
  },
  {
    question: "Which is the best tiger reserve in India?",
    answer: "Honestly, it depends on what you want. Bandhavgarh for the best odds. Ranthambore for the fort photographs. Tadoba for weekend access from Mumbai. Kanha for the meadow light and the classic experience. Asking which tiger reserve in India is best is a bit like asking which flavour of ice cream is best. Tell us what matters most to you and we will pick for you.",
  },
  {
    question: "Is an Indian safari like an African safari?",
    answer: "Different rhythm entirely. African safaris are about open savannah and large herds, and the wildlife essentially performs in the open. An Indian safari is about dense forest, hidden tigers, and the patience to wait for an animal that has very little interest in being watched. Both are extraordinary in their own ways. They are not interchangeable.",
  },
  {
    question: "How far ahead should I book?",
    answer: "Two to four weeks usually works. Peak season at Ranthambore (March to May) needs six to eight weeks because the permits are limited and the good lodges fill first. If your dates are inflexible, the earlier the better.",
  },
  {
    question: "Is it safe for solo travellers, including women?",
    answer: "Yes. A meaningful number of our guests come solo, and many of them are women travelling on their own. The guides are professional, the lodges are secure, and we are reachable by phone for the entire duration of the trip.",
  },
  {
    question: "What do I pack?",
    answer: "Khaki, olive, and brown for the game drives (no bright colours). Layers for the cold mornings (it can be 5 degrees in December at 5:30 AM). Comfortable walking shoes. A camera with a zoom lens if you want photographs. We send a complete packing list once you have booked.",
  },
  {
    question: "Can I add cultural sightseeing?",
    answer: "Yes, and we do this often. Panna pairs naturally with the Khajuraho temples. Satpura with the Mandu fort city. Ranthambore with Jaipur and the rest of the Golden Triangle. Tell us what else you want to see and we will fold it in.",
  },
  {
    question: "Photography-focused trips?",
    answer: "Yes. We run a dedicated photography expedition with guides who understand light, positioning, and animal behaviour at a serious level. A photography-focused safari in India is materially different from a generic one, and if you have brought serious equipment we will plan around it.",
  },
];

const answerComponents = {
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="font-serif text-[16px] text-[#081d01] leading-[160%] mb-3 last:mb-0">{children}</p>
  ),
  a: ({ children, href }: { children?: React.ReactNode; href?: string }) => {
    const cls = "text-[#c8841a] hover:text-[#e79e23] underline underline-offset-4 transition-colors";
    if (href && href.startsWith('/')) return <Link href={href} className={cls}>{children}</Link>;
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
    );
  },
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-[#081d01]">{children}</strong>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc ml-5 mb-3 space-y-1 font-serif text-[16px] text-[#081d01] leading-[160%]">{children}</ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
};

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = items && items.length > 0 ? items : DEFAULT_FAQS;

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={index} className="border-b border-[#081d01]/20">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
              className="w-full flex justify-between items-center py-6 text-left hover:opacity-70 transition"
            >
              <h3 className="font-serif font-semibold text-[18px] text-[#081d01] flex-1">
                {item.question}
              </h3>
              <span aria-hidden="true" className="text-[24px] text-[#081d01] ml-4 flex-shrink-0">
                {open ? '−' : '+'}
              </span>
            </button>
            {/* Answer stays in the DOM (collapsed via CSS) so it remains crawlable. */}
            <div
              id={`faq-panel-${index}`}
              className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-12">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={answerComponents}>
                    {item.answer}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
export { FAQAccordion };
