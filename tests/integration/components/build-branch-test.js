/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'build-branch',
  'Integration: BuildBranchComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      this.set('build', { branch: 'foo' })
      this.render(hbs`{{build-branch build=build}}`);
      expect(this.$().text().trim()).to.equal('foo');
    });
  }
);
