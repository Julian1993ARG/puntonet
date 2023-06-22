using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.Atributtes")]
    [BasedOnRow(typeof(AtributtesRow), CheckNames = true)]
    public class AtributtesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdAtributte { get; set; }
        [EditLink]
        public string Description { get; set; }
    }
}