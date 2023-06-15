using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages
{
    [PageAuthorize(typeof(AtributesRow))]
    public class AtributesPage : Controller
    {
        [Route("Parameters/Atributes")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/Atributes/AtributesPage",
                AtributesRow.Fields.PageTitle());
        }
    }
}