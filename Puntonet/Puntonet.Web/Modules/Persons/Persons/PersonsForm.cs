using Org.BouncyCastle.Asn1.X509.SigI;
using Puntonet.Parameters;
using Puntonet.Persons.PersonAtributtes;
using Puntonet.Web.Modules.Persons.Persons;
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
        [DefaultValue("1")]
        public Gender Gender { get; set; }
        [HalfWidth]
        public string Photo { get; set; }
        [Tab("Extras")]
        public ListField<Int32> AccesoriList { get; set; }
        [PersonClothesEditor]
        public List<PersonClothesRow> ClothesList { get; set; }
        [PersonAtributtesEditor]
        public List<PersonAtributtesRow> Atributtes { get; set; }

    }
}