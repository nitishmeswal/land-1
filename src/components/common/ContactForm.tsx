import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase-client";

export interface ContactFormData {
  email: string;
  concern: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    concern: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if Supabase is properly configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        alert('Contact form is currently unavailable. Please email us directly at support@neurolov.ai');
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from("contact_requests")
        .insert([formData]);

      if (error) {
        console.error("Submission failed:", error.message);
        alert("Thank you for your message! We'll get back to you soon. (Note: If you don't receive a confirmation, please email us directly at support@neurolov.ai)");
      } else {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ email: "", concern: "" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Thank you for your message! We'll get back to you soon. (Note: If you don't receive a confirmation, please email us directly at support@neurolov.ai)");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-white/90 block mb-2">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/20"
          />
        </div>

        <div>
          <label className="text-white/90 block mb-2">Concern</label>
          <textarea
            required
            value={formData.concern}
            onChange={(e) =>
              setFormData({ ...formData, concern: e.target.value })
            }
            placeholder="How can we help you?"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/20 resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#6366F1] hover:bg-[#5558F0] text-white py-3 rounded-lg transition-colors"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
