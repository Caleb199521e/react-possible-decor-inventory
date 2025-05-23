import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component', () => {
    render(<Card />);
    const cardElement = screen.getByText(/card content/i);
    expect(cardElement).toBeInTheDocument();
});