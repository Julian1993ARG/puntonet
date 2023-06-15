import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ClothesGrid } from './ClothesGrid';

$(function() {
    initFullHeightGridPage(new ClothesGrid($('#GridDiv')).element);
});