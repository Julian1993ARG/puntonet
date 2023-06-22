using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.PersonAtributtesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.PersonAtributtesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributtesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributtesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributtesSaveHandler
    {
        public PersonAtributtesSaveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}