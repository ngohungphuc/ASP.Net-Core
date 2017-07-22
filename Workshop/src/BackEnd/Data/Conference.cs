using ConferenceDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data
{
    public class Conference : ConferenceDTO.Conference
    {
        public virtual ICollection<Track> Tracks { get; set; }

        public virtual ICollection<Speaker> Speakers { get; set; }

        public virtual ICollection<Session> Sessions { get; set; }

        public virtual ICollection<ConferenceAttendee> ConferenceAttendees { get; set; }
    }

}
