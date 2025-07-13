import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  inquiry_type?: string
  subject: string
  message: string
  created_at?: string
  updated_at?: string
}

export interface QuoteRequest {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  services: string[]
  project_title: string
  project_description: string
  budget: string
  timeline: string
  has_existing_website?: boolean
  existing_website_url?: string
  target_audience?: string
  competitors?: string
  additional_requirements?: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface CareerApplication {
  id?: string
  name: string
  email: string
  phone?: string
  position: string
  experience: string
  portfolio_url?: string
  cover_letter: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface ConsultationBooking {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  booking_date: string
  booking_time: string
  duration: string
  timezone: string
  meeting_type: string
  project_details?: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface NewsletterSubscription {
  id?: string
  email: string
  status?: string
  subscribed_at?: string
  unsubscribed_at?: string
}
