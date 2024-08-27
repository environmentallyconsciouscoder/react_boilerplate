import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import React from 'react';  // Add this line

test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})