import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Pronama Infratel's telecom infrastructure services, government tenders, and project execution.",
};

const faqs = [
  {
    q: "What services does Pronama Infratel offer?",
    a: "We offer end-to-end telecom infrastructure project execution including tower installation, fiber optic cable laying, BTS installation, network optimization, and site surveys. We also participate in and execute projects under both government and private sector tenders.",
  },
  {
    q: "Do you work with government tenders?",
    a: "Yes. We actively participate in government telecom tenders and execute projects with full compliance to tender requirements and specifications. We maintain transparency in all business dealings with government departments.",
  },
  {
    q: "What certifications does Pronama Infratel hold?",
    a: "We are MSME registered, recognized as a Woman Empowered Enterprise, and a Government of India recognized startup. You can view our certificates in the Certifications section.",
  },
  {
    q: "What is your typical project turnaround time?",
    a: "Project timelines depend on scope and complexity. We provide detailed timelines during the consultation phase and are committed to on-time delivery. Contact us for a customized proposal.",
  },
  {
    q: "How can I request a quote?",
    a: "You can fill out the contact form on our Contact page, call us at +91-8178297956, or reach out via WhatsApp. We typically respond within 24 hours.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Delhi and serve clients across India. Our expertise spans telecommunications, government PSUs, power & energy, IT, defence, railways, smart cities, and private enterprises.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-sidebar py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">
                Support
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl text-balance">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg text-sidebar-foreground/80 leading-relaxed">
                Find answers to common questions about our telecom infrastructure services and tender execution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-12 text-center text-sm text-muted-foreground">
              Still have questions?{" "}
              <a href="/contact" className="font-medium text-primary hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
