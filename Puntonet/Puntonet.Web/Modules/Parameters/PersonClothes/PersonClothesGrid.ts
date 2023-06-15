import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonClothesColumns, PersonClothesRow, PersonClothesService } from '../../ServerTypes/Parameters';
import { PersonClothesDialog } from './PersonClothesDialog';

@Decorators.registerClass()
export class PersonClothesGrid extends EntityGrid<PersonClothesRow, any> {
    protected getColumnsKey() { return PersonClothesColumns.columnsKey; }
    protected getDialogType() { return PersonClothesDialog; }
    protected getIdProperty() { return PersonClothesRow.idProperty; }
    protected getInsertPermission() { return PersonClothesRow.insertPermission; }
    protected getLocalTextPrefix() { return PersonClothesRow.localTextPrefix; }
    protected getService() { return PersonClothesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}