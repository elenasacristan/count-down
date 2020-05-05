function countDown(selectedDate) {
  let result = "";
  const today = new Date().getTime();

  const difference = selectedDate.getTime() - today;

  const days_difference = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours_difference = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes_diffence = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds_diffence = Math.floor((difference % (1000 * 60)) / 1000);

  if (difference > 0) {
    result =
      "Only " +
      days_difference +
      " days " +
      hours_difference +
      " hours " +
      minutes_diffence +
      " minutes " +
      seconds_diffence +
      " seconds";
  } else if (days_difference === -1) {
    result = "The event is Today";
  } else {
    result = "The event has already passed :(";
  }


  return result;
}

export default countDown;
