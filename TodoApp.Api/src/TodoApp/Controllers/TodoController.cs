using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoApp.AppServices.Dtos;
using TodoApp.AppServices.Interfaces;
using TodoApp.Extensions;
using TodoApp.Validators;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly ITodoAppService appService;
        private readonly TodoValidator validator;

        public TodoController(ITodoAppService appService, Validators.TodoValidator validator)
        {
            this.appService = appService;
            this.validator = validator;
        }

        // GET: api/values
        [HttpGet]
        public Results.GenericResult<IEnumerable<TodoDto>> Get([FromQuery]TodoFilterDto filter)
        {
            var result = new Results.GenericResult<IEnumerable<TodoDto>>();

            try
            {
                result.Result = appService.List(filter);
                result.Sucess = true;
            }
            catch (Exception ex)
            {
                result.Errors = new string[] { ex.Message };
            }

            return result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Results.GenericResult<TodoDto> Get(int id)
        {
            var result = new Results.GenericResult<TodoDto>();

            try
            {
                result.Result = appService.GetById(id);
                result.Sucess = true;
            }
            catch (Exception ex)
            {
                result.Errors = new string[] { ex.Message };
            }

            return result;
        }

        // POST api/values
        [HttpPost]
        public Results.GenericResult<TodoDto> Post([FromBody]TodoDto model)
        {
            var result = new Results.GenericResult<TodoDto>();
            var validatorResult = validator.Validate(model);
            if (validatorResult.IsValid)
            {
                try
                {
                    result.Result = appService.Create(model);
                    result.Sucess = true;
                }
                catch (Exception ex)
                {
                    result.Errors = new string[] { ex.Message };
                }
            }
            else
                result.Errors = validatorResult.GetErros();

            return result;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Results.GenericResult Put(int id, [FromBody]TodoDto model)
        {
            var result = new Results.GenericResult();

            var validatorResult = validator.Validate(model);
            if (validatorResult.IsValid)
            {
                try
                {
                    result.Sucess = appService.Update(model);
                    if (!result.Sucess)
                        throw new Exception($"Todo {id} can't be updated");
                }
                catch (Exception ex)
                {
                    result.Errors = new string[] { ex.Message };
                }
            }
            else
                result.Errors = validatorResult.GetErros();

            return result;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public Results.GenericResult Delete(int id)
        {
            var result = new Results.GenericResult();

            try
            {
                result.Sucess = appService.Delete(id);
                if (!result.Sucess)
                    throw new Exception($"Todo {id} can't be deleted");
            }
            catch (Exception ex)
            {
                result.Errors = new string[] { ex.Message };
            }

            return result;
        }
    }
}