using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;
using Puntonet.Persons;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;

namespace Puntonet.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index([FromServices] ITwoLevelCache cache,
            [FromServices] ISqlConnections sqlConnections
            )
        {
            if(cache == null)
                throw new ArgumentNullException(nameof(cache));

            if(sqlConnections == null)
                throw new ArgumentNullException(nameof(sqlConnections));

            var o = PersonsRow.Fields;

            var cachedModel = cache.GetLocalStoreOnly("DashboardPageModel", System.TimeSpan.FromMinutes(5),
                o.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    using (var connection = sqlConnections.NewFor<PersonsRow>())
                    {
                        model.PersonsCount = connection.Count<PersonsRow>();
                        model.FemaleCount = connection.Count<PersonsRow>(new Criteria(PersonsRow.Fields.Gender) == 2);
                        model.MaleCount = model.PersonsCount - model.FemaleCount;
                    }
                    return model;
                });

            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
