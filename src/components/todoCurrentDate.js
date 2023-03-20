function TodoCurrentDate() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    // year: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric',
    timeZone: timeZone,
  }
  const fechaActual = new Date().toLocaleString('en-US', options)
  return (
    <div>
      <p>{fechaActual}</p>
    </div>
  )
}

export { TodoCurrentDate }
