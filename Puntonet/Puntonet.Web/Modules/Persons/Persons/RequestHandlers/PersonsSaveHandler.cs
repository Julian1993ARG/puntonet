using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Persons.PersonsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Persons.PersonsRow;

namespace Puntonet.Persons
{
    public interface IPersonsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonsSaveHandler
    {
        public PersonsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}