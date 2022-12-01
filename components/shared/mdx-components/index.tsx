import styles from "./styles.module.scss";

const Paragraph = (props) => {
	return <p {...props} className={styles.paragraph} />;
};
const MDXComponents = {
	p: Paragraph,
};

export default MDXComponents;
