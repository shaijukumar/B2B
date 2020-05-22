
using System;
using System.Threading;
using FluentValidation;
using MediatR;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Errors;
using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.Features.Catlog
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string DisplayName { get; set; }
            public string Description { get; set; }

            public float Price { get; set; }
            public Guid CategoryId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.CategoryId).NotEmpty();
                RuleFor(x => x.Price).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var supplier = await _context.Users.SingleOrDefaultAsync(x =>
                    x.UserName == _userAccessor.GetCurrentUsername());

                var category = await _context.Categories.SingleOrDefaultAsync(x =>
                    x.Id == request.CategoryId);

                //CategoryId

                var catalog = new Catalog
                {
                    Id = request.Id,
                    DisplayName = request.DisplayName,
                    Description = request.Description,
                    Supplier = supplier,
                    Category = category,
                    Price = request.Price
                };

                _context.Catalogs.Add(catalog);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }

    }
}