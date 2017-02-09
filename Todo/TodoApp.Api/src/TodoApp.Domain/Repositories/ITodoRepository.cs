using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Filters;

namespace TodoApp.Domain.Repositories
{
    public interface ITodoRepository
    {
        Todo Create(Todo todo);

        IEnumerable<Todo> List(TodoFilter filter);

        Todo GetById(int id);

        bool Update(Todo todo);

        bool Delete(int id);
    }
}