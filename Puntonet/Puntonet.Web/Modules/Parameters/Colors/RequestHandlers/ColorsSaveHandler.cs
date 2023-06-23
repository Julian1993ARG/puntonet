using System;
using Serenity.Data;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.ColorsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.ColorsRow;

namespace Puntonet.Parameters
{
    public interface IColorsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColorsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IColorsSaveHandler
    {
        public ColorsSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            var colorList = this.Connection.List<ColorsRow>(
                new Criteria(ColorsRow.Fields.Description.ToString().ToUpper()) == Row.Description.ToString().ToUpper()
                );

            if(colorList.Count > 0) throw new Exception($"El color {Row.Description} ya esta registrado");
            
        }
    }
}