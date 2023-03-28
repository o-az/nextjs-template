import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import FourOhFour from '~/pages/404'

test('404', () => {
  render(<FourOhFour />)
  const main = within(screen.getByRole('main'))
  expect(main.getByRole('heading', { level: 1, name: '404' })).toBeDefined()
  expect(main.getByRole('heading', { level: 2, name: 'Page Not Found' })).toBeDefined()
})
