// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
	name: string;
};

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === "POST") {
		console.log(req.body, "=========THE BOSY");
		res.status(200).json({ name: "John Doe" });
	} else {
		console.log(process.env);
		res.redirect("/");
	}
}
