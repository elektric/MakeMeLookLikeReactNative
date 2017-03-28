import 'react-native';
import React from 'react';
import ADGroup from '../src/ADGroup';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('AD Group renders', () => {
  let adg = {'Name':'ADGroup7'};
  const tree = renderer.create(
    <ADGroup details={adg} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
