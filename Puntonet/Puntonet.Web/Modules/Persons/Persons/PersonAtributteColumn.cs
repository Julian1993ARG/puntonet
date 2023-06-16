using Puntonet.Parameters;
using Serenity.ComponentModel;
using Serenity.Data;
using System;

namespace Puntonet.Persons.Columns
{
    [ColumnsScript("Persons.PersonAtributtes")]
    [BasedOnRow(typeof(PersonAtributtesRow))]
    public class PersonAtributteColumn
    {
        public string Description { get; set; }
        public string Value { get; set; }
    }
}