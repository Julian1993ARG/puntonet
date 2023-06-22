using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.AtributtesRow>;
using MyRow = Puntonet.Parameters.AtributtesRow;

namespace Puntonet.Parameters
{
    public interface IAtributtesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributtesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAtributtesRetrieveHandler
    {
        public AtributtesRetrieveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}