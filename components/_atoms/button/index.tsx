import styles from "./styles.module.scss";

export default function Button({
    ariaLabel,
    onClick,
    label,
    type = "button",
    endAdornment
}: {
    ariaLabel: string;
    onClick: () => void;
    label: string;
    type?: "button" | "reset" | "submit";
    endAdornment?: JSX.Element;
}) {
    return (
        <button className={styles.button} type={type} aria-label={ariaLabel} onClick={onClick}>
            <span>{label} </span>
            {endAdornment && endAdornment}
        </button>
    );
}
