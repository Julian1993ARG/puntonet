namespace Puntonet.Parameters {
    export interface PersonClothesForm {
        IdClothe: Serenity.LookupEditor;
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

                Q.initFormType(PersonClothesForm, [
                    'IdClothe', w0
                ]);
            }
        }
    }
}