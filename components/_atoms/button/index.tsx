import styles from "./styles.module.scss";

export default function Button({
    ariaLabel,
    onClick,
    label,
    type = "button"
}: {
    ariaLabel: string;
    onClick: () => void;
    label: string;
    type?: "button" | "reset" | "submit";
}) {
    return (
        <button className={styles.button} type={type} aria-label={ariaLabel} onClick={onClick}>
            <span>{label} </span>&#8594;
        </button>
    );
}
