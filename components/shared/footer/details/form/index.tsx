import styles from "./styles.module.scss";
import React, { memo } from "react";
import { Spinner } from "#/components";
import { useContactForm } from "#/hooks";

//NOTE: Form validation is easiest when one makes use of libraries like formik, react-hooks e.t.c, But this form is too small so no need of using an external library
function BaseForm() {
	const { isButtonDisabled, values, touched, errors, handleChange, onSubmit, isSubmitting, serverRes } =
		useContactForm();

	return (
		<>
			<section className={styles.title}>
				<h4>
					Would love to hear from <br /> you &#8595;.
				</h4>
				<p>
					I am currently interested in a &#8220;Full-time Front-end developer role (remote)&#8220; with a major on
					&#8220;React.js Framework&#8220;, but still open to other opportunities. However, if you have other requests or
					questions, don’t hesitate to use the form.
				</p>
			</section>
			<form noValidate className={styles.form} onSubmit={onSubmit}>
				<div className={styles.twoColumns}>
					<InputField
						label="Name"
						id="name"
						name="name"
						placeholder="Name"
						value={values.name}
						touched={touched.name}
						errorMessage={errors.name}
						onChange={handleChange}
					/>
					<InputField
						label="Email"
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						value={values.email}
						touched={touched.email}
						errorMessage={errors.email}
						onChange={handleChange}
					/>
				</div>
				<InputField
					label="Subject"
					id="subject"
					name="subject"
					placeholder="Subject"
					value={values.subject}
					touched={touched.subject}
					errorMessage={errors.subject}
					onChange={handleChange}
				/>
				<div className={styles.formField}>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols={30}
						rows={10}
						placeholder="Message"
						onChange={handleChange}
						value={values.message}
					></textarea>
					<Message touched={touched.message} message={errors.message} />
				</div>

				<Button isButtonDisabled={isButtonDisabled} isSubmitting={isSubmitting} serverRes={serverRes} />
			</form>
		</>
	);
}

export const Form = memo(BaseForm);

//--------------------------------------------------
// MESSAGE COMPONENT
//--------------------------------------------------
function Message({
	touched,
	message,
	type = "error",
}: {
	touched: boolean;
	message: string;
	type?: "error" | "success";
}) {
	if (touched && message) {
		return <span className={type === "error" ? styles.error : styles.success}>{message}</span>;
	} else {
		return null;
	}
}

//--------------------------------------------------
// INPUT COMPONENT
//--------------------------------------------------
function InputField({
	label,
	id,
	name,
	placeholder,
	value,
	onChange,
	touched,
	errorMessage,
	type = "text",
}: {
	label: string;
	id: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	touched: boolean;
	errorMessage: string;
	type?: string;
}) {
	return (
		<div className={styles.formField}>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
			<Message touched={touched} message={errorMessage} />
		</div>
	);
}

//--------------------------------------------------
// BUTTON COMPONENT
//--------------------------------------------------
function Button({
	isButtonDisabled,
	isSubmitting,
	serverRes,
}: {
	isButtonDisabled: boolean;
	isSubmitting: boolean;
	serverRes: { message: string; error: boolean };
}) {
	return (
		<div className={styles.btnWrapper}>
			<button aria-label="Submit" disabled={isButtonDisabled || isSubmitting} type="submit">
				{isSubmitting ? (
					<>
						<span>Submitting</span>
						<Spinner />
					</>
				) : (
					<>
						<span>Submit</span>
						<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="m.819 50.513 8.307 8.238 38.423-38.454-.059 28.89h11.638V.424H10.47l-.14 11.564h28.983L.819 50.513Zm55.31-47.09v42.764V3.424Z"
								fill="currentColor"
							></path>
						</svg>
					</>
				)}
			</button>
			<Message touched={true} message={serverRes.message} type={serverRes.error ? "error" : "success"} />
		</div>
	);
}
