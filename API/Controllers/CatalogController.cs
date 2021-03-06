using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Features.Catlog;
using API.Model;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CatalogController : BaseController
    {

        [HttpGet]
        public async Task<ActionResult<List<CatlogDto>>> List()
        {
            return await Mediator.Send(new List.Query());
        }


        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await Mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Mediator.Send(new Delete.Command { Id = id });
        }

    }
}