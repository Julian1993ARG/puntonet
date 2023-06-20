namespace Puntonet.Persons {
    export interface PersonAtributtesForm {
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
                var w0 = s.StringEditor;

                Q.initFormType(PersonAtributtesForm, [
                    'Description', w0,
                    'Value', w0
                ]);
            }
        }
    }
}