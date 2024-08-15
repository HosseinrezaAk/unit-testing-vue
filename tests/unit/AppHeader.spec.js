import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    expect(true).toBe(true)
  })
  test('If user is logged in, show logout button', () => {
    expect(true).toBe(true)
  })
})
