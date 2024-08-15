import styles from "./styles.module.scss";
import React, { memo } from "react";
import { useContactForm } from "#/hooks";
import Link from "next/link";

//NOTE: Form validation is easiest when one makes use of libraries like formik, react-hooks e.t.c, But this form is too small so no need of using an external library
function BaseForm({
	handlePageGAEvents,
}: {
	handlePageGAEvents: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
	const { isButtonDisabled, values, touched, errors, handleChange, onSubmit, isSubmitting, serverRes } =
		useContactForm();

	return (
		<>
			<section className={styles.title}>
				<h4>
					Would love to hear from <br /> you &#8595;.
				</h4>
				<p>If you have requests or questions, kindly do not hesitate to contact me.</p>
			</section>

			<Link href="mailto: contact@davidobodo.com" passHref>
				<a
					target="_blank"
					onClick={handlePageGAEvents}
					data-link="email"
					style={{ textTransform: "lowercase", fontSize: "3rem" }}
				>
					<span>contact@davidobodo.com</span>
				</a>
			</Link>
		</>
	);
}

export const Form = memo(BaseForm);
