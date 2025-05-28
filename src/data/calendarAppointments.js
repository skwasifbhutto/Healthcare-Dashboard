const calendarAppointments = {
  month: 'October 2021',
  days: [
    { day: 25, appointments: [] },
    { day: 26, appointments: ['08:00', '09:00'] },
    { day: 27, appointments: ['12:00'] },
    { day: 28, appointments: ['10:00', '11:00'] },
    { day: 29, appointments: ['14:00'] },
    { day: 30, appointments: ['12:00', '14:00'] },
    { day: 31, appointments: ['09:00'] },
  ],
  details: [
    { title: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson' },
    { title: 'Physiotherapy Appointment', time: '11:00-12:00', doctor: 'Dr. Kevin Djones' },
  ]
};

export default calendarAppointments;
