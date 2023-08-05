export default function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}year ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}month ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}day ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    weekday: 'long',
  })

  return `${fullDate} (${formattedDate})`
}
