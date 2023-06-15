using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Puntonet.Parameters.ColorsRow>;
using MyRow = Puntonet.Parameters.ColorsRow;

namespace Puntonet.Parameters
{
    public interface IColorsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColorsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IColorsRetrieveHandler
    {
        public ColorsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}