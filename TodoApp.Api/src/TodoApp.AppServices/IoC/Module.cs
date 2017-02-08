using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.AppServices.Interfaces;

namespace TodoApp.AppServices.IoC
{
    public static class Module
    {
        public static Dictionary<Type, Type> GetTypes()
        {
            var dictionary = new Dictionary<Type, Type>();
            dictionary.Add(typeof(ITodoAppService), typeof(TodoAppService));
            return dictionary;
        }
    }
}