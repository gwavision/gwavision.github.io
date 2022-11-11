import s from './ProgramPage.module.scss';
import nutrition from 'assets/nutrition.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ShopPage from 'pages/ShopPage';

export default function NutritionPage() {
	return (
		<>
			<Helmet>
				<title>GWAVISION: Nutrition</title>
				<meta
					name="keywords"
					content="vitamin, weight loss, diet, supplement, nutrients, nutrition facts, balance diet, sport nutrition, protein, food pyramid"
				/>
			</Helmet>
			<div className={s.page}>
				<article className={s.content}>
					<div>
						<img src={nutrition} alt="nutrition" />
						<p>
							<b>
								Promoting optimal lifestyle changes by supporting EXCELLENT
								NUTRITIONAL STRATEGIES to accomplish maximum and superior health
								and wellness
							</b>
						</p>
						<ul>
							<li>Duration: 6 Months or more</li>
							<li>
								Condition: Physical nutrition & health exercise, high blood
								pressure, diabetes, osteoporosis and general good health.
							</li>
						</ul>
						<Link to="/enroll">Enroll</Link>
					</div>
					<div className={s.description}>
						<h2>Nutrition</h2>
						<p>
							GWAVISION nutritional strategies for weight management and to
							accomplish maximum health, is based on two important concepts,
							which are “primary food and secondary food”. When referring to
							primary food, the center focuses on the concept of “body-mind-and
							soul” related to the significance of the positive balance of the
							followings: relationships, spirituality, career, physical activity
							and good sleep hygiene. Moreover, the center extremely adopts the
							concept of Bio-individuality as an essential secondary food.
							Finally, the program believes, the kinds of food that a person
							eats should be based on the individual personal choice, not just a
							theory.
						</p>
					</div>
				</article>
				<ShopPage category={'nutrition'} />
			</div>
		</>
	);
}
