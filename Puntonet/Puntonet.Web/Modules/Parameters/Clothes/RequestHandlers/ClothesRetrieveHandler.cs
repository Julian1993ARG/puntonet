using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.ClothesRow>;
using MyRow = Puntonet.Parameters.ClothesRow;

namespace Puntonet.Parameters
{
    public interface IClothesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClothesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClothesRetrieveHandler
    {
        public ClothesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}