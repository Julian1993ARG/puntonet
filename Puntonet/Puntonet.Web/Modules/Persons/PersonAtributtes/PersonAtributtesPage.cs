using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Persons.Pages
{
    [PageAuthorize(typeof(PersonAtributtesRow))]
    public class PersonAtributtesPage : Controller
    {
        [Route("Persons/PersonAtributtes")]
        public ActionResult Index()
        {
            return this.GridPage("@/Persons/PersonAtributtes/PersonAtributtesPage",
                PersonAtributtesRow.Fields.PageTitle());
        }
    }
}