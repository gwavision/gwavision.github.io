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
						pressure, obesity, gastritis, gastric ulcer, osteoarthritis,
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
						GWAVISION Health & Wellness is committed to facilitate awareness and
						education to explore high-quality health care products with long
						term holistic health coaching for optimal health. Always talk to
						your doctor or healthcare provider before taking any products or
						starting any program.
					</p>
				</section>
				<section>
					<h3>
						Excellent information with related products can be found in each
						categories:
					</h3>
					<ul>
						<li>
							Managing and maintaining optimal general health (Nutrition,
							Exercise, Sleep, skincare)
						</li>
						<li>
							Managing and maintaining a healthy weight by fighting obesity and
							complications (Nutrition, Exercise and sleep)
						</li>
						<li>
							Managing and fighting symptoms of pre-diabetes, diabetes and
							complications (Nutrition, Exercise, Sleep, skincare)
						</li>
						<li>
							Managing and fighting symptoms of high blood pressure and
							complications (Nutrition, Exercise, Sleep, skincare)
						</li>
						<li>
							Managing and fight symptoms of osteoporosis and osteoarthritis
							(Exercise, Nutrition and Sleep)
						</li>
						<li>
							Managing and fighting symptoms of low energy (Nutrition, Exercise
							and Sleep)
						</li>
						<li>
							Managing and fighting depression and anxiety (Nutrition, Exercise,
							Sleep, skincare)
						</li>
						<li>
							Managing symptoms of gastric ulcer (Nutrition, Exercise, Sleep)
						</li>
						<li>
							Managing and maintaining a healthy prostate. (Nutrition, Exercise,
							Sleep)
						</li>
						<li>
							Managing and maintaining good sleep hygiene. (Nutrition, Exercise,
							Sleep, skincare)
						</li>
					</ul>
				</section>
				<p>Service provided by GWAVISION Health and Wellness Center</p>
				{/* <div className={s.buttons}>
					<Link className={s.enroll} to="enroll/nextstep">
						Start the enrollment process
					</Link>
					<Link className={s.contact} to="contact">
						Hold, I have some questions
					</Link>
				</div> */}
			</article>
		</div>
	);
}
