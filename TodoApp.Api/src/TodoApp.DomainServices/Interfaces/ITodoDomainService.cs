using System.Collections.Generic;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Filters;

namespace TodoApp.DomainServices.Interfaces
{
    public interface ITodoDomainService
    {
        Todo Create(Todo todo);

        IEnumerable<Todo> List(TodoFilter filter);

        Todo GetById(int id);

        bool Update(Todo todo);

        bool Delete(int id);
    }
}