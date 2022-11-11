import s from './ArticlePage.module.scss';
import magazines from 'magazines/magazines';

export default function ArticlePage() {
	return (
		<div className={s.page}>
			<h2 className={s.title}>Articles</h2>
			<div className={s.items}>
				{magazines.map((item, idx) => {
					return <Item key={idx} {...item} />;
				})}
			</div>
		</div>
	);
}

function Item({ image, link }) {
	return (
		<div className={s.item}>
			<div className={s.image}>
				<img
					src={image}
					alt="item"
					// onClick={() => window.open(link, '_blank')}
				/>
			</div>
			<button
				className={s.button}
				//  onClick={() => window.open(link, '_blank')}
			>
				Read More
			</button>
		</div>
	);
}
