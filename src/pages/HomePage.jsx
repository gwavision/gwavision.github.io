import s from './HomePage.module.scss';

export default function HomePage() {
	return (
		<div className={s.page}>
			<section className="s.features"></section>
			<section className="s.about">
				<h3>Program Approach</h3>
				<p>
					GWAVISION Health & Wellness Center, embraces an integrative and
					complementary holistic medicine approach to lifestyles changes for
					health, beauty and wellness. We focus on a weight management program
					using holistic anti-aging and preventive medicine. Furthermore, the
					program adopts a holistic health coaching approach designed to
					encourage and support patients to ensure continued success of their
					plan. Finally, the program strongly emphasizes a bio-individuality
					concept, while implementing the core value of preventive medicine,
					health and lifestyle changes in order for patients to reach their goal
					of optimum health and well-being.
				</p>
			</section>
			<section className="s.programs"></section>
		</div>
	);
}
