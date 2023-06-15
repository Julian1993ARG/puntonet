using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.AtributesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.AtributesRow;

namespace Puntonet.Parameters
{
    public interface IAtributesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAtributesSaveHandler
    {
        public AtributesSaveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}