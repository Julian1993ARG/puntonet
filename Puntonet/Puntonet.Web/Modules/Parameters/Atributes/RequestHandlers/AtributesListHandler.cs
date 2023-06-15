using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.AtributesRow>;
using MyRow = Puntonet.Parameters.AtributesRow;

namespace Puntonet.Parameters
{
    public interface IAtributesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAtributesListHandler
    {
        public AtributesListHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}