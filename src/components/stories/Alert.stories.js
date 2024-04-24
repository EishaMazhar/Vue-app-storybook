import Alert from '../Alert.vue'

export default {
  title: 'Stories/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' }, // Allow users to input a custom message
      description: 'The message to display in the alert.'
    },
    msgType: {
      control: { type: 'select' }, // Drop-down to select 'danger' or 'success'
      options: ['danger', 'success'], // Defines the available options
      description: 'The type of alert to display, which changes its color.'
    },
    size: {
      control: { type: 'select' }, // Drop-down to select size
      options: ['small', 'medium', 'large'], // Defines the available size options
      description: 'The size of the alert, affecting its font size and padding.'
    }
  }
}

// Template for the stories
const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args }
  },
  template: '<Alert v-bind="args" />'
})

// Primary story for Alert component
export const Primary = Template.bind({})
Primary.args = {
  message: 'This is an important message!',
  msgType: 'success',
  size: 'medium'
}

// Secondary story specifically for a danger type alert
export const Danger = Template.bind({})
Danger.args = {
  message: 'Warning! Something went wrong!',
  msgType: 'danger',
  size: 'medium'
}

// Additional stories can be created for each size with a default message and type
export const Small = Template.bind({})
Small.args = {
  message: 'This is a small alert!',
  msgType: 'success',
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  message: 'This is a large alert!',
  msgType: 'success',
  size: 'large'
}
