import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";
const scrollTo = ({ top, left }: { top: number; left: number }) => {};
window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`Portfolio V1 page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="pv1" title="Portfolio v1" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
