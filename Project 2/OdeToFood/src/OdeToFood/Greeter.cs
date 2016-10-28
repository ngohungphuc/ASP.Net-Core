using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OdeToFood
{
    public interface IGreeter
    {
        string GetGretting();
    }

    public class Greeter : IGreeter
    {
        private string greeting;

        public Greeter(IConfiguration configuration)
        {
            //get setting ingo in appsetting
            greeting = configuration["Gretting"];
        }

        public string GetGretting()
        {
            return greeting;
        }
    }
}