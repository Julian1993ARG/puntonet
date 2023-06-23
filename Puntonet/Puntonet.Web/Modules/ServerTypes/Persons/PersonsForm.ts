import { StringEditor, EnumEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { Gender } from "../Web/Modules.Persons.Persons.Gender";
import { AccesoriesDialog } from "@/Parameters/Accesories/AccesoriesDialog";
import { PersonClothesEditor } from "@/Parameters/PersonClothes/PersonClothesEditor";
import { PersonAtributtesEditor } from "@/Parameters/PersonAtributtes/PersonAtributtesEditor";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonsForm {
    Name: StringEditor;
    Address: StringEditor;
    Phone: StringEditor;
    Identity: StringEditor;
    Gender: EnumEditor;
    Photo: StringEditor;
    AccesoriList: LookupEditor;
    ClothesList: PersonClothesEditor;
    Atributtes: PersonAtributtesEditor;
}

export class PersonsForm extends PrefixedContext {
    static formKey = 'Persons.Persons';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonsForm.init)  {
            PersonsForm.init = true;

            var w0 = StringEditor;
            var w1 = EnumEditor;
            var w2 = LookupEditor;
            var w3 = PersonClothesEditor;
            var w4 = PersonAtributtesEditor;

            initFormType(PersonsForm, [
                'Name', w0,
                'Address', w0,
                'Phone', w0,
                'Identity', w0,
                'Gender', w1,
                'Photo', w0,
                'AccesoriList', w2,
                'ClothesList', w3,
                'Atributtes', w4
            ]);
        }
    }
}

[Gender, AccesoriesDialog]; // referenced types