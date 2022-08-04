import styles from "../styles.module.scss";
import React, { useEffect, useState, memo } from "react";

//NOTE: Form validation is easiest when one makes use of libraries like formik, react-hooks e.t.c, But this form is too small so no need of using an external library
function BaseForm() {
	const [errors, setErrors] = useState({
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
		const { value, name } = e.target;

		setValues((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name } = e.target;

		setTouched((prevState) => {
			return {
				...prevState,
				[name]: true,
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
	//--------------------------------------
	//VALIDATIONS
	//--------------------------------------
	useEffect(() => {
		const { name, email, subject, message } = touched;
		if (name) {
			if (values.name.trim().length === 0) {
				updateErrorState("name", "Name is required");
			} else {
				updateErrorState("name", "");
			}
		}
		if (email) {
			if (values.email.trim().length === 0) {
				updateErrorState("email", "Email is required");
			} else if (!isEmailValid(values.email)) {
				updateErrorState("email", "Please enter a valid email");
			} else {
				updateErrorState("email", "");
			}
		}
		if (subject) {
			if (values.subject.trim().length === 0) {
				updateErrorState("subject", "Subject is required");
			} else {
				updateErrorState("subject", "");
			}
		}
		if (message) {
			if (values.message.trim().length === 0) {
				updateErrorState("message", "Message is required");
			} else {
				updateErrorState("message", "");
			}
		}

		if (name && email && subject && message) {
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

	console.log("MOUNTED");

	let isDisabled = true;
	//If we find a field that the user has not yet touched then user hasnt completed form

	//If we find one error field who's length is not zero then an error exists;
	const errorExists = Object.values(errors).find((item) => item.trim().length !== 0);

	if (hasTouchedAll) {
		if (errorExists) {
			isDisabled = true;
		} else {
			isDisabled = false;
		}
	}

	// console.log(hasNotTouchedAll, errorExists, "IN HERE");

	//--------------------------------------
	//ON SUBMIT
	//--------------------------------------
	const [isSubmitting, setIsSubmitting] = useState(false);
	const onSubmit = () => {
		if (isDisabled) return;
	};

	return (
		<>
			<div className={styles.title}>
				<h1>
					Would love to hear from <br /> you &#8595;.
				</h1>
				<p>
					I’m currently interested in a&nbsp;<span>Full-time Front-end developer role </span> with a major on &nbsp;
					<span>React.js Framework</span>, but still open to other opportunities. However, if you have other requests or
					questions, don’t hesitate to use the form.
				</p>
			</div>
			<form noValidate className={styles.form} onSubmit={onSubmit}>
				<div className={styles.twoColumns}>
					<div className={styles.formField}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<ErrorMessage touched={touched.name} error={errors.name} />
					</div>
					<div className={styles.formField}>
						<label htmlFor="email">Email</label>
						<input
							type="Email"
							placeholder="Email"
							id="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<ErrorMessage touched={touched.email} error={errors.email} />
					</div>
				</div>
				<div className={styles.formField}>
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						placeholder="Subject"
						id="subject"
						name="subject"
						value={values.subject}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					<ErrorMessage touched={touched.subject} error={errors.subject} />
				</div>
				<div className={styles.formField}>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols={30}
						rows={10}
						placeholder="Message"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.message}
					></textarea>
					<ErrorMessage touched={touched.message} error={errors.message} />
				</div>

				<div className={styles.btnWrapper}>
					<button aria-label="Submit" disabled={isDisabled || isSubmitting}>
						<span>Submit</span>
						<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="m.819 50.513 8.307 8.238 38.423-38.454-.059 28.89h11.638V.424H10.47l-.14 11.564h28.983L.819 50.513Zm55.31-47.09v42.764V3.424Z"
								fill="currentColor"
							></path>
						</svg>
					</button>
					<ErrorMessage touched={true} error={"That email doesnt exist 😅. Please Check it again"} />
				</div>
			</form>
		</>
	);
}

export const Form = memo(BaseForm);

function ErrorMessage({ touched, error }: { touched: boolean; error: string }) {
	if (touched && error) {
		return <span className={styles.error}>{error}</span>;
	} else {
		return null;
	}
}
