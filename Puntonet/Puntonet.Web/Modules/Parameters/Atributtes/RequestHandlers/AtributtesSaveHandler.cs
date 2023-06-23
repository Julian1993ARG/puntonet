using System;
using Serenity.Data;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.AtributtesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.AtributtesRow;

namespace Puntonet.Parameters
{
    public interface IAtributtesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributtesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAtributtesSaveHandler
    {
        public AtributtesSaveHandler(IRequestContext context)
                : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            var atributtesList = this.Connection.List<AtributtesRow>(
                    new Criteria(AtributtesRow.Fields.Description.ToString().ToUpper()) == Row.Description.ToUpper()
                );

            if (atributtesList.Count > 0) throw new Exception($"The atributte {Row.Description} is already register");
        }
    }
}