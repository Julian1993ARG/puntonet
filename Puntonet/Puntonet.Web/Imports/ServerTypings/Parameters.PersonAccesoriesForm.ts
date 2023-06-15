namespace Puntonet.Parameters {
    export interface PersonAccesoriesForm {
        IdPerson: Serenity.IntegerEditor;
        IdAccesory: Serenity.IntegerEditor;
    }

    export class PersonAccesoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.PersonAccesories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonAccesoriesForm.init)  {
                PersonAccesoriesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(PersonAccesoriesForm, [
                    'IdPerson', w0,
                    'IdAccesory', w0
                ]);
            }
        }
    }
}
