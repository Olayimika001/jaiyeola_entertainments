/**
 * Sends form data directly to your inbox via FormSubmit (https://formsubmit.co).
 * No Formspree account required. On first submission, FormSubmit sends a
 * confirmation link to the recipient email — click it once to activate.
 */
export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ?? 'Info@jaiyeolamovieentertaimentproductions.net'

export async function submitToEmail(formData: FormData): Promise<void> {
  if (!formData.has('_captcha')) {
    formData.append('_captcha', 'false')
  }

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    }
  )

  if (!response.ok) {
    throw new Error('Submission failed')
  }

  const result = (await response.json()) as { success?: string | boolean }
  if (result.success !== 'true' && result.success !== true) {
    throw new Error('Submission rejected')
  }
}
