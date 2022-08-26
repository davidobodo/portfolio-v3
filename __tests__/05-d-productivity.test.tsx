import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
import { PROJECTS } from "#/constants/projects";

const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`${PROJECTS[4].title} page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id={PROJECTS[4].id} title={PROJECTS[4].title} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
