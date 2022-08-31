import styles from "./styles.module.scss";
import { TProjectsView } from "#/types";
import { ListIcon, GridIcon } from "#/components/icons";
export default function ViewSelector({
	currentView,
	handleSetCurrentView,
}: {
	currentView: TProjectsView;
	handleSetCurrentView: (view: TProjectsView) => void;
}) {
	return (
		<div className={styles.view}>
			<button
				value="list"
				className={currentView === "list" ? styles.active : ""}
				onClick={() => handleSetCurrentView("list")}
				aria-label="list-view"
			>
				<ListIcon />
			</button>
			<button
				value="grid"
				className={currentView === "grid" ? styles.active : ""}
				onClick={() => handleSetCurrentView("grid")}
				aria-label="grid-view"
			>
				<GridIcon />
			</button>
		</div>
	);
}
