using Puntonet.Parameters;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet.Persons
{
    [ConnectionKey("Default"), Module("Persons"), TableName("[dbo].[Persons]")]
    [DisplayName("Persons"), InstanceName("Persons")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Persons.Persons", Permission = "*")]

    //TODO: Borrar este comentario 
    public sealed class PersonsRow : Row<PersonsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Person"), Identity, IdProperty]
        public int? IdPerson
        {
            get => fields.IdPerson[this];
            set => fields.IdPerson[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Address"), Size(300), NotNull]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Phone"), Size(20), NotNull]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Identity"), Size(12), NotNull]
        public string Identity
        {
            get => fields.Identity[this];
            set => fields.Identity[this] = value;
        }

        [DisplayName("Photo"), Size(200), NotNull]
        public string Photo
        {
            get => fields.Photo[this];
            set => fields.Photo[this] = value;
        }
        [DisplayName("Accesories")]
        [LookupEditor("Parameters.Accesories", Multiple =true, InplaceAdd = true ), NotMapped]
        [LinkingSetRelation(typeof(PersonAccesoriesRow), "IdPerson", "IdAccesory")]
        public List<Int32> AccesoriList
        {
            get => fields.AccesoriList[this];
            set => fields.AccesoriList[this] = value;
        }

        [DisplayName("Atributtes"), MasterDetailRelation(foreignKey: "IdPerson", IncludeColumns = "IdPerson, Value, Description"), NotMapped]
        public List<PersonAtributtesRow> Atributtes
        {
            get => fields.Atributtes[this];
            set => fields.Atributtes[this] = value;
        }

        [DisplayName("Clothes"), MasterDetailRelation(foreignKey: "IdPerson", IncludeColumns = "IdClotheDescription, IdClotheIdColor, IdColorDescription"), NotMapped]
        public List<PersonClothesRow> ClothesList
        {
            get => fields.ClothesList[this];
            set => fields.ClothesList[this] = value;
        }



        public PersonsRow()
            : base()
        {
        }

        public PersonsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPerson;
            public StringField Name;
            public StringField Address;
            public StringField Phone;
            public StringField Identity;
            public StringField Photo;
            public ListField<Int32> AccesoriList;
            public ListField<PersonAtributtesRow> Atributtes;
            public RowListField<PersonClothesRow> ClothesList; 
        }
    }
}