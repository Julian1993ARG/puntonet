using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.AccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IAccesoriesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AccesoriesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAccesoriesDeleteHandler
    {
        public AccesoriesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}