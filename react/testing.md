# Testing in React
## Packages used
[Setup](https://www.robinwieruch.de/vitest-react-testing-library/)
another installed package:
```bash
npm install @testing-library/user-event --save-dev
```


* @testing-library/react will give us access to useful functions like render which we’ll demonstrate later on.
* @testing-library/jest-dom includes some handy custom matchers (assertive functions) like toBeInTheDocument and more. (complete list on jest-dom’s github). Jest already has a lot of matchers so this package is not compulsory to use.
* @testing-library/user-event provides the userEvent API that simulates user interactions with the webpage. Alternatively, we could import the fireEvent API from @testing-library/react.


## Example test:
```jsx
import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
```

## Example test with React:
```jsx
//App.jsx:
const App = () => <h1>Our First Test</h1>;

export default App;

//App.test.jsx:
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch("Our First Test");
  });
});
```

## Simulating user events
```jsx
//App.test.jsx:
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
```

## What are snapshots?
Snapshot testing is just comparing our rendered component with an associated snapshot file. For example, the snapshot file which was automatically generated after we ran the “magnificent monkeys renders” test was:
```jsx
exports[`App component > renders magnificent monkeys 1`] = `
<div>
  <button
    type="button"
  >
    Click Me
  </button>
  <h1>
    Magnificent Monkeys
  </h1>
</div>
`;
```

## What is Mocking?
Mocking is a way to simulate the behavior of a function or module. For example, if we have a function that makes an API call, we can mock that function to return a fake response. This is useful because we don’t want to make an actual API call in our tests. Mocking is also useful when we want to test a function that calls another function. We can mock the second function to return a fake value so that we can test the first function in isolation.

## Testing callback handlers
```jsx
// Example test file with callback mocks:

import { vi } from 'vitest'
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import CustomButton from "../src/CustomButton";

describe("CustomButton", () => {
    it("should render a button with the text 'Click me'", () => {
        render(<CustomButton onClick={() => {}} />);

        const button = screen.getByRole("button", { name: "Click me" });

        expect(button).toBeInTheDocument();
    });
  
    it("should call the onClick function when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<CustomButton onClick={onClick} />);

        const button = screen.getByRole("button", { name: "Click me" });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("should not call the onClick function when it isn't clicked", async () => {
        const onClick = vi.fn();
        render(<CustomButton onClick={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});
```

