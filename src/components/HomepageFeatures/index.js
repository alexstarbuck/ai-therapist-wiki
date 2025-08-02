import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Emotionally Intelligent',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
	Built to recognize and respond to human emotions — beyond just text.
      </>
    ),
  },
  {
    title: 'AI-Powered, Human-Centered',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
	Blending cutting-edge AI with principles of psychotherapy and compassion.
      </>
    ),
  },
  {
    title: 'For the Inner Journey',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
	Designed to support reflection, growth, and the everyday work of being human.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
