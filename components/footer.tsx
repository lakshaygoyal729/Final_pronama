import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const services = [
  "Telecom Infrastructure",
  "Manpower Outsourcing",
  "Government Tenders",
  "Project Execution",
];

const certifications = [
  { label: "MSME Registered", href: "/certifications/msme" },
  { label: "Woman Empowered Enterprise", href: "/certifications/woman-empowered" },
  { label: "Government Recognized Startup", href: "/certifications/government-startup" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-primary">
                <span className="text-lg font-bold text-sidebar-primary-foreground">PI</span>
              </div>
              <div>
                <span className="text-lg font-bold">Pronama Infratel</span>
                <span className="block text-xs text-sidebar-foreground/70">Pvt Ltd</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-sidebar-foreground/80 leading-relaxed">
              Leading provider of telecom infrastructure solutions and manpower outsourcing services. Trusted partner for government and private sector projects across India.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Certifications</h3>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert.href}>
                  <Link
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary"
                  >
                    {cert.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sidebar-primary" />
                <span className="text-sm text-sidebar-foreground/80">
                  317 Gupta Complex, Inderlok, Delhi 110035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-sidebar-primary" />
                <span className="text-sm text-sidebar-foreground/80">
                  Mon – Sat, 9 AM – 6 PM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sidebar-primary" />
                <a
                  href="tel:+91-8178297956"
                  className="text-sm text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary"
                >
                  +91-8178297956
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sidebar-primary" />
                <a
                  href="mailto:admin@pronama.in"
                  className="text-sm text-sidebar-foreground/80 transition-colors hover:text-sidebar-primary break-all"
                >
                  admin@pronama.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sidebar-border pt-8 sm:flex-row">
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-primary"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
