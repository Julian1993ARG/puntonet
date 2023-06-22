using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[Clothes]")]
    [DisplayName("Clothes"), InstanceName("Clothes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Parameters.Clothes", Permission = "*")]
    public sealed class ClothesRow : Row<ClothesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Clothe"), Identity, IdProperty]
        public int? IdClothe
        {
            get => fields.IdClothe[this];
            set => fields.IdClothe[this] = value;
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }
        [LookupEditor("Parameters.Colors", InplaceAdd = true)]
        [DisplayName("Id Color"), NotNull, ForeignKey("[dbo].[Colors]", "IdColor"), LeftJoin("jIdColor"), TextualField("IdColorDescription")]
        public int? IdColor
        {
            get => fields.IdColor[this];
            set => fields.IdColor[this] = value;
        }

        [DisplayName("Id Color Description"), Expression("jIdColor.[Description]")]
        public string IdColorDescription
        {
            get => fields.IdColorDescription[this];
            set => fields.IdColorDescription[this] = value;
        }

        public ClothesRow()
            : base()
        {
        }

        public ClothesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdClothe;
            public StringField Description;
            public Int32Field IdColor;

            public StringField IdColorDescription;
        }
    }
}