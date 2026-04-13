'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How much does a tiger safari in India cost?",
      answer: "The actual cost depends on three things: which park, which lodge, and how long you go for. Premium lodges, peak season, and longer multi-park itineraries push the number up. Shoulder months and shorter single-park trips bring it down. Rather than quote a range that would be wrong for half our guests, we send a written and itemised quote within 24 hours of an enquiry. The quote is detailed enough that you can compare it line by line against any other operator's offer, and there is no deposit until you say yes.",
    },
    {
      question: "Will I actually see a tiger?",
      answer: "Probably. We do not guarantee wildlife sightings, because anyone who guarantees you a wild animal is selling you something we are not. Our guests see tigers on roughly 95% of trips, though, and that number is the result of fifteen years of knowing which park, which guide, which waterhole, and which hour. It is not luck.",
    },
    {
      question: "Which is the best tiger reserve in India?",
      answer: "Honestly, it depends what you want. Bandhavgarh for the best odds. Ranthambore for the fort photographs. Tadoba for weekend access from Mumbai. Kanha for the meadow light and the classic experience. Tiger reserve India is not really a single thing, and asking which one is best is a bit like asking which flavour of ice cream is best. Tell us what matters most to you and we will pick for you.",
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

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border-b border-[#081d01]/20"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center py-6 text-left hover:opacity-70 transition"
          >
            <h3 className="font-serif font-semibold text-[18px] text-[#081d01] flex-1">
              {item.question}
            </h3>
            <span className="text-[24px] text-[#081d01] ml-4 flex-shrink-0">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-6 pr-12">
              <p className="font-serif text-[16px] text-[#081d01] leading-[160%]">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
