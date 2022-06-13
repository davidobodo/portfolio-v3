import styles from "./styles.module.scss";

export default function Button({
    ariaLabel,
    onClick,
    label
}: {
    ariaLabel: string;
    onClick: () => void;
    label: string;
}) {
    return (
        <button className={styles.button} aria-label={ariaLabel} onClick={onClick}>
            <span>{label} </span>&#8594;
        </button>
    );
}
