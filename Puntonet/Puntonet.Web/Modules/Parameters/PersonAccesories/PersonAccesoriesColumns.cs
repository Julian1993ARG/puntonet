using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.PersonAccesories")]
    [BasedOnRow(typeof(PersonAccesoriesRow), CheckNames = true)]
    public class PersonAccesoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdPersonAccesory { get; set; }
        public string IdPersonName { get; set; }
        public string IdAccesoryDescription { get; set; }
    }
}