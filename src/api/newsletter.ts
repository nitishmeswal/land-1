import { supabase } from "@/lib/supabase-client";

export interface SubscriptionRequest {
  email: string;
  source?: string;
}

export const newsletterAPI = {
  async subscribe(data: SubscriptionRequest) {
    try {
      // First, try to insert - let the database handle uniqueness
      const { data: insertData, error: insertError } = await supabase
        .from('newsletter_subscriptions')
        .insert([{
          email: data.email,
          source: data.source || 'website'
        }])
        .select();
      
      if (insertError) {
        // If it's a unique constraint violation, check if user exists but is inactive
        if (insertError.code === '23505') {
          const { data: existing, error: selectError } = await supabase
            .from('newsletter_subscriptions')
            .select('id, is_active')
            .eq('email', data.email)
            .single();
          
          if (selectError) {
            throw selectError;
          }
          
          if (existing.is_active) {
            return {
              success: false,
              error: 'Email already subscribed to our newsletter'
            };
          } else {
            // Reactivate subscription
            const { error: updateError } = await supabase
              .from('newsletter_subscriptions')
              .update({ 
                is_active: true, 
                subscribed_at: new Date().toISOString(),
                source: data.source || 'website'
              })
              .eq('email', data.email);
            
            if (updateError) throw updateError;
            
            return {
              success: true,
              message: 'Welcome back! Your subscription has been reactivated.'
            };
          }
        }
        throw insertError;
      }
      
      // Success - new subscription created
      return {
        success: true,
        message: 'Successfully subscribed! 🎉'
      };
      
    } catch (error) {
      // Log only in development, hide in production
      if (import.meta.env.DEV) {
        console.error('Newsletter subscription error:', error);
      }
      return {
        success: false,
        error: 'Something went wrong. Please try again.'
      };
    }
  }
};
