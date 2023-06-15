using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[Atributes]")]
    [DisplayName("Atributes"), InstanceName("Atributes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AtributesRow : Row<AtributesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Atribute"), Identity, IdProperty]
        public int? IdAtribute
        {
            get => fields.IdAtribute[this];
            set => fields.IdAtribute[this] = value;
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Value"), Size(200), NotNull]
        public string Value
        {
            get => fields.Value[this];
            set => fields.Value[this] = value;
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAtribute;
            public StringField Description;
            public StringField Value;

        }
    }
}