import { slater } from "@slaterjs/next";
const config = {
	tasks: [
		{
			name: "formhealth",
			schedule: "* * * * *", // 7AM GMT
			// @ts-ignore
			handler: async (event, success, failure) => {
				try {
					const results = await fetch("/api/mail", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name: "Obodo David",
							subject: "Mail Integration Test",
							email: "obododavid5@gmail.com",
							message:
								"This is a scheduled task to check everyday that the contact form is still connected and working perfectly",
						}),
						mode: "no-cors",
					});
					const data = await results.json();
					if (results.ok) {
						return success(data);
					} else {
						return failure(data);
					}
				} catch (err) {
					return failure(err); // sends 500
				}
			},
		},
	],
};

// @ts-ignore
export default slater(config);
