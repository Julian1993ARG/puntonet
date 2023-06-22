﻿import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { AccesoriesDialog } from "@/Parameters/Accesories/AccesoriesDialog";
import { PersonClothesEditor } from "@/Parameters/PersonClothes/PersonClothesEditor";
import { PersonAtributtesEditor } from "@/Parameters/PersonAtributtes/PersonAtributtesEditor";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonsForm {
    Name: StringEditor;
    Address: StringEditor;
    Phone: StringEditor;
    Identity: StringEditor;
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
            var w1 = LookupEditor;
            var w2 = PersonClothesEditor;
            var w3 = PersonAtributtesEditor;

            initFormType(PersonsForm, [
                'Name', w0,
                'Address', w0,
                'Phone', w0,
                'Identity', w0,
                'Photo', w0,
                'AccesoriList', w1,
                'ClothesList', w2,
                'Atributtes', w3
            ]);
        }
    }
}

[AccesoriesDialog]; // referenced types