import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Breadcrumb from './Breadcrumb.vue'

describe('Breadcrumb', () => {
  it('renders a breadcrumb trail with interactive and current items', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { label: 'Home', href: '#' },
          { label: 'Operations', href: '#/operations' },
          { label: 'Fleet Overview', current: true },
        ],
      },
    })

    expect(wrapper.get('nav').attributes('aria-label')).toBe('Breadcrumb')
    expect(wrapper.findAll('li')).toHaveLength(3)
    expect(wrapper.findAll('a')).toHaveLength(2)
    expect(wrapper.get('[aria-current="page"]').text()).toBe('Fleet Overview')
  })

  it('emits click events and invokes custom click handlers for non-current items', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Breadcrumb, {
      props: {
        items: [
          { label: 'Home', href: '#', onClick },
          { label: 'Current', current: true },
        ],
      },
    })

    await wrapper.find('button').trigger('click')

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(wrapper.emitted('click')?.[0]?.[0]).toMatchObject({
      index: 0,
      crumb: { label: 'Home', href: '#', onClick },
    })
  })
})
