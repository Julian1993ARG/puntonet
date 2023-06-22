using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.PersonAtributtes")]
    [BasedOnRow(typeof(PersonAtributtesRow), CheckNames = true)]
    public class PersonAtributtesForm
    {
        [DisplayName("Atributte")]
        public int IdAtributte { get; set; }
        public string Value { get; set; }
        //public int IdPerson { get; set; }
    }
}