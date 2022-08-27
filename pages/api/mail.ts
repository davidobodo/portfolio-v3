import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { name, email, subject, message } = JSON.parse(req.body);
		const msg = {
			to: process.env.NEXT_PUBLIC_MAIL_TO as string,
			from: process.env.NEXT_PUBLIC_MAIL_FROM as string,
			subject: `${subject}`,
			text: "-",
			html: `
			<div>
				<h1>From: ${name}</h1>
				<a href="mailto: ${email}">${email}</a>
				<p>${message}</p>
			</div>
			`,
		};

		try {
			await sgMail.send(msg);
			return res.status(200).send({ message: "Sent successfully" });
		} catch (error: any) {
			//Jump out of type checking for this error section
			if (error.response) {
				const message = error.response.body.errors[0].message || "Message not sent";
				return res.status(400).send({ message: message, status: error.code, response: error });
			} else {
				return res.status(400).send({ message: "Message not sent", status: 400 });
			}
		}
	} else {
		//If User visits this route on the browser (i.e via GET request), just redirect them back home
		res.redirect("/");
	}
}

export default handler;
