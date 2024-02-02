// Client Component
import ProductContext from './productContext';
import Page from '../productPage/page';

export default function PageWrapper() {
    const { user, indexNo } = ProductContext();
    return <Page user={user} indexNo={indexNo} />;
}
