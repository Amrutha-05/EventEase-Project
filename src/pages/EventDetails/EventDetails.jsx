import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import CountdownTimer from "../../components/CountDownTimer/CountDownTimer";
import { formatGoogleCalendarDate } from "../../utils/helpers";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);

  const filteredEvent = eventList.find((eventDetail) => eventDetail.id === numId);
  if (!filteredEvent) return <p>Event not found</p>;

  // ⏱️ Countdown timer date
  const fullDateStr = `${filteredEvent.date.year}-${String(filteredEvent.date.monthNumber).padStart(2, "0")}-01T09:00:00`;

  // 🔍 Determine if event is past or upcoming
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-indexed

  const eventMonth = new Date(`${filteredEvent.date.month} 1, ${filteredEvent.date.year}`).getMonth();
  const eventYear = filteredEvent.date.year;

  const isPastEvent =
    eventYear < currentYear ||
    (eventYear === currentYear && eventMonth < currentMonth);

  const isUpcoming =
    eventYear > currentYear ||
    (eventYear === currentYear && eventMonth >= currentMonth);

  // 📅 Google Calendar link
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    filteredEvent.heading
  )}&dates=${formatGoogleCalendarDate(fullDateStr)}&details=${encodeURIComponent(
    filteredEvent.description
  )}&location=${encodeURIComponent(filteredEvent.location || "")}`;

  const handleRegister = () => {
    alert("✅ You've successfully registered!");
  };

  return (
    <div className="event-details-container">
      <Navigation />

      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />

        <div className="event-details-content">
          <h3>Event Name: {filteredEvent.heading}</h3>

          {isUpcoming && <CountdownTimer targetDate={fullDateStr} />}

          <div className="event-info">
            <div className="info-item">
              <MdCalendarMonth className="icon" />
              <span>
                {filteredEvent.date.month} {filteredEvent.date.year}
              </span>
            </div>
            <div className="info-item">
              <IoLocationSharp className="icon" />
              <span>{filteredEvent.location}</span>
            </div>
          </div>

          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>

          {/* ✅ Buttons */}
          <div className="button-group">
            <button
              className="register-btn"
              onClick={handleRegister}
              disabled={isPastEvent}
            >
              Register Now
            </button>

            <a
              href={isPastEvent ? undefined : calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`add-to-calendar ${isPastEvent ? "disabled" : ""}`}
              onClick={(e) => isPastEvent && e.preventDefault()}
            >
              Add to Google Calendar
            </a>
          </div>

          {isPastEvent && (
            <p className="register-closed">Registrations Closed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
