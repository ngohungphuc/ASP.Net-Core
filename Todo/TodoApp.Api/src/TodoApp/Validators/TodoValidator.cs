using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace TodoApp.Validators
{
    public class TodoValidator : AbstractValidator<AppServices.Dtos.TodoDto>
    {
        public TodoValidator()
        {
            RuleFor(x => x.Text).NotNull().WithMessage("Text field is required.");
        }
    }
}