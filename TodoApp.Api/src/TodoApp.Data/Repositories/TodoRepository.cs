using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Filters;
using TodoApp.Domain.Repositories;

namespace TodoApp.Data.Repositories
{
    internal class TodoRepository : BaseRepository, ITodoRepository
    {
        public TodoRepository(IConfigurationRoot configuration) : base(configuration)
        {
        }

        public Todo Create(Todo todo)
        {
            todo.Id = connection.QueryFirst<int>("exec todo_sp_create @Text,@IsCompleted", todo);
            return todo;
        }

        public IEnumerable<Todo> List(TodoFilter filter)
        {
            var result = connection.Query<Todo>("exec todo_sp_get @Id", filter);
            return result;
        }

        public Todo GetById(int id)
        {
            var result = connection.QueryFirstOrDefault<Todo>("exec todo_sp_get @Id", new { Id = id });
            return result;
        }

        public bool Update(Todo todo)
        {
            var affectedRows = connection.Execute("exec todo_sp_create @Text,@IsCompleted", todo);
            return affectedRows > 0;
        }

        public bool Delete(int id)
        {
            var affectedRows = connection.Execute("Exec todo_sp_delete @Id", new { Id = id });
            return affectedRows > 0;
        }
    }
}