import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  FileCheck,
  Shield,
  Clock,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Pronama Infratel Pvt Ltd",
  description:
    "Explore our comprehensive telecom infrastructure and government tender services. End-to-end solutions for your infrastructure needs.",
};

const mainServices = [
  {
    icon: Building2,
    title: "Telecom Infrastructure Project Execution",
    description:
      "Complete end-to-end telecom infrastructure solutions from planning to execution and maintenance.",
    features: [
      "Tower installation and commissioning",
      "Fiber optic cable laying and splicing",
      "BTS installation and configuration",
      "Network optimization services",
      "Site survey and feasibility studies",
      "Civil and electrical infrastructure",
    ],
  },
  {
    icon: FileCheck,
    title: "Government & Private Tender Services",
    description:
      "We participate in and execute telecom infrastructure projects under both government and private sector tenders.",
    features: [
      "Government telecom tenders",
      "Private sector telecom tenders",
      "Tender document preparation",
      "Compliance documentation",
      "Project execution after award",
      "Reporting and documentation",
    ],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Full Compliance",
    description: "All projects executed with complete regulatory compliance.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed timelines with proactive project management.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Professional processes ensuring consistent quality.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sidebar py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">
                Our Services
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl text-balance">
                Comprehensive Infrastructure Solutions
              </h1>
              <p className="mt-6 text-lg text-sidebar-foreground/80 leading-relaxed">
                We undertake telecom infrastructure projects for both government and 
                private sector tenders.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Button asChild>
                        <Link href="/contact">
                          Enquire Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <Card className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Offerings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="bg-muted py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Commitment
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose Our Services
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors We Serve */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Industries
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sectors We Serve
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our expertise spans across multiple sectors, delivering customized 
                solutions for diverse industry requirements.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "Telecommunications",
                "Government PSUs",
                "Power & Energy",
                "IT & Technology",
                "Defence",
                "Railways",
                "Smart Cities",
                "Private Enterprises",
              ].map((sector) => (
                <Card key={sector}>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-center font-medium text-foreground">{sector}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Answers</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Service FAQs
              </h2>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible>
                <AccordionItem value="faq-1">
                  <AccordionTrigger>What is the typical timeline for telecom infrastructure projects?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Project timelines vary by scope. We provide detailed schedules during consultation. Typical tower installations take 4-8 weeks; fiber laying projects may span 2-6 months depending on distance and terrain.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger>Do you handle both government and private tenders?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. We participate in and execute projects under both government and private sector tenders with full compliance to specifications and documentation requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger>What compliance documentation do you provide?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide complete tender compliance documentation, project reports, and handover documentation. All work adheres to regulatory and tender requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger>How do I get a project quote?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Contact us via the form on our Contact page, call +91-8178297956, or WhatsApp. We respond within 24 hours with an initial assessment and schedule a detailed discussion for customized proposals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Need a Custom Solution?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed">
                Contact our team to discuss your specific requirements and receive 
                a tailored proposal for your project.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Request Proposal</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <a href="tel:+91-8178297956">Call +91-8178297956</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
