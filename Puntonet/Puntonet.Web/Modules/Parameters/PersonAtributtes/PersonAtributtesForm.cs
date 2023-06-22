using Serenity.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.PersonAtributtes")]
    [BasedOnRow(typeof(PersonAtributtesRow), CheckNames = true)]
    public class PersonAtributtesForm
    {
        public string Value { get; set; }
        //public int IdPerson { get; set; }
        //public int IdAtributte { get; set; }
    }
}