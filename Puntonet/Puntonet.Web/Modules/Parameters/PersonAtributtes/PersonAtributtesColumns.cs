using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.PersonAtributtes")]
    [BasedOnRow(typeof(PersonAtributtesRow), CheckNames = true)]
    public class PersonAtributtesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdPersonAtributte { get; set; }
        [EditLink]
        public string Value { get; set; }
        public string IdPersonName { get; set; }
        public string IdAtributteDescription { get; set; }
    }
}