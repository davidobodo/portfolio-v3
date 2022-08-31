import { useFormFields } from "./useFormFields";
import { useSubmitForm } from "./useSubmitForm";

export default function useContactForm() {
	const { isButtonDisabled, values, touched, errors, handleChange, onClearForm } = useFormFields();
	const { onSubmit, isSubmitting, serverRes } = useSubmitForm({ isButtonDisabled, values, onClearForm });

	return { isButtonDisabled, values, touched, errors, handleChange, onSubmit, isSubmitting, serverRes };
}
