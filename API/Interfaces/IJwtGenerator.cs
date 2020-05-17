using API.Model;

namespace API.Interfaces
{
    public interface IJwtGenerator
    {
         string CreateToken(AppUser user);
    }
}