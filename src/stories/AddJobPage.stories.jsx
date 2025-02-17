import { fn } from '@storybook/test'; // Import fn for action handling
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import AddJobPage from "../pages/AddJobPage.jsx";

export default {
  title: 'Lab2/Add Job Page',
  component: AddJobPage,
  tags: ['autodocs'],
  argTypes: {
    addJobSubmit: { action: "addJobSubmit" }, // Use action for addJobSubmit
  },
};

// Default 
export const Default = {
  args: {
    addJobSubmit: (job) => console.log('Job submitted:', job),
  },
  render: (args) => (
    <Router>
      <AddJobPage {...args} />
    </Router>
  ),
};

// Filled Out Form 
export const FilledOutForm = {
  args: {
    addJobSubmit: fn(), 
    defaultValues: {
      title: 'System Operations Engineer',
      type: 'Full-Time',
      location: 'Toronto, CAN',
      description: 'We are hiring for a system operations engineer in our Team.',
      salary: '$100K - $125K',
      company: {
        name: 'Atoshe Tech',
        description: 'We build promising systems of software.',
        contactEmail: 'work@atoshetech.com',
        contactPhone: '(416) 123-4567',
      },
    },
  },
  render: (args) => (
    <Router>
      <AddJobPage {...args} />
    </Router>
  ),
};

// Remote Job 
export const RemoteJob = {
  args: {
    addJobSubmit: fn(), 
    defaultValues: {
      title: 'Remote Developer',
      type: 'Remote',
      location: 'Nationwide',
      salary: '$150K - $175K',
    },
  },
  render: (args) => (
    <Router>
      <AddJobPage {...args} />
    </Router>
  ),
};

// Internship 
export const Internship = {
  args: {
    addJobSubmit: fn(), 
    defaultValues: {
      title: 'System Operations Engineering Intern',
      type: 'Intern',
      location: 'San Francisco, CA',
      salary: 'Under $50K',
    },
  },
  render: (args) => (
    <Router>
      <AddJobPage {...args} />
    </Router>
  ),
};

