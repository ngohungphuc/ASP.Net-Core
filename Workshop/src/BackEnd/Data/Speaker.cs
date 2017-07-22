using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data
{
    public class Speaker: ConferenceDTO.Speaker
    {
        public virtual ICollection<SessionSpeaker> SessionSpeakers { get; set; } = new List<SessionSpeaker>();
    }

}
