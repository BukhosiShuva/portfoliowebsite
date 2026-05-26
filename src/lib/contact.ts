export type ContactFormData = {
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Must be a valid email address'
  }
  if (!data.message.trim()) errors.message = 'Message is required'

  return errors
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'New Contact Form Submission',
      from_name: data.name,
      name: data.name,
      email: data.email,
      message: data.message,
    }),
  })

  const result = (await response.json()) as { success: boolean; message?: string }

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'Failed to send message')
  }
}
