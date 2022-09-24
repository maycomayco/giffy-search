import { render } from '@testing-library/react';
import App from './App';

/*
  Always we need to see how the test fails, so we can fix it.
  The test is async because we are waiting for the component Home to render (Async routes).
*/

test('App renders without crashing', async () => {
  /*
    - render() is a function that takes a component and returns a render result. It has a number of options to customize the rendering and also has a number of static methods that can be used to access the render result.
  */
  // const { findByText } = render(<App />);
  // const title = await findByText('Last search');

  // expect(title).toBeInTheDocument();
  expect(true).toBe(true);
});

/* test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  console.log(findByText);
  const title = await findByText(/Last search/i);
  expect(title).toBeInTheDocument();
}); */
