import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FaqSection() {
    const faqs = [
      {
        question: "How does Tiklog's delivery pricing work?",
        answer:
          "Tiklog uses a dynamic pricing model based on distance, package size, and delivery urgency. You'll see the exact price before confirming your order. We offer competitive rates and transparent pricing to ensure fair costs for both customers and delivery partners.",
      },
      {
        question: "What areas does Tiklog currently serve?",
        answer:
          "Tiklog currently operates in major cities across Nigeria, including Lagos, Abuja, Port Harcourt, and Ibadan. We're continuously expanding our service areas. Check our app or website for the most up-to-date coverage information.",
      },
      {
        question: "How can I track my delivery?",
        answer:
          "Once your delivery is confirmed, you'll receive a unique tracking code. You can use this code on our website or app to track your package in real-time. Our system provides updates at key stages of the delivery process, from pickup to drop-off.",
      },
      {
        question: "What if my package is damaged or lost during delivery?",
        answer:
          "Tiklog takes the safety of your packages seriously. In the rare event of damage or loss, please contact our customer support within 24 hours of the scheduled delivery time. We'll investigate the issue and provide appropriate compensation as per our delivery policy.",
      },
      {
        question: "How can I become a Tiklog delivery partner?",
        answer:
          "To become a Tiklog delivery partner, you need to be at least 18 years old, have a valid driver's license, and own a vehicle (motorcycle, car, or van). Sign up through our app or website, complete the verification process, and once approved, you can start accepting delivery requests.",
      },
      {
        question: "Does Tiklog offer same-day delivery?",
        answer:
          "Yes, Tiklog offers same-day delivery for orders placed before a certain cut-off time, typically around 10 AM. This service is available in select areas and for eligible items. Check the app or website for same-day delivery options when placing your order.",
      },
    ]    
  
    return (
      <section className="pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
  
            {/* Mobile Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-[#F6F8FA]">
                    <AccordionTrigger className="text-left text-lg font-semibold py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
  
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-x-16 gap-y-12">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  