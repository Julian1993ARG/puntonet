using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Persons.PersonsRow>;
using MyRow = Puntonet.Persons.PersonsRow;

namespace Puntonet.Persons
{
    public interface IPersonsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonsListHandler
    {
        public PersonsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}