using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.Atributes")]
    [BasedOnRow(typeof(AtributesRow), CheckNames = true)]
    public class AtributesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdAtribute { get; set; }
        [EditLink]
        public string Description { get; set; }
        public string Value { get; set; }
    }
}