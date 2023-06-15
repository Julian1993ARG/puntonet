import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonAtributteGrid } from './PersonAtributteGrid';

export default function pageInit() {
    initFullHeightGridPage(new PersonAtributteGrid($('#GridDiv')).element);
}