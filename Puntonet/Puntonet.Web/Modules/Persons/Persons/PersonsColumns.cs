using Puntonet.Persons.Persons;
using Puntonet.Web.Modules.Persons.Persons;
using Serenity.ComponentModel;
using Serenity.Data;
using System;

namespace Puntonet.Persons.Columns
{
    [ColumnsScript("Persons.Persons")]
    [BasedOnRow(typeof(PersonsRow), CheckNames = true)]
    public class PersonsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public int IdPerson { get; set; }
        [EditLink]
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Identity { get; set; }
        [GenderFormatter]
        public Gender Gender { get; set; }
        public string Photo { get; set; }
        [Width(300), AccesoriesListFormatter]
        public ListField<Int32> AccesoriList { get; set; }
    }
}