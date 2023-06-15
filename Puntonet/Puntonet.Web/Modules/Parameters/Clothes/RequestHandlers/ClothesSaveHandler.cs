using Serenity.Services;
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
    }
}