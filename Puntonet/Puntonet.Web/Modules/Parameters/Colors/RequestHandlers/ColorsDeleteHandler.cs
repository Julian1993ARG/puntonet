using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Puntonet.Parameters.ColorsRow;

namespace Puntonet.Parameters
{
    public interface IColorsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ColorsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IColorsDeleteHandler
    {
        public ColorsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}