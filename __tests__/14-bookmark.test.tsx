import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`Bookmark page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="boookmark" title="Bookmark" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
