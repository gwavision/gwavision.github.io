import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from 'assets/logo-full.png';

export default function Header() {
	return (
		<>
			<header className={s.banner}>
				<div>Your health is the best investment you'll ever make,</div>
				<Link to="/enroll" className={s.enroll}>
					enroll here!
				</Link>
			</header>
			<nav className={s.nav}>
				<div>
					<div className={s.logo}>
						<Link to="/">
							<img src={logo} alt="logo" className={s.logo} />
						</Link>
					</div>
					<div className={s.links}>
						<Link to="/">Home</Link>
						<Link to="/article">Articles</Link>
						<Link to="/shop">Shop</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
