function Events() {
  return (
    <section className="events">

      {/* Header */}
      <div className="events-header">
        <h2>Upcoming Events</h2>

        <button className="view-btn">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="events-grid">

        {/* Event 1 */}
        <div className="event-card">
          <h3>Mahashivaratri 2026</h3>

          <div className="event-info">
            <p>📅 February 26, 2026</p>
            <p>⏰ 6:00 PM - 12:00 AM</p>
            <p>📍 Community Center, Bentonville</p>
          </div>

          <p className="event-desc">
            Sacred celebration of Mahashivaratri with night-long prayers,
            bhajans, and special puja ceremonies.
          </p>
        </div>

        {/* Event 2 */}
        <div className="event-card">
          <h3>Ugadi Celebration 2026</h3>

          <div className="event-info">
            <p>📅 March 29, 2026</p>
            <p>⏰ 4:00 PM - 8:00 PM</p>
            <p>📍 Community Center, Bentonville</p>
          </div>

          <p className="event-desc">
            Join us for the celebration of Kannada New Year with traditional
            food, cultural programs, and fun activities for the whole family.
          </p>
        </div>

        {/* Event 3 */}
        <div className="event-card">
          <h3>Summer Picnic 2026</h3>

          <div className="event-info">
            <p>📅 June 20, 2026</p>
            <p>⏰ 11:00 AM - 5:00 PM</p>
            <p>📍 Lake Wedington</p>
          </div>

          <p className="event-desc">
            Annual summer picnic with games, sports, and potluck lunch.
            A great opportunity for community bonding.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Events;
