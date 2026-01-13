"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    replacing: "",
    workflow: "",
    timeline: "",
    budget: "",
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
          company: "",
          replacing: "",
          workflow: "",
          timeline: "",
          budget: "",
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
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company <span className="text-accent-muted">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
        />
      </div>

      <div>
        <label htmlFor="replacing" className="block text-sm font-medium text-foreground mb-2">
          What are you replacing? *
        </label>
        <textarea
          id="replacing"
          name="replacing"
          required
          rows={3}
          placeholder="e.g., specific spreadsheets, a legacy tool, manual emails"
          value={formData.replacing}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
        />
      </div>

      <div>
        <label htmlFor="workflow" className="block text-sm font-medium text-foreground mb-2">
          What's the workflow? *
        </label>
        <textarea
          id="workflow"
          name="workflow"
          required
          rows={4}
          placeholder="Briefly describe the core steps the system needs to manage"
          value={formData.workflow}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
          Timeline *
        </label>
        <select
          id="timeline"
          name="timeline"
          required
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
          Budget range *
        </label>
        <select
          id="budget"
          name="budget"
          required
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
        className="w-full bg-accent-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
