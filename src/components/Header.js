import s from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<div className={s.banner}>
				<Link to="/enroll">ENROLL HERE!</Link>
			</div>
			<header className={s.header}>
				<Link to="/">GWAVISION</Link>
				<Link to="/">Home</Link>
				<Link to="/article">Articles</Link>
				<Link to="/shop">Shop</Link>
			</header>
		</>
	);
}
