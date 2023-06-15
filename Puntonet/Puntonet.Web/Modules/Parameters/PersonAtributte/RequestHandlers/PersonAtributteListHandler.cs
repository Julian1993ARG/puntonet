using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.PersonAtributteRow>;
using MyRow = Puntonet.Parameters.PersonAtributteRow;

namespace Puntonet.Parameters
{
    public interface IPersonAtributteListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAtributteListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAtributteListHandler
    {
        public PersonAtributteListHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}