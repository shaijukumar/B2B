using System.Collections.Generic;
using System.Threading.Tasks;
using API.Features.CategoryList;
using API.Model;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoryController : BaseController
    {

        [HttpGet]
        public async Task<ActionResult<List<Category>>> List()
        {
            return await Mediator.Send(new List.Query());
        }

    }
}