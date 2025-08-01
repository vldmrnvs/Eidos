import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home Page', () => {
  it('renders project name input', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText('Project Name')).toBeInTheDocument();
  });
});
