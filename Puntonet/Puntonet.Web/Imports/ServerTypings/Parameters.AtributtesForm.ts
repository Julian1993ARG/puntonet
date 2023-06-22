namespace Puntonet.Parameters {
    export interface AtributtesForm {
        Description: Serenity.StringEditor;
    }

    export class AtributtesForm extends Serenity.PrefixedContext {
        static formKey = 'Parameters.Atributtes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AtributtesForm.init)  {
                AtributtesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AtributtesForm, [
                    'Description', w0
                ]);
            }
        }
    }
}