using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.AccesoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.AccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IAccesoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AccesoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAccesoriesSaveHandler
    {
        public AccesoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}