using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation.Results;

namespace TodoApp.Extensions
{
    public static class ValidationResultExtension
    {
        public static string[] GetErros(this ValidationResult validationResult)
        {
            var result = new List<string>();
            if (validationResult != null && validationResult.Errors != null)
                foreach (var error in validationResult.Errors)
                    result.Add(error.ErrorMessage);
            return result.ToArray();
        }
    }
}