using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.DomainServices.Interfaces;

namespace TodoApp.DomainServices.IoC
{
    public static class Module
    {
        //register interface & class
        public static Dictionary<Type, Type> GetTypes()
        {
            var dictionary = new Dictionary<Type, Type>();
            dictionary.Add(typeof(ITodoDomainService), typeof(TodoDomainService));
            return dictionary;
        }
    }
}