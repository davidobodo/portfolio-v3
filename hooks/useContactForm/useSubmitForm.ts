import { useState, useEffect } from "react";
import { events, registerEvent } from "#/utils/analytics/events";
import { TFormFields } from "#/types";

export function useSubmitForm({
	isButtonDisabled,
	values,
	onClearForm,
}: {
	isButtonDisabled: boolean;
	values: TFormFields;
	onClearForm: () => void;
}) {
	const [messageTimer, setMessageTimer] = useState<NodeJS.Timeout>();
	const [serverRes, setServerRes] = useState({
		message: "",
		error: false,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	//---------------------------------------------------------------------
	// SUBMIT FORM
	//---------------------------------------------------------------------
	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (isButtonDisabled) return;
		setIsSubmitting(true);

		window.grecaptcha.ready(async function () {
			const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string, {
				action: "submit",
			});

			const res = await fetch("/api/recaptcha", {
				method: "POST",
				body: JSON.stringify({ token }),
				mode: "no-cors",
			});

			if (res.ok) {
				const data = await res.json();
				if (data.success && data.score > 0.5) {
					postToEndpoint({ values });
				} else {
					onServerResponse({ error: true, message: "Human verification failed" });
				}
			} else {
				onServerResponse({ error: true, message: "Human verification failed" });
			}
		});
	};

	//---------------------------------------------------------------------
	// SEND DETAILS TO BACKENDD MAIL SERVICE
	//---------------------------------------------------------------------
	const postToEndpoint = async ({ values }: { values: TFormFields }) => {
		const { email, name } = values;
		const URL = "/api/mail";

		const { submitFormFailure, submitFormStart, submitFormSuccess } = events.shared.contactForm;
		registerEvent(
			submitFormStart({
				sender_email: email,
				sender_name: name,
			})
		);

		try {
			const res = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
				mode: "no-cors",
			});

			if (res.ok) {
				await res.json();
				registerEvent(submitFormSuccess({ sender_email: email, sender_name: name }));
				onServerResponse({
					error: false,
					message: `🎉🥳 Yipee!!! Thanks ${name}, got your message. Would respond as soon as I can.`,
				});
				onClearForm();
			} else {
				throw res;
			}
		} catch (err: any) {
			//Jump out of type checking for this error section
			const _err = await err.json();

			registerEvent(submitFormFailure({ error: _err.message }));
			onServerResponse({ error: true, message: _err.message });
		}
	};

	//---------------------------------------------------------------------
	// USED TO AUTOMATICALLY REMOVE THE MESSAGE DISPLAYED AFTER 5 SECONDS
	//---------------------------------------------------------------------
	const initServerResponseTimer = () => {
		// Remove any timer that exists previously
		if (messageTimer) {
			clearTimeout(messageTimer);
		}
		const id = setTimeout(() => {
			setServerRes({
				error: false,
				message: "",
			});
		}, 10000);
		setMessageTimer(id);
	};

	const onServerResponse = ({ error, message }: { error: boolean; message: string }) => {
		setServerRes({ error, message });
		setIsSubmitting(false);
		initServerResponseTimer();
	};

	useEffect(() => {
		return () => {
			if (messageTimer) {
				clearTimeout(messageTimer);
			}
		};
	}, [messageTimer]);

	return {
		onSubmit,
		isSubmitting,
		serverRes,
	};
}
