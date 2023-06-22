using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.AtributtesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.AtributtesRow;

namespace Puntonet.Parameters
{
    public interface IAtributtesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributtesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAtributtesSaveHandler
    {
        public AtributtesSaveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}