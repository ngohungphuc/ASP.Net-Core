using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace TodoApp.IoC
{
    public static class IoCConfiguration
    {
        public static void Configuration(IServiceCollection service)
        {
            Configuration(service, Data.IoC.Module.GetTypes());
            Configuration(service, DomainServices.IoC.Module.GetTypes());
            Configuration(service, AppServices.IoC.Module.GetTypes());
        }

        public static void Configuration(IServiceCollection service, Dictionary<Type, Type> types)
        {
            foreach (var type in types)
            {
                service.AddScoped(type.Key, type.Value);
            }
        }
    }
}