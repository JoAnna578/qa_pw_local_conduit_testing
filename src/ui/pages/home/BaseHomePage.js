import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';
import { GlobalFeedTab } from '../../components/GlobalFeedTab';

export class BaseHomePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    // URL korzysta z env
    this._url = process.env.BASE_URL + ROUTES.home;

    this.globalFeed = new GlobalFeedTab(this.page, userId);
  }
}
