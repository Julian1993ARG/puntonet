using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Persons.Columns
{
    [ColumnsScript("Persons.PersonAtributtes")]
    [BasedOnRow(typeof(PersonAtributtesRow), CheckNames = true)]
    public class PersonAtributtesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdPersonAtributte { get; set; }
        [EditLink]
        public string Description { get; set; }
        public string Value { get; set; }
        public string IdPersonName { get; set; }
    }
}