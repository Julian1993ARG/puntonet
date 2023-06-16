using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Persons.PersonAtributtesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Persons.PersonAtributtesRow;

namespace Puntonet.Persons
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