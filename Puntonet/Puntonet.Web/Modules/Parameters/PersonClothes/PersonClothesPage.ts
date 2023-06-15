import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonClothesGrid } from './PersonClothesGrid';

$(function() {
    initFullHeightGridPage(new PersonClothesGrid($('#GridDiv')).element);
});