import "@testing-library/react";
import { render } from "@testing-library/react";
import ProjectsPage from "#/pages/projects/[id]";

describe("Prodeus project", () => {
	it("renders correctly", () => {
		const { asFragment } = render(<ProjectsPage id="prodeus" title="Prodeus" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
