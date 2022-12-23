import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Red',
    Svg: require('@site/static/img/undraw_scientist_re_n5d5.svg').default,
    description: (
      <>
          Start by writing a test that defines the expected behavior of the code you want to write.
          This test should fail because the code does not yet exist. Run the test: Run the test to confirm that it fails as expected.
      </>
    ),
  },
  {
    title: 'Green',
    Svg: require('@site/static/img/undraw_check_boxes_re_v40f.svg').default,
    description: (
      <>
          Write the minimum amount of code needed to make the test pass. Run all the tests, including the one you just wrote,
          to ensure that the code you wrote works as intended and does not break any existing functionality.
      </>
    ),
  },
  {
    title: 'Refactor',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
          If necessary, clean up and optimize the code you just wrote without changing its functionality.
          Continue the cycle by writing more tests and writing the code to make them pass.
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
        <h3>{title}</h3>
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
