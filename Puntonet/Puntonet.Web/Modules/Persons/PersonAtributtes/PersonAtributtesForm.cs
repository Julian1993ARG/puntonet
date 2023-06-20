using Serenity.ComponentModel;

namespace Puntonet.Persons.Forms
{
    [FormScript("Persons.PersonAtributtes")]
    [BasedOnRow(typeof(PersonAtributtesRow), CheckNames = true)]
    public class PersonAtributtesForm
    {
        //public int IdPerson { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
    }
}