export default function convertTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleString(); // Adjust format as needed
}
