import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonsGrid } from './PersonsGrid';

$(function () {
  /*  var personGrid = new PersonsGrid($('#GridDiv'));*/
    initFullHeightGridPage(new PersonsGrid($('#GridDiv')).element);
});