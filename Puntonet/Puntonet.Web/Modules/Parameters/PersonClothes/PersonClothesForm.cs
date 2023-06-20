using Serenity.ComponentModel;
using Serenity.Web;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.PersonClothes")]
    [BasedOnRow(typeof(PersonClothesRow), CheckNames = true)]
    public class PersonClothesForm
    {
        //public int IdPerson { get; set; }
        public int IdClothe { get; set; }
    }
}