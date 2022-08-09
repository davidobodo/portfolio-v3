// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
	name: string;
};

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === "POST") {
		console.log(req.body, "=========THE BOSY");

		// const { name, email, subject, message } = req.body;

		// const msg = {
		// 	to: "obododavid5@gmail.com", // Change to your recipient
		// 	from: "admin@cadmils.com", // Change to your verified sender
		// 	subject: `${subject}`,
		// 	// text: "tESTING with a different text",
		// 	html: `
		// 	<div>
		// 		<h1>From: ${name}</h1>
		// 		<a href="mailto: ${email}">${email}</a>
		// 		<p>${message}</p>
		// 	</div>
		// 	`,
		// };

		// try {
		// 	const data = await sgMail.send(msg);

		// 	console.log(data, "THE DATA AFTER SENDING SUCCESSFULLY");
		res.status(200).json({ name: "John Doe" });
		// 	return res.status(200).send({ message: "Sent successfully" });
		// } catch (err) {
		// 	throw err;
		// }
	} else {
		console.log(process.env);
		// res.redirect("/");
	}
}

export default handler;
