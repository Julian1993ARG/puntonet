using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.AtributtesRow;

namespace Puntonet.Parameters
{
    public interface IAtributtesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AtributtesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAtributtesDeleteHandler
    {
        public AtributtesDeleteHandler(IRequestContext context)
                : base(context)
        {
        }
    }
}