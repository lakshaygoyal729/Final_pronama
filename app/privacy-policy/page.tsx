import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Pronama Infratel Pvt Ltd website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="mt-4 text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN")}</p>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
              <p className="mt-2">
                When you contact us through our website form, we collect your name, email address, phone number, and any message you provide. This information is used solely to respond to your enquiries and provide requested services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
              <p className="mt-2">
                We use the information you provide to respond to your queries, process quote requests, and communicate about our services. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Data Security</h2>
              <p className="mt-2">
                We take reasonable measures to protect your personal information. Contact form submissions may be processed through third-party services (e.g., Google Forms) subject to their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Cookies</h2>
              <p className="mt-2">
                Our website may use cookies for analytics and improving user experience. You can disable cookies in your browser settings if you prefer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Contact Us</h2>
              <p className="mt-2">
                For any questions about this Privacy Policy, contact us at admin@pronama.in or +91-8178297956.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
