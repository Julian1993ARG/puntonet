using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.ClothesRow>;
using MyRow = Puntonet.Parameters.ClothesRow;

namespace Puntonet.Parameters
{
    public interface IClothesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClothesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClothesListHandler
    {
        public ClothesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}