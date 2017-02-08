using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.AppServices.Dtos;
using TodoApp.AppServices.Interfaces;
using TodoApp.DomainServices.Interfaces;

namespace TodoApp.AppServices
{
    internal class TodoAppService : ITodoAppService
    {
        private readonly ITodoDomainService service;

        public TodoAppService(ITodoDomainService service)
        {
            this.service = service;
        }

        public TodoDto Create(TodoDto todo)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TodoDto> List(TodoFilterDto filter)
        {
            throw new NotImplementedException();
        }

        public TodoDto GetById(int id)
        {
            throw new NotImplementedException();
        }

        public bool Update(TodoDto todo)
        {
            throw new NotImplementedException();
        }

        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}