using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.PersonClothesRow>;
using MyRow = Puntonet.Parameters.PersonClothesRow;

namespace Puntonet.Parameters
{
    public interface IPersonClothesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonClothesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonClothesListHandler
    {
        public PersonClothesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}