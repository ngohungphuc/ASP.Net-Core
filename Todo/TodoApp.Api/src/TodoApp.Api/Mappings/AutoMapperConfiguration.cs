using AutoMapper;

namespace TodoApp.Api.Mappings
{
    public static class AutoMapperConfiguration
    {
        public static void Initialize()
        {
            Mapper.Initialize((config) =>
            {
                config.AddProfiles(IoC.AutoMapperConfiguration.GetAutoMapperProfiles());
            });
        }
    }
}