using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Results
{
    public class GenericResult
    {
        public string[] Errors { get; set; }
        public bool Sucess { get; set; }
    }

    public class GenericResult<TResult> : GenericResult
    {
        public TResult Result { get; set; }
    }
}