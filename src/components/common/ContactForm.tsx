import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  concern: z.string().min(10, "Please provide more details about your concern"),
});

export type ContactFormData = z.infer<typeof formSchema>;

export default function ContactForm({
  onSubmit,
}: {
  onSubmit: (data: ContactFormData) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      concern: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your@email.com"
                  {...field}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="concern"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Concern</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you?"
                  {...field}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-neuro-500 hover:bg-neuro-600 text-white"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
