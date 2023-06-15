using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.PersonAccesoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.PersonAccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAccesoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAccesoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAccesoriesSaveHandler
    {
        public PersonAccesoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}