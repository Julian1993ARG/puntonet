using System;
using Serenity.Data;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.AccesoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.AccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IAccesoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AccesoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAccesoriesSaveHandler
    {
        public AccesoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            var existAccesori = this.Connection.List<AccesoriesRow>(
                    new Criteria(AccesoriesRow.Fields.Description.ToString().ToUpper()) == Row.Description.ToUpper()
                );

            if (existAccesori.Count > 0) throw new Exception($"The accesory {Row.Description} is already register");
        }
    }
}