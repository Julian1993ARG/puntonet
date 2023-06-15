using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages 
{

    [PageAuthorize(typeof(PersonAccesoriesRow))]
    public class PersonAccesoriesController : Controller
    {
        [Route("Parameters/PersonAccesories")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/PersonAccesories/PersonAccesoriesPage",
                PersonAccesoriesRow.Fields.PageTitle());
        }
    }
}