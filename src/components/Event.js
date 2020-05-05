import React from "react";
import { useState } from "react";
import countDown from "../countDownMessage";

function Event(props) {
  const [daysLeft, setCountDown] = useState("");
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [visible, setVisibility] = useState("true");

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



  return (

    <div className="container" >
      <form autoComplete="off" onSubmit={preventSubmit}>
        <input
          className={visible ? "show" : "hide"}
          name="name"
          onChange={handleChangeName}
          type="text"
          placeholder="Enter the Event name"
          value={eventName}
        />
        <input
          className={visible ? "show" : "hide"}
          name="date"
          onChange={handleChangeDate}
          type="date"
          value={date}
          required
        />
        <button
          className={visible ? "show" : "hide"}
          type="submit"
          onClick={() => {
            setCountDown(countDown(selectedDate));
          }}
        >
          Check the count down
        </button>
      </form>
      <h3 className={visible ? "hide" : "show"}>{eventName}</h3>
      <p>{daysLeft}</p>
    </div>
  );
}

export default Event;
