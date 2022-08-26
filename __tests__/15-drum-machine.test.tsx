import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
import { PROJECTS } from "#/constants/projects";
const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`${PROJECTS[14].title} page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id={PROJECTS[14].id} title={PROJECTS[14].title} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
