using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.PersonAtributtesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributtesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributtesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributtesDeleteHandler
    {
        public PersonAtributtesDeleteHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}