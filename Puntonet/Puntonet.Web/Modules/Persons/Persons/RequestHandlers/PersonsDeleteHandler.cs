using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Persons.PersonsRow;

namespace Puntonet.Persons
{
    public interface IPersonsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonsDeleteHandler
    {
        public PersonsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}