using System.Collections.Generic;
using TodoApp.AppServices.Dtos;

namespace TodoApp.AppServices.Interfaces
{
    public interface ITodoAppService
    {
        TodoDto Create(TodoDto todo);

        IEnumerable<TodoDto> List(TodoFilterDto filter);

        TodoDto GetById(int id);

        bool Update(TodoDto todo);

        bool Delete(int id);
    }
}