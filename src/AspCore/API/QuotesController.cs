using AspCore.Models;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspCore.API
{
    [Route("api/[controller]")]
    public class QuotesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Quotes> Get()
        {
            return new List<Quotes>
            {
                new Quotes {Id=1,Content="Quotes 1",Author="Quotes Author 1" },
                new Quotes {Id=2,Content="Quotes 3",Author="Quotes Author 2" },
                new Quotes {Id=3,Content="Quotes 3",Author="Quotes Author 3" },
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}