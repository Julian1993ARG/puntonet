using Serenity.Data;
using Serenity.Services;
using System;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.ClothesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.ClothesRow;

namespace Puntonet.Parameters
{
    public interface IClothesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClothesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClothesSaveHandler
    {
        public ClothesSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            var existClothe = this.Connection.List<ClothesRow>(
                    new Criteria(ClothesRow.Fields.Description.ToString().ToUpper()) == Row.Description.ToString()
                    &
                    new Criteria(ClothesRow.Fields.IdColor.ToString()) == Row.IdColor.ToString()
                );

            if (existClothe.Count > 0)
            {
                var colorName = this.Connection.ById<ColorsRow>(existClothe[0].IdColor).Description;
                throw new Exception($"The clothing {Row.Description} is already register with the color {colorName}");
            }

        }
    }
}