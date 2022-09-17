import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import {
	BsPinterest,
	BsFacebook,
	BsInstagram,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs';

export default function Footer() {
	return (
		<div className={s.footer}>
			<div>
				<div className={s.socials}>
					<h4>Follow Us</h4>
					<div className={s.icons}>
						<BsPinterest />
						<BsFacebook />
						<BsInstagram />
						<BsTwitter />
						<BsYoutube />
					</div>
					<p className={s.disclaimer}>
						Disclaimer: Reproduction of part or all of the contents in any form
						of this web site is expressly prohibited other than for individual
						use only and may not be recopied and shared with a third party. The
						permission to recopy by an individual does not allow for
						incorporation of material or any part of it in any work or
						publication, whether in hard copy, electronic, or any other form
					</p>
					<p className={s.disclaimer}>© 2022 GWAVISION Health & Wellness</p>
				</div>
				<div className={s.links}>
					<div>
						<h4>Site</h4>
						<Link to="/">Home</Link>
						<Link to="/program">Programs</Link>
						<Link to="/article">Articles</Link>
						<Link to="/shop">Shop</Link>
						<Link to="/enroll">Enroll</Link>
					</div>
					<div>
						<h4>Programs</h4>
						<Link to="program/nutrition">Nutrition</Link>
						<Link to="program/fitness">Fitness</Link>
						<Link to="program/sleep">Sleep</Link>
						<Link to="program/skin-care">Skin Care</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
