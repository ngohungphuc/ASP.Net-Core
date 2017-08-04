using ConferenceDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
    public class ConferenceAttendee
    {
        public int ConferenceID { get; set; }

        public Conference Conference { get; set; }

        public int AttendeeID { get; set; }

        public Attendee Attendee { get; set; }
    }
}