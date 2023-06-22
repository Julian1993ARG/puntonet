using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.AtributtesRow>;
using MyRow = Puntonet.Parameters.AtributtesRow;

namespace Puntonet.Parameters
{
    public interface IAtributtesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributtesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAtributtesListHandler
    {
        public AtributtesListHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}