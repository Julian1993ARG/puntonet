using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Puntonet.Parameters
{
    [ConnectionKey("Default"), Module("Parameters"), TableName("[dbo].[PersonAtributte]")]
    [DisplayName("Person Atributte"), InstanceName("Person Atributte")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonAtributteRow : Row<PersonAtributteRow.RowFields>, IIdRow
    {
        [DisplayName("Id Person Atributte"), Identity, IdProperty]
        public int? IdPersonAtributte
        {
            get => fields.IdPersonAtributte[this];
            set => fields.IdPersonAtributte[this] = value;
        }

        [DisplayName("Id Person"), NotNull, ForeignKey("[dbo].[Persons]", "IdPerson"), LeftJoin("jIdPerson"), TextualField(nameof(IdPersonName))]
        public int? IdPerson
        {
            get => fields.IdPerson[this];
            set => fields.IdPerson[this] = value;
        }

        [DisplayName("Id Atribute"), NotNull, ForeignKey("[dbo].[Atributes]", "IdAtribute"), LeftJoin("jIdAtribute"), TextualField(nameof(IdAtributeDescription))]
        public int? IdAtribute
        {
            get => fields.IdAtribute[this];
            set => fields.IdAtribute[this] = value;
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

        [DisplayName("Id Atribute Description"), Expression("jIdAtribute.[Description]")]
        public string IdAtributeDescription
        {
            get => fields.IdAtributeDescription[this];
            set => fields.IdAtributeDescription[this] = value;
        }

        [DisplayName("Id Atribute Value"), Expression("jIdAtribute.[Value]")]
        public string IdAtributeValue
        {
            get => fields.IdAtributeValue[this];
            set => fields.IdAtributeValue[this] = value;
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPersonAtributte;
            public Int32Field IdPerson;
            public Int32Field IdAtribute;

            public StringField IdPersonName;
            public StringField IdPersonAddress;
            public StringField IdPersonPhone;
            public StringField IdPersonIdentity;
            public StringField IdPersonPhoto;
            public StringField IdAtributeDescription;
            public StringField IdAtributeValue;
        }
    }
}