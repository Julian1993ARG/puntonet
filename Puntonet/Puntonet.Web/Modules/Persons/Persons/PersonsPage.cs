using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Persons.Pages 
{

    [PageAuthorize(typeof(PersonsRow))]
    public class PersonsController : Controller
    {
        [Route("Persons/Persons")]
        public ActionResult Index()
        {
            return this.GridPage("@/Persons/Persons/PersonsPage",
                PersonsRow.Fields.PageTitle());
        }
    }
}