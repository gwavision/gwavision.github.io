import s from './Item.module.scss';

export default function Header({ image, link }) {
	return (
		<div className={s.item}>
			<div className={s.image}>
				<img
					src={image}
					alt="item"
					onClick={() => window.open(link, '_blank')}
				/>
			</div>
			<button className={s.button} onClick={() => window.open(link, '_blank')}>
				Buy now
			</button>
		</div>
	);
}
