import s from './ShopPage.module.scss';
import Item from 'components/Item';
import items from 'items/items';

export default function ShopPage({ category }) {
	return (
		<div className={s.page}>
			<h2 className={s.title}>Shop</h2>
			<div className={s.items}>
				{items.map((item, idx) => {
					if (category === 'all' || item.category === category) {
						return <Item key={idx} {...item} />;
					}
				})}
			</div>
		</div>
	);
}
