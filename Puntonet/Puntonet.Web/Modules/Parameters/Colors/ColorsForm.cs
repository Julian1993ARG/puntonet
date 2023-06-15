using Serenity.ComponentModel;
using Serenity.Web;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Colors")]
    [BasedOnRow(typeof(ColorsRow), CheckNames = true)]
    public class ColorsForm
    {
        public string Description { get; set; }
    }
}