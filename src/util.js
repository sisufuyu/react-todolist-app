export const statusList = [
  {
    value: 0,
    name: 'not started'
  },
  {
    value: 1,
    name: 'in progress'
  },
  {
    value: 2,
    name: 'done'
  }
]

export const itemClass = (status) => {
  switch (status) {
  case 0:
    return 'not-started'
  case 1:
    return 'in-progress'
  case 2:
    return 'done'
  default:
    return ''
  }
}