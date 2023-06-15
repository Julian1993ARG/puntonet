using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[Accesories]")]
    [DisplayName("Accesories"), InstanceName("Accesories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Parameters.Accesories", Permission = "*")]
    public sealed class AccesoriesRow : Row<AccesoriesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Accesory"), Identity, IdProperty]
        public int? IdAccesory
        {
            get => fields.IdAccesory[this];
            set => fields.IdAccesory[this] = value;
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        public AccesoriesRow()
            : base()
        {
        }

        public AccesoriesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAccesory;
            public StringField Description;
        }
    }
}