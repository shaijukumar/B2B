using API.Model;
using AutoMapper;

namespace API.Features.Catlog
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<Catalog, CatlogDto>()
                .ForMember(d => d.SupplierName, o => o.MapFrom(s => s.Supplier.DisplayName))
                .ForMember(d => d.SupplierId, o => o.MapFrom(s => s.Supplier.Id));
        }
    }
}