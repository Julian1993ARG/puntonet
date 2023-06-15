using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.PersonClothes")]
    [BasedOnRow(typeof(PersonClothesRow), CheckNames = true)]
    public class PersonClothesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdPersonClothe { get; set; }
        public string IdPersonName { get; set; }
        public string IdClotheDescription { get; set; }
    }
}