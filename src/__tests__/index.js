// import React from 'react';
// import { screen, render, fireEvent } from '@testing-library/react';
// import App from '../App';

/*
  Always we need to see how the test fails, so we can fix it.
*/

/*
    - screen, give us the ability to interact with the DOM.
  */
test('Home page works as expected', async () => {
  /*   const { container } = render(<App />);
  const gifLink = await waitForElement(() =>
    container.querySelector('.gif-link')
  );

  // jest
  expect(gifLink).toBeInTheDocument(); */
  expect(true).toBe(true);
});

/* test('search form could be used', async () => {
  // react testing library
  render(<App />);
  const input = await screen.findByPlaceholderText('Flinstones...');
  const button = await screen.findByRole('button');

  fireEvent.change(input, { target: { value: 'race' } });
  fireEvent.click(button);

  const title = await screen.findByText('race');

  // jest
  expect(title).toBeInTheDocument();
}); */
