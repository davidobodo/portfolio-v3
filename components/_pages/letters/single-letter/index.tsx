import styles from "./styles.module.scss";

export default function SingleLetter({
    url,
    title,
    date,
    time,
    summary,
    tags
}: {
    url: string;
    title: string;
    date: string;
    time: string;
    summary: string;
    tags: string[];
}) {
    return (
        <article className={styles.container}>
            <a href={url} target="_blank" rel="noreferrer">
                <h1>{title}</h1>
                <p>
                    {date} | {time} read
                </p>
                <p>{summary}</p>
                <p>
                    {tags.map((item) => {
                        return <span key={item}>#{item}</span>;
                    })}
                </p>
            </a>
        </article>
    );
}
