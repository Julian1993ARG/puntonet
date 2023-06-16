using Org.BouncyCastle.Asn1.X509.SigI;
using Puntonet.Persons.PersonAtributtes;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet.Persons.Forms
{
    [FormScript("Persons.Persons")]
    [BasedOnRow(typeof(PersonsRow), CheckNames = true)]
    public class PersonsForm
    {
        [Tab("Personal Data")]
        [HalfWidth]
        public string Name { get; set; }
        [HalfWidth]
        public string Address { get; set; }
        [HalfWidth]
        public string Phone { get; set; }
        [HalfWidth]
        public string Identity { get; set; }
        [HalfWidth]
        public string Photo { get; set; }
        [Tab("Extras")]
        public ListField<Int32> AccesoriList { get; set; }

        [PersonAtributtesEditor]
        public ListField<PersonAtributtesRow> Atributtes { get; set; }

        [Tab("Atributtes"), IgnoreName, PersonAtributteGrid, LabelWidth("0")]
        public string AtributtesGrid { get; set; }
    }
}