using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.AtributesRow>;
using MyRow = Puntonet.Parameters.AtributesRow;

namespace Puntonet.Parameters
{
    public interface IAtributesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAtributesRetrieveHandler
    {
        public AtributesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}