using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.ColorsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.ColorsRow;

namespace Puntonet.Parameters
{
    public interface IColorsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColorsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IColorsSaveHandler
    {
        public ColorsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}