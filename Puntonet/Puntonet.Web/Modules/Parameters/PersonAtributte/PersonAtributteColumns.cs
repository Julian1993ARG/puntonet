using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.PersonAtributte")]
    [BasedOnRow(typeof(PersonAtributteRow), CheckNames = true)]
    public class PersonAtributteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdPersonAtributte { get; set; }
        public string IdPersonName { get; set; }
        public string IdAtributeDescription { get; set; }
    }
}