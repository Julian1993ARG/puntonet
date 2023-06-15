using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.AtributesRow;

namespace Puntonet.Parameters
{
    public interface IAtributesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAtributesDeleteHandler
    {
        public AtributesDeleteHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}