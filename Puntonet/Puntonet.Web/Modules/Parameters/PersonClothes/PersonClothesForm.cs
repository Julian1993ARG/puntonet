using Serenity.ComponentModel;
using Serenity.Web;
using System.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.PersonClothes")]
    [BasedOnRow(typeof(PersonClothesRow), CheckNames = true)]
    public class PersonClothesForm
    {
        //public int IdPerson { get; set; }
        [DisplayName("Clothe")]
        public int IdClothe { get; set; }
    }
}