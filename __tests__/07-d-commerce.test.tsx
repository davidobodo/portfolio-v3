import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`D Commerce page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="d-commerce" title="d-commerce" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
