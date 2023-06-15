using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace Puntonet.Parameters.Pages 
{

    [PageAuthorize(typeof(ClothesRow))]
    public class ClothesController : Controller
    {
        [Route("Parameters/Clothes")]
        public ActionResult Index()
        {
            return this.GridPage("@/Parameters/Clothes/ClothesPage",
                ClothesRow.Fields.PageTitle());
        }
    }
}