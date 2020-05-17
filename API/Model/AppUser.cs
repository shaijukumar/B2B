using Microsoft.AspNetCore.Identity;

namespace API.Model
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
    }
}