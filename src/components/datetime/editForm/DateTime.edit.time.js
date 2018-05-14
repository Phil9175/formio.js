export default [
  {
    type: 'checkbox',
    input: true,
    key: 'enableTime',
    label: 'Enable Time Input',
    tooltip: 'Enables time input for this field.',
    weight: 0
  },
  {
    type: 'number',
    input: true,
    key: 'timePicker.hourStep',
    label: 'Hour Step Size',
    tooltip: 'The number of hours to increment/decrement in the time picker.',
    weight: 10
  },
  {
    type: 'number',
    input: true,
    key: 'timePicker.minuteStep',
    label: 'Minute Step Size',
    tooltip: 'The number of minutes to increment/decrement in the time picker.',
    weight: 20
  },
  {
    type: 'checkbox',
    input: true,
    key: 'timePicker.showMeridian',
    label: '12 Hour Time (AM/PM)',
    tooltip: 'Display time in 12 hour time with AM/PM.',
    weight: 30
  },
  {
    type: 'checkbox',
    input: true,
    key: 'timePicker.readonlyInput',
    label: 'Read-Only Input',
    tooltip: 'Makes the time picker input boxes read-only. The time can only be changed by the increment/decrement buttons.',
    weight: 40
  }
];
