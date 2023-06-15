using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.ClothesRow;

namespace Puntonet.Parameters
{
    public interface IClothesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClothesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClothesDeleteHandler
    {
        public ClothesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}