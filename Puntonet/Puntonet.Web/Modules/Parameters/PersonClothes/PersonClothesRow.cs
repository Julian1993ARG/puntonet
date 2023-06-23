using Serenity.ComponentModel;
using Serenity.Data.Mapping;
using Serenity.Data;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[PersonClothes]")]
    [DisplayName("Person Clothes"), InstanceName("Person Clothes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonClothesRow : Row<PersonClothesRow.RowFields>, IIdRow
    {
        [DisplayName("Id Person Clothe"), Identity, IdProperty]
        public int? IdPersonClothe
        {
            get => fields.IdPersonClothe[this];
            set => fields.IdPersonClothe[this] = value;
        }

        [DisplayName("Id Person"), NotNull, ForeignKey("[dbo].[Persons]", "IdPerson"), LeftJoin("jIdPerson"), TextualField("IdPersonName")]
        [LookupEditor("Persons.Persons")]
        public int? IdPerson
        {
            get => fields.IdPerson[this];
            set => fields.IdPerson[this] = value;
        }

        [DisplayName("Id Clothe"), NotNull, ForeignKey("[dbo].[Clothes]", "IdClothe"), LeftJoin("jIdClothe")]
        [LookupEditor("Parameters.Clothes", InplaceAdd = true)]
        [TextualField("ClotheColor")]
        public int? IdClothe
        {
            get => fields.IdClothe[this];
            set => fields.IdClothe[this] = value;
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

        [DisplayName("Id Clothe Description"), Expression("jIdClothe.[Description]")]
        public string IdClotheDescription
        {
            get => fields.IdClotheDescription[this];
            set => fields.IdClotheDescription[this] = value;
        }

        [DisplayName("Id Clothe Id Color"), Expression("jIdClothe.[IdColor]"), ForeignKey("Colors", "IdColor"), LeftJoin("f")]
        public int? IdClotheIdColor
        {
            get => fields.IdClotheIdColor[this];
            set => fields.IdClotheIdColor[this] = value;
        }
        [DisplayName("Color"), Expression("f.Description")]
        public string IdColorDescription
        {
            get => fields.IdColorDescription[this];
            set => fields.IdColorDescription[this] = value;
        }



        public PersonClothesRow()
            : base()
        {
        }

        public PersonClothesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPersonClothe;
            public Int32Field IdPerson;
            public Int32Field IdClothe;

            public StringField IdPersonName;
            public StringField IdPersonAddress;
            public StringField IdPersonPhone;
            public StringField IdPersonIdentity;
            public StringField IdPersonPhoto;
            public StringField IdColorDescription;

            public StringField IdClotheDescription;
            public Int32Field IdClotheIdColor;
        }
    }
}