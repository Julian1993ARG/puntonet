using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.PersonAtributtesRow>;
using MyRow = Puntonet.Parameters.PersonAtributtesRow;

namespace Puntonet.Parameters
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