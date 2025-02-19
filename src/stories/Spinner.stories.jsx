import Spinner from '../components/Spinner'

export default {
  title: 'Lab2/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
  },
}

// #1
export const Default = {
  args: {
    color: '#4338c',
  },
}

// #2
export const Dark = {
  args: {
    color: '#36454F',
  },
}

// #3
export const Colorful = {
  args: {
    color: '#DAF7A6',
  },
}
