function TodoCurrentDate() {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }

  const fechaActual = new Date().toLocaleDateString('en-US', options)

  return <p>{fechaActual}</p>
}

export { TodoCurrentDate }
