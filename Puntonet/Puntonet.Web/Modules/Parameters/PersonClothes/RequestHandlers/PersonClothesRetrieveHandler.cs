using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.PersonClothesRow>;
using MyRow = Puntonet.Parameters.PersonClothesRow;

namespace Puntonet.Parameters
{
    public interface IPersonClothesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonClothesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonClothesRetrieveHandler
    {
        public PersonClothesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}