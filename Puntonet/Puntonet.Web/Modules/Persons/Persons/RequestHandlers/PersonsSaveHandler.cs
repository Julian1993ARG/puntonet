using Serenity.Data;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Persons.PersonsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Persons.PersonsRow;

namespace Puntonet.Persons
{
    public interface IPersonsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPersonsSaveHandler
    {
        public PersonsSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();
            

            var existPerson = this.Connection.List<PersonsRow>(
                    new Criteria(PersonsRow.Fields.Identity) == Row.Identity
                    &
                    new Criteria(PersonsRow.Fields.IdPerson.ToString()) != Row.IdPerson.ToString()
                );


            if (existPerson.Count > 0) throw new System.Exception($"The person with ID: {Row.Identity} is already register");
        }

    }
}