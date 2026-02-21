import Link from "next/link";
import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  ArrowRight,
  Award,
  Zap,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Pronama Infratel Pvt Ltd",
  description:
    "Learn about Pronama Infratel Pvt Ltd - A telecom infrastructure and manpower outsourcing company serving government and private sector clients across India.",
};

const timeline = [
  { year: "2020", title: "Company Founded", desc: "Pronama Infratel established as a woman empowered enterprise." },
  { year: "2021", title: "MSME Registration", desc: "Achieved MSME certification and began government tender participation." },
  { year: "2023", title: "Government Recognition", desc: "Recognized as a Government of India startup." },
  { year: "Present", title: "Pan-India Presence", desc: "Serving clients across India with telecom infrastructure projects." },
];

const differentiators = [
  { icon: Zap, title: "Agile Execution", desc: "Flexible project management adapted to client needs." },
  { icon: Shield, title: "100% Compliance", desc: "Full adherence to tender and regulatory requirements." },
  { icon: Award, title: "Certified & Verified", desc: "MSME, Woman Empowered, and Govt. Recognized Startup." },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every project, ensuring the highest standards of quality and performance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We conduct business with complete transparency and ethical practices, building trust with every stakeholder.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients and partners to deliver solutions that exceed expectations.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sidebar py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">
                About Us
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl text-balance">
                A Woman Empowered Enterprise
              </h1>
              <p className="mt-6 text-lg text-sidebar-foreground/80 leading-relaxed">
                Pronama Infratel Pvt Ltd is a woman empowered telecom infrastructure 
                service provider based in Delhi. We support and execute telecom 
                infrastructure projects under both government and private telecom tenders.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pronama Infratel Pvt Ltd is a woman empowered telecom infrastructure 
                  service provider that undertakes projects for both government and 
                  private sector tenders. We are based in Delhi, India.
                </p>
                <p>
                  As a woman empowered enterprise, we are proud to contribute to 
                  India&apos;s telecom infrastructure development. We participate in 
                  government and private telecom tenders and execute projects with 
                  full compliance to tender requirements and specifications.
                </p>
                <p>
                  We are committed to delivering quality work and maintaining transparency 
                  in all our business dealings with government departments and private 
                  enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Company Milestones
            </h2>
            <div className="mt-12 space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Edge</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why We&apos;re Different
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {differentiators.map((d) => (
                <Card key={d.title}>
                  <CardContent className="p-6">
                    <d.icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-muted py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To be India&apos;s most trusted infrastructure partner, driving digital 
                    connectivity and employment opportunities across the nation while 
                    maintaining unwavering commitment to quality and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    To deliver exceptional telecom infrastructure solutions and skilled 
                    workforce that enable our clients to achieve their objectives efficiently, 
                    while creating sustainable value for all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                What Drives Us
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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
                Partner With Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed">
                Join hands with Pronama Infratel for your next infrastructure project 
                and experience the difference of working with a trusted partner.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
