import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard heading', () => {
  render(<App />);
  const heading = screen.getByText(/IPL 2026 Dashboard/i);
  expect(heading).toBeInTheDocument();
});
