using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Persons.PersonAtributtesRow>;
using MyRow = Puntonet.Persons.PersonAtributtesRow;

namespace Puntonet.Persons
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