using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OdeToFood.Controllers
{
    [Route("about")]
    public class AboutController
    {
        [Route("address")]
        public string Address()
        {
            return "Address";
        }
    }
}