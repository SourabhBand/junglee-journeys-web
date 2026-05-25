/**
 * Google Form iframe for the Enquire page.
 *
 * To activate: replace GOOGLE_FORM_EMBED_URL with the real form URL from
 * Google Forms (Send → embed icon, the src attribute of the iframe).
 * Ends in `viewform?embedded=true`.
 */

const GOOGLE_FORM_EMBED_URL = "";

export function EnquiryFormEmbed() {
  if (!GOOGLE_FORM_EMBED_URL) {
    return (
      <section
        id="enquiry-form"
        className="max-w-4xl mx-auto px-6 md:px-8 mb-12"
      >
        <div className="rounded-[9px] border border-[#081d01]/10 bg-[#ede4d1]/40 p-10 md:p-14 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.25em] text-[#081d01]/45 mb-3">
            Enquiry form
          </p>
          <h3 className="font-serif font-semibold text-[20px] md:text-[22px] text-[#081d01] mb-3 leading-tight">
            Form coming soon
          </h3>
          <p className="font-serif text-[15px] md:text-[16px] text-[#081d01]/70 leading-relaxed max-w-[500px] mx-auto">
            In the meantime, send us your dates and preferred park via WhatsApp,
            phone, or email below.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="enquiry-form"
      className="max-w-4xl mx-auto px-6 md:px-8 mb-12"
    >
      <div className="rounded-[9px] overflow-hidden border border-[#081d01]/10 bg-white">
        <iframe
          src={GOOGLE_FORM_EMBED_URL}
          width="100%"
          height={1100}
          loading="lazy"
          title="Junglee Journeys enquiry form"
          className="w-full block border-0"
        >
          Loading enquiry form…
        </iframe>
      </div>
    </section>
  );
}
