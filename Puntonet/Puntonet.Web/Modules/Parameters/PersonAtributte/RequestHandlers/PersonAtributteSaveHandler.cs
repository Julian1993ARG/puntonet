using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.PersonAtributteRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.PersonAtributteRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributteSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributteSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributteSaveHandler
    {
        public PersonAtributteSaveHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}