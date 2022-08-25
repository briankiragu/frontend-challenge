import Component from '@glimmer/component';

export default class TaskItemComponent extends Component {
  /**
   * Get the concatenated string for the task item checkbox.
   *
   * @returns {string}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get inputId() {
    return `task-item-${this.args.task.id}`;
  }

  /**
   * Get the concatenated string for the task item status.
   *
   * @returns {string}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get status() {
    return this.args.task.isComplete ? 'Completed' : 'In progress';
  }
}
