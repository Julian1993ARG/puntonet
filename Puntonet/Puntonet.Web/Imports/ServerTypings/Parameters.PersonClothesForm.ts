namespace Puntonet.Parameters {
    export interface PersonClothesForm {
        IdPerson: Serenity.LookupEditor;
        IdClothe: Serenity.IntegerEditor;
    }

    export class PersonClothesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.PersonClothes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonClothesForm.init)  {
                PersonClothesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(PersonClothesForm, [
                    'IdPerson', w0,
                    'IdClothe', w1
                ]);
            }
        }
    }
}
