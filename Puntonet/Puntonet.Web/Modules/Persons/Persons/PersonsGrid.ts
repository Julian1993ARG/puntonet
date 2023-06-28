import { Decorators, EntityGrid, LookupEditor } from '@serenity-is/corelib';
import { PersonsColumns, PersonsRow, PersonsService } from '../../ServerTypes/Persons';
import { PersonsDialog } from './PersonsDialog';
import { Gender } from '../../ServerTypes/Web';
import { parseQueryString } from '@serenity-is/corelib/q';

const fld = PersonsRow.Fields;

@Decorators.registerClass()
export class PersonsGrid extends EntityGrid<PersonsRow, any> {
    protected getColumnsKey() { return PersonsColumns.columnsKey; }
    protected getDialogType() { return PersonsDialog; }
    protected getIdProperty() { return PersonsRow.idProperty; }
    protected getInsertPermission() { return PersonsRow.insertPermission; }
    protected getLocalTextPrefix() { return PersonsRow.localTextPrefix; }
    protected getService() { return PersonsService.baseUrl; }
    protected StateFilterGender: LookupEditor;
    protected id: Gender;


    constructor(container: JQuery) {
        super(container);
    }

    /*    id = parseQueryString().FilterGender*/

    public Set_StateFilterGender(value: number): void {
        this.StateFilterGender.value = value == null ? '' : value.toString();
        console.log("parse query", parseQueryString())
    }

    //protected createQuickFilters() {
    //    super.createQuickFilters();
    //    this.StateFilterGender = this.findQuickFilter(LookupEditor, fld.Gender) 
    //}
}


