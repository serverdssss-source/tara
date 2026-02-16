"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every 6 months for routine check-ups and cleanings. However, if you have specific dental concerns, more frequent visits may be necessary. Regular visits help detect issues early and maintain optimal oral health.",
  },
  {
    question: "Are dental treatments painful?",
    answer:
      "At TARA Dental, we prioritise your comfort. We use advanced anaesthesia techniques and gentle, anxiety-free care to ensure minimal discomfort during all procedures. Our team is trained to make every visit relaxing.",
  },
  {
    question: "How can I prevent cavities?",
    answer:
      "Maintaining good oral hygiene through regular brushing, flossing, and dental check-ups is key. We also recommend limiting sugary foods, using fluoride toothpaste, and getting professional cleanings to keep cavities at bay.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is safe when performed by qualified dentists. We use clinically tested products that effectively brighten your smile while protecting your enamel and gum tissue.",
  },
  {
    question: "Do you offer children's dental care?",
    answer:
      "Absolutely! We provide gentle, child-friendly dental care including regular check-ups, sealants, fluoride treatments, and early orthodontic assessments. Our team is experienced in making children feel comfortable.",
  },
  {
    question: "What are invisible aligners?",
    answer:
      "Invisible aligners are clear, removable orthodontic devices that gradually straighten teeth without the appearance of traditional braces. They are comfortable, discreet, and effective for mild to moderate alignment issues.",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With proper care and maintenance, dental implants can last a lifetime. They are designed as permanent replacements for missing teeth and have a success rate of over 95%. Regular dental visits help ensure their longevity.",
  },
  {
    question: "Do you handle dental emergencies?",
    answer:
      "Yes, we handle dental emergencies including severe toothaches, broken teeth, knocked-out teeth, and other urgent dental issues. Contact us immediately, and we will prioritise getting you the care you need.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#d2ceab]/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
              Common Queries
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Holistic Dentistry FAQs
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Have questions about our treatments? Find answers to the most
              commonly asked questions below. Feel free to contact us for
              anything else.
            </p>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-[#505b3f]/10"
                >
                  <AccordionTrigger className="text-left font-serif text-base text-foreground hover:text-[#505b3f] py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
