import { render, screen } from '@testing-library/react';
import { Button } from '../ui/Button';

describe('Button', () => {
  it('renders with provided text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
