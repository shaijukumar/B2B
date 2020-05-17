using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Model;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "admin",
                        UserName = "admin",
                        Email = "admin@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            // if (!context.Values.Any())
            // {
            //     var values = new List<Value>
            //      {
            //         new Value {Id = 1, Name = "Value 101"},
            //         new Value {Id = 2, Name = "Value 102"},
            //         new Value {Id = 3, Name = "Value 103"}
            //      };

            //     context.Values.AddRange(values);
            //     context.SaveChanges();
            // }
        }
    }
}