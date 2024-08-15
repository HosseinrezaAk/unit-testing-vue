import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'
describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
  test('If user is logged in, show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
