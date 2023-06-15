using Serenity.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.PersonAtributte")]
    [BasedOnRow(typeof(PersonAtributteRow), CheckNames = true)]
    public class PersonAtributteForm
    {
        public int IdPerson { get; set; }
        public int IdAtribute { get; set; }
    }
}