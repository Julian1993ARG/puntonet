using Serenity.ComponentModel;
using Serenity.Web;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Clothes")]
    [BasedOnRow(typeof(ClothesRow), CheckNames = true)]
    public class ClothesForm
    {
        public string Description { get; set; }
        public int IdColor { get; set; }
    }
}