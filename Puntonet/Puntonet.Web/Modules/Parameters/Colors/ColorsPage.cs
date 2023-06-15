using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages 
{

    [PageAuthorize(typeof(ColorsRow))]
    public class ColorsController : Controller
    {
        [Route("Parameters/Colors")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/Colors/ColorsPage",
                ColorsRow.Fields.PageTitle());
        }
    }
}