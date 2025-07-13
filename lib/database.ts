import { supabase } from "./supabase"
import type { ContactSubmission, QuoteRequest, CareerApplication, ConsultationBooking } from "./supabase"

// Contact form functions
export async function submitContactForm(data: ContactSubmission) {
  const { data: result, error } = await supabase.from("contact_submissions").insert([data]).select().single()

  if (error) {
    console.error("Error submitting contact form:", error)
    throw new Error("Failed to submit contact form")
  }

  return result
}

// Quote request functions
export async function submitQuoteRequest(data: QuoteRequest) {
  const { data: result, error } = await supabase.from("quote_requests").insert([data]).select().single()

  if (error) {
    console.error("Error submitting quote request:", error)
    throw new Error("Failed to submit quote request")
  }

  return result
}

// Career application functions
export async function submitCareerApplication(data: CareerApplication) {
  const { data: result, error } = await supabase.from("career_applications").insert([data]).select().single()

  if (error) {
    console.error("Error submitting career application:", error)
    throw new Error("Failed to submit career application")
  }

  return result
}

// Consultation booking functions
export async function submitConsultationBooking(data: ConsultationBooking) {
  const { data: result, error } = await supabase.from("consultation_bookings").insert([data]).select().single()

  if (error) {
    console.error("Error booking consultation:", error)
    throw new Error("Failed to book consultation")
  }

  return result
}

// Newsletter subscription functions
export async function subscribeToNewsletter(email: string) {
  const { data: result, error } = await supabase
    .from("newsletter_subscriptions")
    .upsert([{ email }], { onConflict: "email" })
    .select()
    .single()

  if (error) {
    console.error("Error subscribing to newsletter:", error)
    throw new Error("Failed to subscribe to newsletter")
  }

  return result
}

// Admin functions to retrieve data
export async function getContactSubmissions(limit = 50) {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching contact submissions:", error)
    throw new Error("Failed to fetch contact submissions")
  }

  return data
}

export async function getQuoteRequests(limit = 50) {
  const { data, error } = await supabase
    .from("quote_requests")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching quote requests:", error)
    throw new Error("Failed to fetch quote requests")
  }

  return data
}

export async function getCareerApplications(limit = 50) {
  const { data, error } = await supabase
    .from("career_applications")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Error fetching career applications:", error)
    throw new Error("Failed to fetch career applications")
  }

  return data
}

export async function getConsultationBookings(limit = 50) {
  const { data, error } = await supabase
    .from("consultation_bookings")
    .select("*")
    .order("booking_date", { ascending: true })
    .limit(limit)

  if (error) {
    console.error("Error fetching consultation bookings:", error)
    throw new Error("Failed to fetch consultation bookings")
  }

  return data
}
