function formatDate(date, format) {
  // Chuyển đổi chuỗi thời gian về dạng new Date()
  let today = new Date(date);

  // Lấy ra ngày
  let day = today.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  // Lấy ra tháng
  let month = today.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  // Lấy ra năm
  const year = today.getFullYear();

  switch (format) {
    case "dd":
      return day;

    case "mm":
      return month;

    case "yyyy":
      return year;

    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;

    case "yyyy/mm/dd":
      return `${year}/${month}/${day}`;

    default:
      return date;
  }
}
