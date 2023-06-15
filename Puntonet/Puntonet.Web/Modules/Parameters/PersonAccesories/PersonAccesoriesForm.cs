using Serenity.ComponentModel;
using Serenity.Web;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.PersonAccesories")]
    [BasedOnRow(typeof(PersonAccesoriesRow), CheckNames = true)]
    public class PersonAccesoriesForm
    {
        public int IdPerson { get; set; }
        public int IdAccesory { get; set; }
    }
}