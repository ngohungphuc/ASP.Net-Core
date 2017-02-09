using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetAngularPrimer.Data;

namespace AspNetAngularPrimer.Controllers
{
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private Data.PrimerContext _context;
        public PersonsController([FromServices] Data.PrimerContext context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<Person>), 200)]
        public async Task<IActionResult> GetAll()
        {
            var data = await _context.Persons
                .OrderBy(one => one.Name)
                .ToListAsync();
            return Ok(data);
        }

        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(typeof(Person), 200)]
        public async Task<IActionResult> GetOne(int id)
        {
            var data = await _context.Persons.FirstOrDefaultAsync(one => one.PersonId == id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        [HttpPost]
        [Route("")]
        [ProducesResponseType(typeof(Person), 200)]
        public async Task<IActionResult> Insert([FromBody] Person person)
        {
            if (ModelState.IsValid)
            {
                _context.Entry(person).State = EntityState.Added;
                await _context.SaveChangesAsync();
                return Created("", person);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> Update([FromBody] Person person)
        {
            if (ModelState.IsValid)
            {
                _context.Update(person);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound(person);
                }

                return new NoContentResult();
            }
            return BadRequest(ModelState);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var type = new Person { PersonId = id };
            _context.Entry(type).State = EntityState.Deleted;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound(id);
            }
            return new NoContentResult();
        }

        [HttpGet]
        [Route("dupe/{name}/{id}")]
        public async Task<IActionResult> Duplicate(string name, int id)
        {
            var data = await _context.Persons.AnyAsync(one => one.Name == name && one.PersonId != id);
            return Ok(data);
        }

    }
}