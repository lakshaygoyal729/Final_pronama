import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  FileCheck,
  Shield,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  Users,
  MapPin,
  Quote,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Telecom Infrastructure",
    description:
      "End-to-end telecom infrastructure project execution including tower installation, fiber optic networks, and network optimization.",
  },
  {
    icon: FileCheck,
    title: "Government & Private Tenders",
    description:
      "We participate in and execute telecom infrastructure projects under both government and private sector tenders with full compliance.",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Compliance First",
    description: "Full adherence to government regulations and tender requirements.",
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description: "Committed to completing projects within deadlines.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Professional processes ensuring highest quality standards.",
  },
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "MSME", label: "Registered" },
  { value: "Pan India", label: "Service Reach" },
  { value: "24 hrs", label: "Response Time" },
];

const processSteps = [
  { step: 1, title: "Consultation", desc: "Understand your requirements and project scope" },
  { step: 2, title: "Planning", desc: "Site survey, feasibility study, and detailed planning" },
  { step: 3, title: "Execution", desc: "Quality implementation with compliance monitoring" },
  { step: 4, title: "Handover", desc: "Documentation, training, and project closure" },
];

const testimonials = [
  {
    quote: "Professional execution and timely delivery. Pronama Infratel exceeded our expectations on the telecom infrastructure project.",
    author: "Government PSU Client",
    role: "Infrastructure Project Manager",
  },
  {
    quote: "Full compliance with tender specifications and responsive team. Highly recommended for telecom projects.",
    author: "Private Sector Client",
    role: "Network Operations",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-sidebar py-20 sm:py-28 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sidebar-primary/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-sidebar-primary/20 px-3 py-1 text-xs font-medium text-sidebar-primary">
                  Woman Empowered Enterprise
                </span>
                <span className="rounded-full bg-sidebar-primary/20 px-3 py-1 text-xs font-medium text-sidebar-primary">
                  MSME Registered
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl lg:text-6xl text-balance">
                Building India&apos;s Telecom Future
              </h1>
              <p className="mt-6 text-lg text-sidebar-foreground/80 leading-relaxed max-w-2xl">
                Pronama Infratel Pvt Ltd is a woman empowered telecom infrastructure
                service provider that undertakes telecom infrastructure projects for
                both government and private sector tenders.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent bg-transparent">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Banner */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border bg-card p-8">
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Trusted & Certified
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
                <Link href="/certifications/msme" className="flex items-center gap-2 text-foreground hover:text-primary">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="font-medium">MSME Registered</span>
                </Link>
                <Link href="/certifications/woman-empowered" className="flex items-center gap-2 text-foreground hover:text-primary">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Woman Empowered</span>
                </Link>
                <Link href="/certifications/government-startup" className="flex items-center gap-2 text-foreground hover:text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Govt. Recognized Startup</span>
                </Link>
                <Link href="/certifications" className="text-sm font-medium text-primary hover:underline">
                  View All →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                What We Offer
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Core Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                We provide telecom infrastructure project execution services
                for both government and private sector clients.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-muted py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                How We Work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Process
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  {item.step < 4 && (
                    <div className="absolute top-6 left-14 hidden h-0.5 w-full bg-border lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Why Pronama Infratel
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Telecom Infrastructure Service Provider
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We undertake telecom infrastructure projects for both government and
                  private sector tenders, providing reliable execution and full compliance
                  with tender requirements.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Participation in government and private tenders",
                    "Telecom infrastructure project execution",
                    "Compliance with tender requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/about">
                      About Our Company
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-1">
                {whyChooseUs.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Client Feedback
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <Card key={t.author}>
                  <CardContent className="p-6">
                    <Quote className="h-10 w-10 text-primary/30" />
                    <p className="mt-4 text-muted-foreground leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4">
                      <p className="font-medium text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Ready to Start Your Next Project?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed">
                Contact us today for a detailed discussion about your infrastructure needs
                and receive a customized proposal. We respond within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us Today</Link>
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
