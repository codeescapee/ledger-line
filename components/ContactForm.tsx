"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    work_type: "",
    success: "",
    company: "",
    website: "",
    how_found: "",
    funding: "",
    phone: "",
    timeline: "",
    budget: "",
    notes: "",
    page: "contact",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          work_type: "",
          success:  "",
          company: "",
          website: "",
          how_found: "",
          funding: "",
          phone: "",
          timeline: "",
          budget: "",
          notes: "",
          page: "contact",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basics */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Basics</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="work_type" className="block text-sm font-medium text-foreground mb-2">
              What kind of work is this? *
            </label>
            <select
              id="work_type"
              name="work_type"
              required
              value={formData.work_type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
            >
              <option value="">Select type</option>
              <option value="New app">New app</option>
              <option value="Existing system">Existing system</option>
              <option value="Audit or rescue">Audit or rescue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Project */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Project</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="success" className="block text-sm font-medium text-foreground mb-2">
              What does success look like for you? *
            </label>
            <textarea
              id="success"
              name="success"
              required
              rows={4}
              placeholder="Describe what outcome would make this project successful"
              value={formData.success}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                Timeline <span className="text-accent-muted">(optional)</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 months">1–2 months</option>
                <option value="3+ months">3+ months</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                Budget range <span className="text-accent-muted">(optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
              >
                <option value="">Select budget range</option>
                <option value="Under $5k (not typical)">Under $5k (not typical)</option>
                <option value="$5k–$15k">$5k–$15k</option>
                <option value="$15k–$35k">$15k–$35k</option>
                <option value="$35k–$75k">$35k–$75k</option>
                <option value="$75k+">$75k+</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="funding" className="block text-sm font-medium text-foreground mb-2">
                Funding status <span className="text-accent-muted">(optional)</span>
              </label>
              <select
                id="funding"
                name="funding"
                value={formData.funding}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
              >
                <option value="">Select status</option>
                <option value="Company budget approved">Company budget approved</option>
                <option value="Self-funded">Self-funded</option>
                <option value="Funding secured">Funding secured</option>
                <option value="Funding in progress">Funding in progress</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Context */}
      <div>
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Context</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                Website <span className="text-accent-muted">(optional)</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
            </div>

            <div>
              <label htmlFor="how_found" className="block text-sm font-medium text-foreground mb-2">
                How did you find us? <span className="text-accent-muted">(optional)</span>
              </label>
              <select
                id="how_found"
                name="how_found"
                value={formData.how_found}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
              >
                <option value="">Select one</option>
                <option value="Bubble">Bubble</option>
                <option value="Referral">Referral</option>
                <option value="Forum">Forum</option>
                <option value="Search">Search</option>
                <option value="Social">Social</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
              Anything else we should know? <span className="text-accent-muted">(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
          </div>
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">Thank you! We'll be in touch soon.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-primary text-foreground px-8 py-3 rounded-md hover:brightness-90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
