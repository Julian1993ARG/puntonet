using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.Colors")]
    [BasedOnRow(typeof(ColorsRow), CheckNames = true)]
    public class ColorsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdColor { get; set; }
        [EditLink]
        public string Description { get; set; }
    }
}