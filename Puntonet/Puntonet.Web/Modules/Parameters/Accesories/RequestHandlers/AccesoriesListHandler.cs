using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.AccesoriesRow>;
using MyRow = Puntonet.Parameters.AccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IAccesoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AccesoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAccesoriesListHandler
    {
        public AccesoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}