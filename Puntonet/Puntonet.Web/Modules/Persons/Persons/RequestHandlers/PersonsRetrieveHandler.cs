using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Persons.PersonsRow>;
using MyRow = Puntonet.Persons.PersonsRow;

namespace Puntonet.Persons
{
    public interface IPersonsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonsRetrieveHandler
    {
        public PersonsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}