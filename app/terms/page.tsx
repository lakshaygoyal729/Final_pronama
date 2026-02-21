import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Pronama Infratel Pvt Ltd website.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]} />
          <h1 className="mt-4 text-3xl font-bold text-foreground">Terms of Use</h1>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN")}</p>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing and using the Pronama Infratel Pvt Ltd website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Use of Website</h2>
              <p className="mt-2">
                This website is provided for informational purposes about our telecom infrastructure and tender execution services. You may not use this website for any unlawful purpose or in a way that could damage, disable, or impair the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Intellectual Property</h2>
              <p className="mt-2">
                All content on this website, including text, images, and logos, is the property of Pronama Infratel Pvt Ltd and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Contact and Quotations</h2>
              <p className="mt-2">
                Contact form submissions and quote requests do not create a binding contract. Formal agreements are subject to separate terms and conditions agreed upon during project engagement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Contact Us</h2>
              <p className="mt-2">
                For questions about these Terms of Use, contact us at admin@pronama.in or +91-8178297956.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
