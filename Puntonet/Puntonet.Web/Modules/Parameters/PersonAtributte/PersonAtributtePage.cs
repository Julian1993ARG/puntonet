using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages
{
    [PageAuthorize(typeof(PersonAtributteRow))]
    public class PersonAtributtePage : Controller
    {
        [Route("Parameters/PersonAtributte")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/PersonAtributte/PersonAtributtePage",
                PersonAtributteRow.Fields.PageTitle());
        }
    }
}