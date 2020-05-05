import React from "react";
import { useState } from "react";
import countDown from "../countDownMessage";

function Event(props) {
  const [daysLeft, setCountDown] = useState("");
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [visibleForm, setVisibility] = useState("true");

  function handleChangeName(event) {
    setEventName(event.target.value);
  }

  function handleChangeDate(event) {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);
    setDate(event.target.value);
  }

  function preventSubmit(event) {
    setVisibility(false);
    event.preventDefault();
  }

  function startCountDown(){
    setCountDown(countDown(selectedDate));
  }

  return (
    <div className="container">
      <form
        className={visibleForm ? "show" : "hide"}
        autoComplete="off"
        onSubmit={preventSubmit}
      >
        <input
          name="name"
          onChange={handleChangeName}
          type="text"
          placeholder="Enter the Event name"
          value={eventName}
        />
        <input
          name="date"
          onChange={handleChangeDate}
          type="date"
          value={date}
          required
        />
        <button
          type="submit"
          onClick={() => 
            setInterval(startCountDown, 10)
          }
        >
          Check the count down
        </button>
      </form>
      <h3 className={visibleForm ? "hide" : "show"}>{eventName}</h3>
      <p>{daysLeft}</p>
    </div>
  );
}

export default Event;
