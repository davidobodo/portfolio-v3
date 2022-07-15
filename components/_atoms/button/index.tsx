import styles from "./styles.module.scss";

export default function Button({
    ariaLabel,
    onClick,
    label,
    type = "button",
    endAdornment,
    hasLiquid
}: {
    ariaLabel: string;
    onClick: () => void;
    label: string;
    type?: "button" | "reset" | "submit";
    endAdornment?: JSX.Element;
    hasLiquid?: boolean;
}) {
    return (
        <button className={styles.button} type={type} aria-label={ariaLabel} onClick={onClick}>
            <span className={styles.content}>
                <span>{label} </span>
                {endAdornment && endAdornment}
            </span>
            {hasLiquid && <span className={styles.liquid}></span>}
        </button>
    );
}
