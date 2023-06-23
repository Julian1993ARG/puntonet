using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Parameters.PersonClothesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Parameters.PersonClothesRow;

namespace Puntonet.Parameters
{
    public interface IPersonClothesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonClothesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonClothesSaveHandler
    {
        public PersonClothesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        //aca va la validacion para que no exista un registro con el mismo nobre del que se quiere guardar
    }
}