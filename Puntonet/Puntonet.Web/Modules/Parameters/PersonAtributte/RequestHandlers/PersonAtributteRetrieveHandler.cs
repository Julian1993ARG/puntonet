using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.PersonAtributteRow>;
using MyRow = Puntonet.Parameters.PersonAtributteRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributteRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributteRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributteRetrieveHandler
    {
        public PersonAtributteRetrieveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}