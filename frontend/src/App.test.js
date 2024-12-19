import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders Hello, MERN with Jest!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, MERN with Jest!/i);
  expect(linkElement).toBeInTheDocument();
});
