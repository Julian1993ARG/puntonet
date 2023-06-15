using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages 
{

    [PageAuthorize(typeof(AccesoriesRow))]
    public class AccesoriesController : Controller
    {
        [Route("Parameters/Accesories")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/Accesories/AccesoriesPage",
                AccesoriesRow.Fields.PageTitle());
        }
    }
}