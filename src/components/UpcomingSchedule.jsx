import React from 'react';
import upcomingAppointments from '../data/upcomingAppointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="schedule-group">
        <h4>On Thursday</h4>
        <SimpleAppointmentCard
          title={upcomingAppointments[0].title}
          time={upcomingAppointments[0].time}
          icon={upcomingAppointments[0].icon}
        />
        <SimpleAppointmentCard
          title={upcomingAppointments[1].title}
          time={upcomingAppointments[1].time}
          icon={upcomingAppointments[1].icon}
        />
      </div>
      <div className="schedule-group">
        <h4>On Saturday</h4>
        <SimpleAppointmentCard
          title={upcomingAppointments[2].title}
          time={upcomingAppointments[2].time}
          icon={upcomingAppointments[2].icon}
        />
        <SimpleAppointmentCard
          title={upcomingAppointments[3].title}
          time={upcomingAppointments[3].time}
          icon={upcomingAppointments[3].icon}
        />
      </div>
    </section>
  );
};

export default UpcomingSchedule;
