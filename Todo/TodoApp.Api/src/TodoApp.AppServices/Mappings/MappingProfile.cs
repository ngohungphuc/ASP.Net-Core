using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TodoApp.AppServices.Dtos;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Filters;

namespace TodoApp.AppServices.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TodoDto, Todo>().ReverseMap();
            CreateMap<TodoFilterDto, TodoFilter>().ReverseMap();
        }
    }
}