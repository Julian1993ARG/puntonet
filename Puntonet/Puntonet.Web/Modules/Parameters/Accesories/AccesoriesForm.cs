using Serenity.ComponentModel;
using Serenity.Web;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Accesories")]
    [BasedOnRow(typeof(AccesoriesRow), CheckNames = true)]
    public class AccesoriesForm
    {
        public string Description { get; set; }
    }
}