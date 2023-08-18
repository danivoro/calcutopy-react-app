import { render, screen } from "../testUtils/testUtils";
import MortgageCalculator from "./MortgageCalculator";

//An example of using react-testing-library
describe("MyComponent", async () => {
    test.skip("Should have text Hello from My Component on it", () => {
        render(<MortgageCalculator />);
        const elem = screen.getByText("Hello from My Component");
        expect(elem).toBeInTheDocument();
    });
});
