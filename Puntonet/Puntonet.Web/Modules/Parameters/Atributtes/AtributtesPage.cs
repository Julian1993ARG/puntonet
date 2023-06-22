using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages
{
    [PageAuthorize(typeof(AtributtesRow))]
    public class AtributtesPage : Controller
    {
        [Route("Parameters/Atributtes")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/Atributtes/AtributtesPage",
                AtributtesRow.Fields.PageTitle());
        }
    }
}