import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TaskFilterComponent extends Component {
  // Keep track of whether or not the filters are visible.
  @tracked showFilters = false;

  /**
   * Toggle the visibility of the filters.
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
