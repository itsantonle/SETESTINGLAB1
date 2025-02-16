import { expect, userEvent, within } from '@storybook/test'
import JobListing from '../components/JobListing'
import jobs from '../jobs.json'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Lab2/JobListing',
  component: JobListing,
  tags: ['autodocs'],
}

export const SeniorReactDeveloper = {
  args: {
    job: jobs['jobs'][0],
    initialDescBool: false,
    //logs actions
    onToggle: action('Toggle clicked'),
  },
  render: (args) => {
    return <JobListing {...args} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // check for More
    await expect(canvas.getByText('More')).toBeInTheDocument()
    const toggleStart = await canvas.getByText('More')

    // Simulate User interaction
    await userEvent.click(toggleStart)

    // Check usestate status
    await expect(canvas.getByText('Less')).toBeInTheDocument()
    // Simulate toggling back
    const toggleEnd = await canvas.getByText('Less')
    await userEvent.click(toggleEnd)
  },
}

export const FrontEndEngineer = {
  args: {
    job: jobs['jobs'][1],
    initialDescBool: false,
    //logs actions
    onToggle: action('Toggle clicked'),
  },
  render: (args) => {
    return <JobListing {...args} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // check for More
    await expect(canvas.getByText('More')).toBeInTheDocument()
    const toggleStart = await canvas.getByText('More')

    // Simulate User interaction
    await userEvent.click(toggleStart)

    // Check usestate status
    await expect(canvas.getByText('Less')).toBeInTheDocument()
    // Simulate toggling back
    const toggleEnd = await canvas.getByText('Less')
    await userEvent.click(toggleEnd)
  },
}

export const ReactDev = {
  args: {
    job: jobs['jobs'][2],
    initialDescBool: false,
    //logs actions
    onToggle: action('Toggle clicked'),
  },
  render: (args) => {
    return <JobListing {...args} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // check for More
    await expect(canvas.getByText('More')).toBeInTheDocument()
    const toggleStart = await canvas.getByText('More')

    // Simulate User interaction
    await userEvent.click(toggleStart)

    // Check usestate status
    await expect(canvas.getByText('Less')).toBeInTheDocument()
    // Simulate toggling back
    const toggleEnd = await canvas.getByText('Less')
    await userEvent.click(toggleEnd)
  },
}
