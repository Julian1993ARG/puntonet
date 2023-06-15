using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.PersonAccesoriesRow>;
using MyRow = Puntonet.Parameters.PersonAccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAccesoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAccesoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAccesoriesRetrieveHandler
    {
        public PersonAccesoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}