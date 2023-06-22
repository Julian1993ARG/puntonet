namespace Puntonet.Parameters {
    export interface PersonAtributtesForm {
        Value: Serenity.StringEditor;
        IdPerson: Serenity.IntegerEditor;
        IdAtributte: Serenity.IntegerEditor;
    }

    export class PersonAtributtesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.PersonAtributtes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonAtributtesForm.init)  {
                PersonAtributtesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(PersonAtributtesForm, [
                    'Value', w0,
                    'IdPerson', w1,
                    'IdAtributte', w1
                ]);
            }
        }
    }
}