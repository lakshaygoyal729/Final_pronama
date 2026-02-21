import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ArrowRight, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Certifications | Pronama Infratel Pvt Ltd",
  description:
    "View our MSME, Woman Empowered Enterprise, and Government Recognized Startup certifications. Trusted and verified.",
  openGraph: {
    title: "Our Certifications | Pronama Infratel Pvt Ltd",
    description:
      "View our MSME, Woman Empowered Enterprise, and Government Recognized Startup certifications.",
  },
};

const certifications = [
  {
    title: "MSME Registered",
    description: "Micro, Small and Medium Enterprises registration certifying our commitment to small business excellence.",
    href: "/certifications/msme",
  },
  {
    title: "Woman Empowered Enterprise",
    description: "Recognized as a woman-led business contributing to India's infrastructure development.",
    href: "/certifications/woman-empowered",
  },
  {
    title: "Government Recognized Startup",
    description: "Officially recognized by the Government of India as an innovative startup.",
    href: "/certifications/government-startup",
  },
];

export default function CertificationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-sidebar py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Certifications" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">
                Trust & Compliance
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl text-balance">
                Our Certifications
              </h1>
              <p className="mt-6 text-lg text-sidebar-foreground/80 leading-relaxed">
                Pronama Infratel is a verified and certified telecom infrastructure provider. 
                View our official certifications below.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <Card
                  key={cert.href}
                  className="group transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BadgeCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-foreground">
                      {cert.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                    <Link
                      href={cert.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      View Certificate
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-lg border border-primary/20 bg-primary/5 p-8">
              <div className="flex items-start gap-4">
                <Award className="h-12 w-12 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Committed to Compliance
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Our certifications demonstrate our adherence to government regulations 
                    and commitment to quality standards. We participate in both government 
                    and private sector tenders with full compliance and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
