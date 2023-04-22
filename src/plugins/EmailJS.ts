import emailjs from '@emailjs/browser'
import { FormFields } from '@/types/Form'
// server -> https://www.emailjs.com/
// library -> https://yarnpkg.com/package/@emailjs/browser

const public_key = 'UVQBNsgpdx8lwEdJw'
const service_id = 'service_u9y8xg5'
const template_id = 'template_jf24f9g'

const to_name = 'Roger'
const to_email = 'bu24re0108nai2@gmail.com'

export const sendEmail = (data: FormFields) => {
  const { name: from_name, email: from_email, message: from_message } = data
  emailjs.send(
    service_id,
    template_id,
    {
      from_name,
      from_email,
      from_message,
      to_name,
      to_email,
    },
    public_key
  )
}
