using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Data
{
    public class Tag : ConferenceDTO.Tag
    {
        public virtual ICollection<SessionTag> SessionTags { get; set; }
    }
}
