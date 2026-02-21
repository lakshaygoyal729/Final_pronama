import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Pronama Infratel Pvt Ltd",
  description:
    "Get in touch with Pronama Infratel for telecom infrastructure projects and tender enquiries. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-sidebar py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-sidebar-foreground sm:text-5xl text-balance">
                Get In Touch
              </h1>
              <p className="mt-6 text-lg text-sidebar-foreground/80 leading-relaxed">
                Have a query regarding telecom infrastructure projects or government 
                and private tenders? Send us a message and we will respond to your enquiry.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Company Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground">
                  Pronama Infratel Pvt Ltd
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A woman empowered telecom infrastructure service provider based in 
                  Delhi, India. We undertake telecom infrastructure projects for both 
                  government and private sector tenders.
                </p>

                {/* Address Card */}
                <Card className="mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Registered Office</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          317 Gupta Complex, Inderlok
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Delhi 110035, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Company Badge */}
                <Card className="mt-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Woman Empowered Enterprise</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Telecom Infrastructure Service Provider
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="mt-4">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Monday – Saturday
                        </p>
                        <p className="text-sm text-muted-foreground">
                          9:00 AM – 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time & WhatsApp */}
                <Card className="mt-4 border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                        <MessageCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">We respond within 24 hours</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          Prefer WhatsApp? Message us anytime.
                        </p>
                        <Link
                          href="https://wa.me/918178297956"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                        >
                          WhatsApp +91-8178297956
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy Notice */}
                <Card className="mt-4 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Contact Information</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          Our contact details are shared selectively for official 
                          communication only. Please use the form or WhatsApp to reach us.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeBmyl8To-T1O6DWoQAHfWRT-AqIeylVJfWw_TQLCDAcNEOQ/viewform?embedded=true" width="100%" height="956" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground">Our Location</h2>
              <p className="mt-2 text-muted-foreground">
                Registered office in Delhi, India
              </p>
            </div>
            <div className="mt-8">
              <Card className="overflow-hidden">
                <div className="flex h-64 items-center justify-center bg-sidebar sm:h-80">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-sidebar-primary" />
                    <p className="mt-4 text-lg font-medium text-sidebar-foreground">
                      317 Gupta Complex, Inderlok, Delhi 110035
                    </p>
                    <a
                      href="https://maps.google.com/?q=Inderlok+Delhi+110035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-sidebar-primary hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
