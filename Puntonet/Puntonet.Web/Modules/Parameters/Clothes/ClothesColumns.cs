using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.Clothes")]
    [BasedOnRow(typeof(ClothesRow), CheckNames = true)]
    public class ClothesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdClothe { get; set; }
        [EditLink]
        public string Description { get; set; }
        public string IdColorDescription { get; set; }

        //public string ClotheColor { get; set; }
    }
}