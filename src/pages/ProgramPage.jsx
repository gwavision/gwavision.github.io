import s from './ProgramPage.module.scss';
import nutrition from 'assets/nutrition.png';
import fitness from 'assets/fitness.png';
import sleep from 'assets/sleep.png';
import skincare from 'assets/skincare.png';
import { Link } from 'react-router-dom';

export default function ProgramPage() {
	return (
		<div className={s.page}>
			<section className={s.programs}>
				<h2>Programs</h2>
				<div className={s.programsContainer}>
					<div className={s.program}>
						<Link to="/program/nutrition">
							<h3>Nutrition</h3>
						</Link>
						<Link to="/program/nutrition">
							<img src={nutrition} alt="nutrition" />
						</Link>
						<p>
							Promoting optimal lifestyle changes by supporting EXCELLENT
							NUTRITIONAL STRATEGIES to accomplish maximum and superior health
							and wellness. Please visit the shop section to explore and read
							more about some nutritional products. Always talk to your doctor
							before starting or stopping any nutritional lifestyle changes.
						</p>
						<Link to="/program/nutrition">READ MORE</Link>
					</div>
					<div className={s.program}>
						<Link to="/program/fitness">
							<h3>Fitness</h3>
						</Link>
						<Link to="/program/fitness">
							<img src={fitness} alt="fitness" />
						</Link>
						<p>
							Promoting optimal lifestyle changes by supporting PHYSICAL
							EXERCISE AND FITNESS as an overall health and wellness, anti-aging
							and preventive medicine. Please visit the shop section to explore
							and read more about some high quality products related to exercise
							and fitness. Always talk to your doctor before starting any
							exercise program.
						</p>
						<Link to="/program/fitness">READ MORE</Link>
					</div>
					<div className={s.program}>
						<Link to="/program/sleep">
							<h3>Sleep Hygiene</h3>
						</Link>
						<Link to="/program/sleep">
							<img src={sleep} alt="sleep" />
						</Link>
						<p>
							Promoting optimal lifestyle changes by supporting GOOD SLEEP
							HYGIENE to gain more energy, loose weight, have excellent memory,
							and feel at best. Please visit the shop section to explore and
							read about for some high quality products related to sleep
							hygiene. Always talk to your Doctor for any changes in sleep
							pattern habits.
						</p>
						<Link to="/program/sleep">READ MORE</Link>
					</div>
					<div className={s.program}>
						<Link to="/program/skincare">
							<h3>Skincare</h3>
						</Link>
						<Link to="/program/skincare">
							<img src={skincare} alt="skincare" />
						</Link>
						<p>
							Promoting optimal lifestyle changes by supporting BEAUTIFUL AND
							HEALTHY SKIN as an overall health and wellness, anti-aging and
							preventive medicine. Please visit the shop section for some high
							quality product related to exercise and fitness.
						</p>
						<Link to="/program/sleep">READ MORE</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
