import s from './EnrollPage.module.scss';
import { Link } from 'react-router-dom';

export default function EnrollPage() {
	return (
		<div className={s.page}>
			<h2>Program Description</h2>
			<p>
				Your health is the best investment you'll ever make. Congratulations!
			</p>
			<article className={s.program}>
				<section>
					<h3>GWAVISION Health and Wellness Center</h3>
					<p>
						Long-term unresolved health concerns such as diabetes, high blood
						pressure, obesity, gastritis, gastric ulcer, IBS, osteoarthritis,
						arthritis, eating disorders, anorexia, bulimia, depression, anxiety
						and much more; can be fatal, painful while creating serious
						financial burdens. The best prevention of any complications of these
						health issues is to manage and maintain a healthy lifestyle which is
						the greatest wealth of all.
					</p>
					<p>
						Please if you are serious about enjoying that vacation cruise you
						have always wanted to, your favorite musical dance move that you
						have always wanted to try, that favorite sport activity which has
						always been your heart desire.
					</p>
					<p className="emphasis">
						When enrolling at GWAVISION Health & Wellness Center, you will get
						high-quality service with long term health coaching for optimal
						health.
					</p>
				</section>
				<section>
					<h3>Enroll:</h3>
					<ul>
						<li>Managing and maintaining optimal general health</li>
						<li>
							Managing and maintaining a healthy weight by fighting obesity and
							complications
						</li>
						<li>
							Managing and fighting symptoms of pre-diabetes, diabetes and
							complications
						</li>
						<li>
							Managing and fighting symptoms of high blood pressure and
							complications
						</li>
						<li>
							Managing and fight symptoms of osteoporosis and osteoarthritis
						</li>
						<li>Managing and fighting symptoms of low energy</li>
						<li>Managing and fighting depression and anxiety</li>
						<li>Managing symptoms of gastric ulcer</li>
						<li>Managing and fighting IBS</li>
						<li>Managing and maintaining a healthy prostate.</li>
						<li>Managing and maintaining good sleep hygiene.</li>
					</ul>
				</section>
				<section>
					<h3>
						Your weight loss program will be based on the following factors:
					</h3>
					<ul>
						<li>A careful nutritional dietary plan approach</li>
						<li>Healthy exercise & Fitness plan</li>
						<li>Good sleep hygiene</li>
						<li>Health Coaching Support</li>
						<li>Supplemental therapeutic approach PRN</li>
					</ul>
				</section>
				<div className={s.buttons}>
					<Link className={s.enroll} to="enroll/nextstep">
						Start the enrollment process
					</Link>
					<Link className={s.contact} to="contact">
						Hold, I have some questions
					</Link>
				</div>
				<p>Service provided by GWAVISION Health and Welln ess Center</p>
			</article>
		</div>
	);
}
