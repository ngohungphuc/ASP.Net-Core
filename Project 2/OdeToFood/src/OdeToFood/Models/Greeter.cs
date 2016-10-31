using Microsoft.Extensions.Configuration;

namespace OdeToFood.Models
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