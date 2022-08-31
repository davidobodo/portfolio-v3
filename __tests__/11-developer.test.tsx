import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`Developer of the year page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="developer-of-the-year" title="developer of the year" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
