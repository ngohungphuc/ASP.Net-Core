using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Filters;
using TodoApp.Domain.Repositories;
using TodoApp.DomainServices.Interfaces;

namespace TodoApp.DomainServices
{
    internal class TodoDomainService : ITodoDomainService
    {
        private readonly ITodoRepository repository;

        public TodoDomainService(ITodoRepository repository)
        {
            this.repository = repository;
        }

        public Todo Create(Todo todo)
        {
            return repository.Create(todo);
        }

        public IEnumerable<Todo> List(TodoFilter filter)
        {
            return repository.List(filter);
        }

        public Todo GetById(int id)
        {
            return repository.GetById(id);
        }

        public bool Update(Todo todo)
        {
            return repository.Update(todo);
        }

        public bool Delete(int id)
        {
            return repository.Delete(id);
        }
    }
}