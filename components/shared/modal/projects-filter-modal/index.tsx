import { ModalWrapper } from "#/components";
import { TFilterBy } from "#/types";
import ProjectsFilter from "./projects-filter";

export default function ProjectsFilterModal({
	isOpen,
	onFilterProjects,
	onCloseFilter,
	filterKey,
	filterList,
	filterBy,
	onSelectFilterBy,
}: {
	isOpen: boolean;
	onFilterProjects: ({ key }: { key: string }) => void;
	onCloseFilter: () => void;
	filterKey: string;
	filterList: { key: string; label: string }[];
	filterBy: TFilterBy;
	onSelectFilterBy: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<ModalWrapper show={isOpen}>
			<ProjectsFilter
				onFilterProjects={onFilterProjects}
				onCloseFilter={onCloseFilter}
				filterKey={filterKey}
				filterList={filterList}
				filterBy={filterBy}
				onSelectFilterBy={onSelectFilterBy}
			/>
		</ModalWrapper>
	);
}
