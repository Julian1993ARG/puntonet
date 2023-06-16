using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Persons.PersonAtributtesRow>;
using MyRow = Puntonet.Persons.PersonAtributtesRow;

namespace Puntonet.Persons
{
    public interface IPersonAtributtesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributtesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributtesRetrieveHandler
    {
        public PersonAtributtesRetrieveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}