import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../components/Projects';
import { portfolioData } from '../data/portfolioData';

jest.mock('../data/portfolioData');

describe('Projects', () => {
  test('renders the Projects component with mock data', () => {
    render(<Projects />);

    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('This is a test project.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });
});
