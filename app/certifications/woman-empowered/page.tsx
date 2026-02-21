import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Woman Empowered Enterprise | Pronama Infratel Pvt Ltd",
  description: "Woman Empowered Enterprise Certificate - Pronama Infratel Pvt Ltd",
};

export default function WomanEmpoweredCertificatePage() {
  const hasCertificate = false; // Set to true and add image to /certificates/woman-empowered.png when available

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Certifications", href: "/certifications" },
              { label: "Woman Empowered Enterprise" },
            ]}
          />
          <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Woman Empowered Enterprise
          </h1>
          <p className="mt-2 text-muted-foreground">
            Recognized as a woman-led business contributing to India&apos;s infrastructure development.
          </p>

          <Card className="mt-8 overflow-hidden">
            <CardContent className="p-0">
              {hasCertificate ? (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/certificates/woman-empowered.png"
                    alt="Woman Empowered Enterprise Certificate"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-muted">
                  <p className="text-muted-foreground">Certificate image coming soon.</p>
                </div>
              )}
            </CardContent>
          </Card>

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
