using Serenity.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Atributes")]
    [BasedOnRow(typeof(AtributesRow), CheckNames = true)]
    public class AtributesForm
    {
        public string Description { get; set; }
        public string Value { get; set; }
    }
}