using Serenity.ComponentModel;
using Serenity.Web;
using System.ComponentModel;

namespace Puntonet.Parameters.Forms
{
    [FormScript("Parameters.Clothes")]
    [BasedOnRow(typeof(ClothesRow), CheckNames = true)]
    public class ClothesForm
    {
        [DisplayName("Clothe")]
        public string Description { get; set; }
        [DisplayName("Color")]
        public int IdColor { get; set; }
    }
}