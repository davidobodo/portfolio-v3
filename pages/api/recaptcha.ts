import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { token } = JSON.parse(req.body);
		const URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

		try {
			const data = await fetch(URL, {
				method: "POST",
			});
			const _data = await data.json();
			return res.status(200).send({ ..._data });
		} catch (err) {
			return res.status(400).send({ success: false, score: 0, err });
		}
	} else {
		//If User visits this route on the browser (i.e via GET request), just redirect them back home
		res.redirect("/");
	}
}

export default handler;
