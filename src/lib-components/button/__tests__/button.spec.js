import Button from '..'
import { mount } from '@vue/test-utils'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = mount({
      render () {
        return <Button>First Button</Button>
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('create primary button', () => {
    const wrapper = mount({
      render () {
        return <Button type='primary'>Primary</Button>
      }
    })
    expect(wrapper.contains('.antd-btn-primary')).toBe(true)
  })

  it('renders Chinese characters correctly', () => {

  })
})