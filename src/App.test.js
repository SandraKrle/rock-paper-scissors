import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const rootElement = screen.getByText(/Score/i);
  expect(rootElement).toBeInTheDocument();
});
