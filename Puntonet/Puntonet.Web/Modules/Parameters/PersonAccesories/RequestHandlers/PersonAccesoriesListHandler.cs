using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.PersonAccesoriesRow>;
using MyRow = Puntonet.Parameters.PersonAccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAccesoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAccesoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAccesoriesListHandler
    {
        public PersonAccesoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}