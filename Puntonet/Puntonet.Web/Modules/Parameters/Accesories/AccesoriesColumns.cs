using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Parameters.Columns
{
    [ColumnsScript("Parameters.Accesories")]
    [BasedOnRow(typeof(AccesoriesRow), CheckNames = true)]
    public class AccesoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int IdAccesory { get; set; }
        [EditLink]
        public string Description { get; set; }
    }
}