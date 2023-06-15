import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AtributesGrid } from './AtributesGrid';

export default function pageInit() {
    initFullHeightGridPage(new AtributesGrid($('#GridDiv')).element);
}