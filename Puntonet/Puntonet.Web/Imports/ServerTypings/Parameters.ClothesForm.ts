namespace Puntonet.Parameters {
    export interface ClothesForm {
        Description: Serenity.StringEditor;
        IdColor: Serenity.IntegerEditor;
    }

    export class ClothesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.Clothes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClothesForm.init)  {
                ClothesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ClothesForm, [
                    'Description', w0,
                    'IdColor', w1
                ]);
            }
        }
    }
}
