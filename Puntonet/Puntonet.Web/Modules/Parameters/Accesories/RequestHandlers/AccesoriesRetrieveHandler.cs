using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.AccesoriesRow>;
using MyRow = Puntonet.Parameters.AccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IAccesoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AccesoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAccesoriesRetrieveHandler
    {
        public AccesoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}