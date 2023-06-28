import { Decorators, EntityGrid, EnumEditor } from '@serenity-is/corelib';
import { PersonsColumns, PersonsRow, PersonsService } from '../../ServerTypes/Persons';
import { PersonsDialog } from './PersonsDialog';
import { parseQueryString } from '@serenity-is/corelib/q';

const fld = PersonsRow.Fields;

@Decorators.registerClass()
@Decorators.filterable()
export class PersonsGrid extends EntityGrid<PersonsRow, any> {
    protected getColumnsKey() { return PersonsColumns.columnsKey; }
    protected getDialogType() { return PersonsDialog; }
    protected getIdProperty() { return PersonsRow.idProperty; }
    protected getInsertPermission() { return PersonsRow.insertPermission; }
    protected getLocalTextPrefix() { return PersonsRow.localTextPrefix; }
    protected getService() { return PersonsService.baseUrl; }

    protected genreStateFilter: EnumEditor;

    constructor(container: JQuery) {
        super(container);
    }

    protected createQuickFilters() {
        super.createQuickFilters();
        this.genreStateFilter = this.findQuickFilter(EnumEditor, fld.Gender)
        console.log(this.genreStateFilter, "genreState")
        this.set_genreState();
    }

    public set_genreState() {
        const q = parseQueryString();
        if (q['genreFilter']) this.genreStateFilter.value = q['genreFilter']
        console.log(this.genreStateFilter, "genreState")
        console.log(q, "query")
    }


}