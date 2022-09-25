import s from './FitnessPage.module.scss';
import fitness from 'assets/fitness-main.png';
import { Link } from 'react-router-dom';

export default function FitnessPage() {
	return (
		<div className={s.page}>
			<article className={s.main}>
				<img src={fitness} alt="fitness" />
				<div className={s.description}>
					<h2>Fitness</h2>
					<p>
						<b>
							Promoting optimal lifestyle changes by supporting PROPER PHYSICAL
							EXERCISE AND FITNESS as an overall anti-aging and preventive
							medicine
						</b>
					</p>
					<p>
						Physical exercise and fitness is the greatest preventive medicine
						and an excellent method to achieve superior health. GWAVISION
						strongly promotes and supports the concept of functional exercise as
						a start of fitness activity for its weight management program. The
						center recommends and encourages at least just 30 minutes of regular
						walking as a form of daily exercise. Exercise has several important
						health benefits for our body and mind. Exercise keeps our brain and
						body fits. Exercise can lift our mood and enhance our learning
						abilities. Exercise can boost our immune system, mental health and
						can significantly reduce stress. Moreover, exercise can improve our
						skin tone and has excellent anti-aging effects. Furthermore,
						exercise can lower risk for certain cancer it can also lower high
						blood pressure and the risk for diabetes, while significantly
						decrease the risk of osteoporosis. Finally, exercise can increase
						energy and endurance while reducing the feelings of depression and
						anxiety.
					</p>
					<Link to="/enroll">Enroll</Link>
					<ul>
						<li>Duration: 6 Months or more</li>
						<li>
							Condition: Physical fitness & health exercise, high blood
							pressure, diabetes, osteoporosis and general good health.
						</li>
					</ul>
				</div>
			</article>
		</div>
	);
}
