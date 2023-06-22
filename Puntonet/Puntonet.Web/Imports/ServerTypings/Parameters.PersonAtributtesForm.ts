namespace Puntonet.Parameters {
    export interface PersonAtributtesForm {
        Value: Serenity.StringEditor;
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

                Q.initFormType(PersonAtributtesForm, [
                    'Value', w0
                ]);
            }
        }
    }
}