/* import { render } from "@react-email/components";
import type { NextApiRequest, NextApiResponse } from 'next'; */
import WelcomeEmail, { WelcomeEmailProps } from '@/emails/EmailTemplate';
import { NextRequest } from 'next/server';
import {Resend} from 'resend'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
export async function POST(req:NextRequest) {
  const { userFirstname, userMessage, userEmail } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'masanzawayne@gmail.com',
      subject: `New Messgae from  ${userFirstname}`,
      react:WelcomeEmail({userFirstname:userFirstname,userMessage:userMessage,userEmail:userEmail}) ,
    });

    if (error) {
      console.error(error)
      return Response.json({ error }, { status: 500 });
      
    }

    return Response.json(data);
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}
