import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ClothesColumns, ClothesRow, ClothesService } from '../../ServerTypes/Parameters';
import { ClothesDialog } from './ClothesDialog';

@Decorators.registerClass()
export class ClothesGrid extends EntityGrid<ClothesRow, any> {
    protected getColumnsKey() { return ClothesColumns.columnsKey; }
    protected getDialogType() { return ClothesDialog; }
    protected getIdProperty() { return ClothesRow.idProperty; }
    protected getInsertPermission() { return ClothesRow.insertPermission; }
    protected getLocalTextPrefix() { return ClothesRow.localTextPrefix; }
    protected getService() { return ClothesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}