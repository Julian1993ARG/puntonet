using Serenity.ComponentModel;
using Serenity.Web;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Atributes")]
    [BasedOnRow(typeof(AtributesRow), CheckNames = true)]
    public class AtributesForm
    {
        public int IdPerson { get; set; }
        public string Description { get; set; }
    }
}