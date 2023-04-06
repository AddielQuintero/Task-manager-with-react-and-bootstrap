export const FormatDate = () => {
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
  const currentDate = new Date().toLocaleString('en-US', options)
  return (
    <div>
      <p>{currentDate}</p>
    </div>
  )
}
