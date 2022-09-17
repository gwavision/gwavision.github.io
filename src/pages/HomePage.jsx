import s from './HomePage.module.scss';
import { Link, useNavigate } from 'react-router-dom';

import { IoMdStopwatch } from 'react-icons/io';
import { IoCartOutline, IoNewspaperOutline } from 'react-icons/io5';
import homepageImg from 'assets/homepage.png';
import nutrition from 'assets/nutrition.png';
import fitness from 'assets/fitness.png';
import sleep from 'assets/sleep.png';
import skincare from 'assets/skincare.png';

export default function HomePage() {
	const navigate = useNavigate();

	return (
		<div className={s.page}>
			<img className={s.homepageImg} src={homepageImg} alt="homepage" />
			<div className={s.sections}>
				<section className={s.features}>
					<div className={s.feature} onClick={() => navigate('/program')}>
						<IoMdStopwatch />
						<h3>Programs</h3>
						<p>Nutrition • Fitness • Sleep • Skin Care</p>
					</div>
					<div className={s.feature} onClick={() => navigate('/shop')}>
						<IoCartOutline />
						<h3>Store</h3>
						<p>Equipment • Supplements • Books</p>
					</div>
					<div className={s.feature} onClick={() => navigate('/article')}>
						<IoNewspaperOutline />
						<h3>Magazine</h3>
						<p>Read interesting tips, stories and articles!</p>
					</div>
				</section>
				<section className={s.about}>
					<h1>PROGRAM APPROACH</h1>
					<p>
						GWAVISION Health & Wellness Center, embraces an integrative and
						complementary holistic medicine approach to lifestyles changes for
						health, beauty and wellness. We focus on a weight management program
						using holistic anti-aging and preventive medicine. Furthermore, the
						program adopts a holistic health coaching approach designed to
						encourage and support patients to ensure continued success of their
						plan. Finally, the program strongly emphasizes a bio-individuality
						concept, while implementing the core value of preventive medicine,
						health and lifestyle changes in order for patients to reach their
						goal of optimum health and well-being.
					</p>
				</section>
				<section className={s.programs}>
					<h2>PROGRAMS</h2>
					<div className={s.programsContainer}>
						<div className={s.program}>
							<h3>Nutrition</h3>
							<img src={nutrition} alt="nutrition" />
							<p>
								GWAVISION nutritional strategies for weight management and to
								accomplish maximum health, is based on two important concepts,
								which are “primary...
							</p>
							<Link to="/program/nutrition">READ MORE</Link>
						</div>
						<div className={s.program}>
							<h3>Fitness</h3>
							<img src={fitness} alt="fitness" />
							<p>
								GWAVISION nutritional strategies for weight management and to
								accomplish maximum health, is based on two important concepts,
								which are “primary...
							</p>
							<Link to="/program/fitness">READ MORE</Link>
						</div>
						<div className={s.program}>
							<h3>Nutrition</h3>
							<img src={sleep} alt="sleep" />
							<p>
								GWAVISION nutritional strategies for weight management and to
								accomplish maximum health, is based on two important concepts,
								which are “primary...
							</p>
							<Link to="/program/sleep">READ MORE</Link>
						</div>
						<div className={s.program}>
							<h3>Skincare</h3>
							<img src={skincare} alt="skincare" />
							<p>
								GWAVISION nutritional strategies for weight management and to
								accomplish maximum health, is based on two important concepts,
								which are “primary...
							</p>
							<Link to="/program/skincare">READ MORE</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
