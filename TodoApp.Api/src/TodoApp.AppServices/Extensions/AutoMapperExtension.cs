using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace TodoApp.AppServices.Extensions
{
    internal static class AutoMapperExtension
    {
        public static T MapTo<T>(this object value)
        {
            return Mapper.Map<T>(value);
        }

        public static IEnumerable<T> Enumerable<T>(this object value)
        {
            return Mapper.Map<IEnumerable<T>>(value);
        }
    }
}