using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[PersonAccesories]")]
    [DisplayName("Person Accesories"), InstanceName("Person Accesories")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonAccesoriesRow : Row<PersonAccesoriesRow.RowFields>, IIdRow
    {
        [DisplayName("Id Person Accesory"), Identity, IdProperty]
        public int? IdPersonAccesory
        {
            get => fields.IdPersonAccesory[this];
            set => fields.IdPersonAccesory[this] = value;
        }

        [DisplayName("Id Person"), NotNull, ForeignKey("[dbo].[Persons]", "IdPerson"), LeftJoin("jIdPerson"), TextualField("IdPersonName")]
        public int? IdPerson
        {
            get => fields.IdPerson[this];
            set => fields.IdPerson[this] = value;
        }

        [DisplayName("Id Accesory"), NotNull, ForeignKey("[dbo].[Accesories]", "IdAccesory"), LeftJoin("jIdAccesory"), TextualField("IdAccesoryDescription")]
        public int? IdAccesory
        {
            get => fields.IdAccesory[this];
            set => fields.IdAccesory[this] = value;
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

        [DisplayName("Id Accesory Description"), Expression("jIdAccesory.[Description]")]
        public string IdAccesoryDescription
        {
            get => fields.IdAccesoryDescription[this];
            set => fields.IdAccesoryDescription[this] = value;
        }

        public PersonAccesoriesRow()
            : base()
        {
        }

        public PersonAccesoriesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPersonAccesory;
            public Int32Field IdPerson;
            public Int32Field IdAccesory;

            public StringField IdPersonName;
            public StringField IdPersonAddress;
            public StringField IdPersonPhone;
            public StringField IdPersonIdentity;
            public StringField IdPersonPhoto;

            public StringField IdAccesoryDescription;
        }
    }
}