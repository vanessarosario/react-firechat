import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement =  await waitFor (() => screen.getByText(/Sign in with Google/i));
  expect(linkElement).toBeInTheDocument();
});
