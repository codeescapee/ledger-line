import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Docksmith",
  description: "Discuss your operations system requirements and backend architecture needs.",
};

export default function ContactPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-6">
            Talk to us.
          </h1>
          <p className="text-xl text-accent-muted leading-relaxed">
            Describe your operations workflow and backend requirements.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
