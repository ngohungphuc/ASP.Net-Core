using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data
{
    public class Track : ConferenceDTO.Track
    {
        [Required]
        public Conference Conference { get; set; }

        public virtual ICollection<Session> Sessions { get; set; }
    }
}
