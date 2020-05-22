using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using API.Data;
using API.Errors;
using API.Interfaces;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Features.Catlog
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string DisplayName { get; set; }
            public string Description { get; set; }
            public Guid CategoryId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.CategoryId).NotEmpty();
            }

            private object RRuleFor(Func<object, object> p)
            {
                throw new NotImplementedException();
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
                var catalog = await _context.Catalogs
                    .FindAsync(request.Id);
                if (catalog == null)
                    throw new RestException(HttpStatusCode.NotFound, new { Catalog = "Not found" });

                var CurrentUsername = _userAccessor.GetCurrentUsername();

                if (CurrentUsername.ToLower().ToString() == "admin" || catalog.Supplier.UserName == CurrentUsername)
                {

                    var category = await _context.Categories.SingleOrDefaultAsync(x =>
                    x.Id == request.CategoryId);

                    if (category != null)
                    {
                        catalog.Category = category;
                    }

                    catalog.DisplayName = request.DisplayName ?? catalog.DisplayName;
                    catalog.Description = request.Description ?? catalog.Description;

                    var success = await _context.SaveChangesAsync() > 0;
                    if (success) return Unit.Value;
                }
                else
                {
                    throw new Exception("Unauthorized access");
                }


                throw new Exception("Problem saving changes");
            }
        }

    }
}