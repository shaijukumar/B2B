using System;

namespace API.Features.Catlog
{ 
    public class CatlogDto
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public string SupplierName { get; set; }
        public string SupplierId { get; set; }
    }
}