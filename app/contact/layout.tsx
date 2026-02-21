import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pronama Infratel Pvt Ltd",
  description:
    "Get in touch with Pronama Infratel Pvt Ltd. Send us your enquiry regarding telecom infrastructure projects and government tenders.",
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
