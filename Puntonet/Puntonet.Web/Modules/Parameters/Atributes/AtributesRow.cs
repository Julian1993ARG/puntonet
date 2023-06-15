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

        [DisplayName("Id Person"), NotNull, ForeignKey("[dbo].[Persons]", "IdPerson"), LeftJoin("jIdPerson"), TextualField("IdPersonName")]
        public int? IdPerson
        {
            get => fields.IdPerson[this];
            set => fields.IdPerson[this] = value;
        }

        [DisplayName("Description"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Id Person Name"), Expression("jIdPerson.[Name]")]
        public string IdPersonName
        {
            get => fields.IdPersonName[this];
            set => fields.IdPersonName[this] = value;
        }

        [DisplayName("Id Person Address"), Expression("jIdPerson.[Address]")]
        public string IdPersonAddress
        {
            get => fields.IdPersonAddress[this];
            set => fields.IdPersonAddress[this] = value;
        }

        [DisplayName("Id Person Phone"), Expression("jIdPerson.[Phone]")]
        public string IdPersonPhone
        {
            get => fields.IdPersonPhone[this];
            set => fields.IdPersonPhone[this] = value;
        }

        [DisplayName("Id Person Identity"), Expression("jIdPerson.[Identity]")]
        public string IdPersonIdentity
        {
            get => fields.IdPersonIdentity[this];
            set => fields.IdPersonIdentity[this] = value;
        }

        [DisplayName("Id Person Photo"), Expression("jIdPerson.[Photo]")]
        public string IdPersonPhoto
        {
            get => fields.IdPersonPhoto[this];
            set => fields.IdPersonPhoto[this] = value;
        }

        public AtributesRow()
            : base()
        {
        }

        public AtributesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAtribute;
            public Int32Field IdPerson;
            public StringField Description;

            public StringField IdPersonName;
            public StringField IdPersonAddress;
            public StringField IdPersonPhone;
            public StringField IdPersonIdentity;
            public StringField IdPersonPhoto;
        }
    }
}