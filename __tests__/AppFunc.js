import 'react-native';
import React from 'react';
import AppFunc from '../src/AppFunc';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('AppFunc renders', () => {
  let af = {'Name':'AppFunc2','AuthLevel':'9204','Description':'Application Function 2 Description Text Sometimes this text might be really really really super duper long so we should definately test it out when it is long.'};
  const tree = renderer.create(
    <AppFunc details={af} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
