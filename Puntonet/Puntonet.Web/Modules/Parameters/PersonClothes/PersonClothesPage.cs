using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages 
{

    [PageAuthorize(typeof(PersonClothesRow))]
    public class PersonClothesController : Controller
    {
        [Route("Parameters/PersonClothes")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/PersonClothes/PersonClothesPage",
                PersonClothesRow.Fields.PageTitle());
        }
    }
}