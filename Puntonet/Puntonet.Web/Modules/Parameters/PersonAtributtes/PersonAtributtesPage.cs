using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages
{
    [PageAuthorize(typeof(PersonAtributtesRow))]
    public class PersonAtributtesPage : Controller
    {
        [Route("Parameters/PersonAtributtes")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/PersonAtributtes/PersonAtributtesPage",
                PersonAtributtesRow.Fields.PageTitle());
        }
    }
}