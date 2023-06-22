using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.PersonAtributtesRow>;
using MyRow = Puntonet.Parameters.PersonAtributtesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributtesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributtesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributtesListHandler
    {
        public PersonAtributtesListHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}