namespace Puntonet.Persons {
    export interface PersonAtributtesForm {
        IdPerson: Serenity.LookupEditor;
        Description: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }

    export class PersonAtributtesForm extends Serenity.PrefixedContext {
        static formKey = 'Persons.PersonAtributtes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonAtributtesForm.init)  {
                PersonAtributtesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(PersonAtributtesForm, [
                    'IdPerson', w0,
                    'Description', w1,
                    'Value', w1
                ]);
            }
        }
    }
}