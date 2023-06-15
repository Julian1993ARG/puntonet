using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.PersonClothesRow;

namespace Puntonet.Parameters
{
    public interface IPersonClothesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonClothesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonClothesDeleteHandler
    {
        public PersonClothesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}