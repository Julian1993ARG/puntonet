using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Puntonet.Parameters.ColorsRow>;
using MyRow = Puntonet.Parameters.ColorsRow;

namespace Puntonet.Parameters
{
    public interface IColorsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ColorsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IColorsListHandler
    {
        public ColorsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}