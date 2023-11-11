// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
    it('should render the "Hello World"', () => {
        render(<App />);
        expect(screen.getByText('Hello World!!!')).toBeInTheDocument();
    })
})