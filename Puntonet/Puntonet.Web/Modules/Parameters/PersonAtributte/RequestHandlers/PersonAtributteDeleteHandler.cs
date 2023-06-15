using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.PersonAtributteRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributteDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributteDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributteDeleteHandler
    {
        public PersonAtributteDeleteHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}