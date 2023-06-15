namespace Puntonet.Parameters {
    export interface AccesoriesForm {
        Description: Serenity.StringEditor;
    }

    export class AccesoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.Accesories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccesoriesForm.init)  {
                AccesoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AccesoriesForm, [
                    'Description', w0
                ]);
            }
        }
    }
}
