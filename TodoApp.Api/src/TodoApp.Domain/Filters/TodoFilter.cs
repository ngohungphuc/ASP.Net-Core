using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Domain.Filters
{
    public class TodoFilter
    {
        public int? Id { get; set; }
        public string Text { get; set; }
        public bool? IsCompleted { get; set; }
    }
}