using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.PersonAccesoriesRow;

namespace Puntonet.Parameters
{
    public interface IPersonAccesoriesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonAccesoriesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPersonAccesoriesDeleteHandler
    {
        public PersonAccesoriesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}