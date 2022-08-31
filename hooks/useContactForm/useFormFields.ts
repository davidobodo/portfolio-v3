import { useState, useEffect } from "react";
import { TFormFields } from "#/types";

export function useFormFields() {
	const [errors, setErrors] = useState<TFormFields>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [touched, setTouched] = useState({
		name: false,
		email: false,
		subject: false,
		message: false,
	});

	const [values, setValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, id } = e.target;

		setValues((prevState) => {
			return {
				...prevState,
				[id]: value,
			};
		});

		setTouched((prevState) => {
			return {
				...prevState,
				[id]: true,
			};
		});
	};

	const isEmailValid = (value: string) => {
		return new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
	};

	const updateErrorState = (field: string, message: string) => {
		setErrors((prevState) => {
			return {
				...prevState,
				[field]: message,
			};
		});
	};

	const [hasTouchedAll, setHasTouchedAll] = useState(false);

	//---------------------------------------------------------------------
	//VALIDATIONS
	//---------------------------------------------------------------------
	useEffect(() => {
		if (touched.name) {
			if (values.name.trim().length === 0) {
				updateErrorState("name", "Name is required");
			} else {
				updateErrorState("name", "");
			}
		}
		if (touched.email) {
			if (values.email.trim().length === 0) {
				updateErrorState("email", "Email is required");
			} else if (!isEmailValid(values.email)) {
				updateErrorState("email", "Please enter a valid email");
			} else {
				updateErrorState("email", "");
			}
		}
		if (touched.subject) {
			if (values.subject.trim().length === 0) {
				updateErrorState("subject", "Subject is required");
			} else {
				updateErrorState("subject", "");
			}
		}
		if (touched.message) {
			if (values.message.trim().length === 0) {
				updateErrorState("message", "Message is required");
			} else {
				updateErrorState("message", "");
			}
		}

		if (touched.name && touched.email && touched.subject && touched.message) {
			setHasTouchedAll(true);
		} else {
			setHasTouchedAll(false);
		}
	}, [
		touched.name,
		touched.email,
		touched.subject,
		touched.message,
		values.name,
		values.email,
		values.subject,
		values.message,
	]);

	let isButtonDisabled = true;
	//If we find one error field who's length is not zero then an error exists;
	const errorExists = Object.values(errors).find((item) => item.trim().length !== 0);

	if (hasTouchedAll) {
		if (errorExists) {
			isButtonDisabled = true;
		} else {
			isButtonDisabled = false;
		}
	}

	const onClearForm = () => {
		setValues({
			name: "",
			email: "",
			subject: "",
			message: "",
		});

		setTouched({
			name: false,
			email: false,
			subject: false,
			message: false,
		});
		setErrors({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return {
		isButtonDisabled,
		values,
		touched,
		errors,
		handleChange,
		onClearForm,
	};
}
