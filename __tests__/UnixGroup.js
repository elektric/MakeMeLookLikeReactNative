import 'react-native';
import React from 'react';
import UnixGroup from '../src/UnixGroup';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('UnixGroup renders', () => {
  let ug = {'Name':'UnixGroup2'};
  const tree = renderer.create(
    <UnixGroup details={ug} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
