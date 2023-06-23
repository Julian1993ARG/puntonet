using Serenity.ComponentModel;
using System.ComponentModel;

namespace Puntonet.Web.Modules.Persons.Persons
{
    [EnumKey("Persons.Persons.Gender")]
    public enum Gender
    {
        [Description("Male")]
        Male = 1,
        [Description("Female")]
        Female = 2
    }
}
