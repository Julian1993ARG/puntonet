using Serenity.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Atributtes")]
    [BasedOnRow(typeof(AtributtesRow), CheckNames = true)]
    public class AtributtesForm
    {
        public string Description { get; set; }
    }
}