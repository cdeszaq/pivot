import { expect } from 'chai';
import * as sinon from 'sinon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../../utils/test-utils/index';

import * as TestUtils from 'react-addons-test-utils';

import { EssenceMock } from '../../../common/models/mocks';

import { $, Expression } from 'plywood';
import { ManualFallback } from './manual-fallback';

describe('ManualFallback', () => {
  it('adds the correct class', () => {
    var renderedComponent = TestUtils.renderIntoDocument(
      <ManualFallback
        clicker={null}
        essence={EssenceMock.wiki()}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((ReactDOM.findDOMNode(renderedComponent) as any).className, 'should contain class').to.contain('manual-fallback');
  });
});
