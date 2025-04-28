import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('applies disabled attribute', () => {
  render(<Button disabled>Click me</Button>);
  expect(screen.getByText('Click me')).toHaveAttribute('disabled');
});