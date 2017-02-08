using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Data.Repositories;
using TodoApp.Domain.Repositories;

namespace TodoApp.Data.IoC
{
    public static class Module
    {
        //register interface & class
        public static Dictionary<Type, Type> GetTypes()
        {
            var dictionary = new Dictionary<Type, Type>();
            dictionary.Add(typeof(ITodoRepository), typeof(TodoRepository));
            return dictionary;
        }
    }
}