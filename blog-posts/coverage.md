The purpose of writing tests is to ensure that our application is functioning exactly how we want it to without any errors. However, after doing so, how can we know if the amount of tests we have written are even enough and covered all important places of our application ?

Say hello to `Jest "collect coverage"`. With the collect coverage option we can easily know exactly how much of our code has been tested and how much of our code is left to test. Without further ado, let's get into it.

Open you `jest.config` file and add teh collectCoverage option into your `jest.config`. Your file should now look like this:

```
import nextJest from "next/jest";

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jest-environment-jsdom",
	verbose: true,
	collectCoverage: true,
};

export default createJestConfig(customJestConfig);

```

With the coverage option set, make sure you restart your terminal. Afetr running the test command again you should see a table like this generated in your console:

ADD IMAGE

Sweet right 😅?

That's not all, If you look at the root folder of your application, you would see that a folder named `covergae` has been created for you. Go into the folder, then into `icov-report` folder, inside which open the `index.html` file in the browser

ADD IMAGE OF FOLDER STRUCTURE
