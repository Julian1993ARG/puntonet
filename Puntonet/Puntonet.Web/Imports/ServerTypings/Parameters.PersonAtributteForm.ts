namespace Puntonet.Parameters {
    export interface PersonAtributteForm {
        IdPerson: Serenity.IntegerEditor;
        IdAtribute: Serenity.IntegerEditor;
    }

    export class PersonAtributteForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.PersonAtributte';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonAtributteForm.init)  {
                PersonAtributteForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(PersonAtributteForm, [
                    'IdPerson', w0,
                    'IdAtribute', w0
                ]);
            }
        }
    }
}