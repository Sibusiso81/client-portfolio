import WelcomeEmail from "@/app/emails/EmailTemplate";
/* import { render } from "@react-email/components";
import type { NextApiRequest, NextApiResponse } from 'next'; */
import {Resend} from 'resend'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'zulusibusiso81@gmail.com',
      subject: 'Hello world',
      react: WelcomeEmail({ userFirstname: 'Jon'}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
