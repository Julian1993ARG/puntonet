using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[Atributtes]")]
    [DisplayName("Atributtes"), InstanceName("Atributtes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AtributtesRow : Row<AtributtesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Atributte"), Identity, IdProperty]
        public int? IdAtributte
        {
            get => fields.IdAtributte[this];
            set => fields.IdAtributte[this] = value;
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAtributte;
            public StringField Description;

        }
    }
}