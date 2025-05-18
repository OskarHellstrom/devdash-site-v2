import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does your no-upfront-cost model work?",
      answer: "Instead of charging for development, we build your product and create a partnership where we both benefit from its success. This might be through revenue sharing, equity, or other mutually beneficial arrangements we'll discuss based on your specific project."
    },
    {
      question: "What types of projects do you take on?",
      answer: "We specialize in innovative tech solutions, particularly those leveraging AI, web applications, and software platforms. We're most interested in projects with real-world impact and market potential."
    },
    {
      question: "How long does the development process take?",
      answer: "Project timelines vary based on complexity and scope, but we typically aim to deliver an initial, functional version of your product within 2-3 months. We'll provide a more specific timeline after discussing your project details."
    },
    {
      question: "What happens after the project is built?",
      answer: "We believe in long-term partnerships. After launch, we continue improving the product based on user feedback and market response. Our success is tied to yours, so we're committed to ongoing development and growth."
    },
    {
      question: "What information do you need to evaluate my idea?",
      answer: "We need a clear description of your concept, the problem it solves, your target audience, and your vision for its impact. The more detail you can provide, the better we can assess if it's a good fit for our collaborative approach."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden opacity-0 animate-fade-in bg-white"
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/5">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
