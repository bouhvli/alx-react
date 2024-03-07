const getFullYear = () => {
  const year = new Date().getFullYear()
  return (year);

}
const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return ('Holberton School');
  } else {
    return ('Holberton School main dashboard');
  }
}

const getLatestNotification = () => {
  return ('<strong>Urgent requirement</strong> - complete by EOD');
}
export { getFullYear, getFooterCopy, getLatestNotification };