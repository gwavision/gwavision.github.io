import s from './ProgramPage.module.scss';
import sleep from 'assets/sleep.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShopPage from 'pages/ShopPage';

export default function SleepPage() {
	return (
		<>
			<Helmet>
				<title>GWAVISION: Sleep Hygiene</title>
				<meta
					name="keywords"
					content="CPAP, melatonin, sleeping mask, sleep apnea, snoring, jet lag, sleep remedies, restless leg syndrome, grinding teeth, night sweat, sleep paralysis"
				/>
			</Helmet>
			<div className={s.page}>
				<article className={s.content}>
					<div>
						<img src={sleep} alt="sleep" />
						<p>
							<b>
								Promoting optimal lifestyle changes by supporting good sleep
								hygiene to gain more energy and loose weight.
							</b>
						</p>
						<Link to="/enroll">Read More</Link>
					</div>
					<div className={s.description}>
						<h2>Sleep Hygiene</h2>
						<p>
							Developing good sleep hygiene is a very important part of
							GWAVISION weight management concept. Several scientific research
							studies have demonstrated that individuals who sleep five hours or
							less are five pounds heavier than those who get at least seven to
							eight hours of sleep at night. Lack of sleep can disturb the
							circadian rhythms which is a component of our body physiological
							sleep regulation center. A disruption of the circadian rhythm can
							lead to inefficient body regulation of the following: energy
							balance, metabolism, appetite and abnormal regulation of the
							hormones leptin and ghrelin that control out eating behavior. Lack
							of sleep can be due to many factors, including sleep disorders
							which should be evaluated and treated by a sleep medical
							specialist. Public data shows that 1 out of 10 adults have some
							types of sleep disorders. When left untreated certain types of
							sleep problem can lead to: short term memory, weight gain,
							tiredness, gastric reflux, dry mouth, slow metabolism, depression.
							Furthermore, some sleep disorders are directly linked to the
							following condition: hypertension, diabetes, heart failure, stroke
							and coronary artery disease just to name a few.
						</p>
					</div>
				</article>
				<ShopPage category="sleep" />
			</div>
		</>
	);
}
