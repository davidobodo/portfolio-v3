import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";

const scrollTo = ({ top, left }: { top: number; left: number }) => {};

window.scrollTo = jest.fn().mockImplementation(scrollTo);
describe(`Medic Finder page`, () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="medic-finder" title="Medic finder" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
