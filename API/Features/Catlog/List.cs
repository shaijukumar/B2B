using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Data;
using API.Interfaces;
using API.Model;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace API.Features.Catlog
{
    public class List
    {
        public class Query : IRequest<List<CatlogDto>> { }

        public class Handler : IRequestHandler<Query, List<CatlogDto>>
        {
            private readonly IMapper _mapper;

            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _mapper = mapper;
                _context = context;
                _userAccessor = userAccessor;
            }

            public async Task<List<CatlogDto>> Handle(Query request, CancellationToken cancellationToken)
            {

                var CurrentUsername = _userAccessor.GetCurrentUsername();

                if (CurrentUsername.ToLower().ToString() == "admin")
                {

                    var catalogs = await _context.Catalogs
                    .ToListAsync();
                    return _mapper.Map<List<Catalog>, List<CatlogDto>>(catalogs);
                }
                else
                {
                    var supplier = await _context.Users.SingleOrDefaultAsync(x =>
                     x.UserName == _userAccessor.GetCurrentUsername());

                    var catalogs = await _context.Catalogs
                        .Where(c => c.Supplier.UserName == supplier.UserName)
                        .ToListAsync();

                    return _mapper.Map<List<Catalog>, List<CatlogDto>>(catalogs); 
                }
            }
        }
    }
}