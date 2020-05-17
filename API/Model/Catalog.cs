using System;

namespace API.Model
{
    public class Catalog
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public virtual AppUser Supplier { get; set; }
    }
}