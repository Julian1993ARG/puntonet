using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Persons.PersonAtributtesRow;

namespace Puntonet.Persons
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