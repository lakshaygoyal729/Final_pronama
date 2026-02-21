import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Government Recognized Startup | Pronama Infratel Pvt Ltd",
  description: "Government Recognized Startup Certificate - Pronama Infratel Pvt Ltd",
};

export default function GovernmentStartupCertificatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Certifications", href: "/certifications" },
              { label: "Government Recognized Startup" },
            ]}
          />
          <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Government Recognized Startup
          </h1>

          <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Government.jpeg"
                alt="Government Recognized Startup Certificate - Pronama Infratel Pvt Ltd"
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
          <Link
            href="/certifications"
            className="mt-8 inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            ← Back to Certifications
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
