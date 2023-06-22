using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[PersonAtributtes]")]
    [DisplayName("Person Atributtes"), InstanceName("Person Atributtes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonAtributtesRow : Row<PersonAtributtesRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Person Atributte"), Identity, IdProperty]
        public int? IdPersonAtributte
        {
            get => fields.IdPersonAtributte[this];
            set => fields.IdPersonAtributte[this] = value;
        }

        [DisplayName("Value"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Value
        {
            get => fields.Value[this];
            set => fields.Value[this] = value;
        }

        [DisplayName("Id Person"), NotNull, ForeignKey("[dbo].[Persons]", "IdPerson"), LeftJoin("jIdPerson"), TextualField(nameof(IdPersonName))]
        public int? IdPerson
        {
            get => fields.IdPerson[this];
            set => fields.IdPerson[this] = value;
        }

        [DisplayName("Id Atributte"), NotNull, ForeignKey("[dbo].[Atributtes]", "IdAtributte"), LeftJoin("jIdAtributte"), TextualField(nameof(IdAtributteDescription))]
        public int? IdAtributte
        {
            get => fields.IdAtributte[this];
            set => fields.IdAtributte[this] = value;
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

        [DisplayName("Id Atributte Description"), Expression("jIdAtributte.[Description]")]
        public string IdAtributteDescription
        {
            get => fields.IdAtributteDescription[this];
            set => fields.IdAtributteDescription[this] = value;
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPersonAtributte;
            public StringField Value;
            public Int32Field IdPerson;
            public Int32Field IdAtributte;

            public StringField IdPersonName;
            public StringField IdPersonAddress;
            public StringField IdPersonPhone;
            public StringField IdPersonIdentity;
            public StringField IdPersonPhoto;
            public StringField IdAtributteDescription;
        }
    }
}