export function token() {
  return {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };
}

export function formatdAte(datetime: string) {

  const dateNode = new Date(datetime);

  const dateDetails = {
    years: dateNode.getFullYear(),
    month: dateNode.getMonth(),
    date: dateNode.getDate(),
    hour: dateNode.getHours(),
    minutes: dateNode.getMinutes(),
  };

  return `${dateDetails.years}-${dateDetails.month}-${dateDetails.date} ${dateDetails.hour}:${dateDetails.minutes}`;
}
