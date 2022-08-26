import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`Portfolio V2 page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="pv2" title="Portfolio v2" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
