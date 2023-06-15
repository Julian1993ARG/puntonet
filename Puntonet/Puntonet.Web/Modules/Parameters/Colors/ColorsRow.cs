using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[Colors]")]
    [DisplayName("Colors"), InstanceName("Colors")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ColorsRow : Row<ColorsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Color"), Identity, IdProperty]
        public int? IdColor
        {
            get => fields.IdColor[this];
            set => fields.IdColor[this] = value;
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        public ColorsRow()
            : base()
        {
        }

        public ColorsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdColor;
            public StringField Description;
        }
    }
}