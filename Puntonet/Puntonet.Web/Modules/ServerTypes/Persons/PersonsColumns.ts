import { GenderFormatter } from "@/Persons/Persons/GenderFormatter";
import { Gender } from "../Web/Modules.Persons.Persons.Gender";
import { AccesoriesListFormatter } from "@/Persons/Persons/AccesoriesListFormatter";

export class PersonsColumns {
    static columnsKey = 'Persons.Persons';
}

[GenderFormatter, Gender, AccesoriesListFormatter]; // referenced types