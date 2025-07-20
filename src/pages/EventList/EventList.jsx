import EventCard from "../../components/EventCard/EventCard";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import "./EventList.css";

const EventList = () => {
  const renderEventCards = () =>
    eventList.map((event) => <EventCard key={event.id} {...event} />);

  return (
    <>
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? renderEventCards() : <p>No events available</p>}
        </div>
      </div>
    </>
  );
};

export default EventList;
