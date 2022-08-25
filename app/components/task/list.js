import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TaskListComponent extends Component {
  // Declare all the pinned tasks.
  @tracked pinnedTasks = [];

  // Declare all the unpinned tasks.
  @tracked unpinnedTasks = this.args.tasks;

  // Check if there are any pinned tasks.
  get hasPinnedTasks() {
    return this.pinnedTasks.length > 0;
  }

  // Check if there are any unpinned tasks.
  get hasUnpinnedTasks() {
    return this.unpinnedTasks.length > 0;
  }

  /**
   * Pin a task to the top of the pinned tasks list.
   *
   * @param {number} id The task to pin.
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  pinTask(id) {
    // Find the task by ID.
    const index = this.unpinnedTasks.findIndex((task) => task.id === id);

    // If the task exists, pin it.
    if (index !== -1) {
      // Return the removed task from the unpinned tasks.
      const task = this.unpinnedTasks.splice(index, 1);

      // Update the unpinned tasks.
      this.unpinnedTasks = [...this.unpinnedTasks];

      // Add the task to the pinned tasks.
      this.pinnedTasks = [...this.pinnedTasks, ...task];
    }
  }

  /**
   * Unpin a task from the pinned tasks list.
   *
   * @param {number} id The task to pin.
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  unpinTask(id) {
    // Find the task by ID.
    const index = this.pinnedTasks.findIndex((task) => task.id === id);

    // If the task exists, pin it.
    if (index !== -1) {
      // Return the removed task from the pinned tasks.
      const task = this.pinnedTasks.splice(index, 1);

      // Update the pinned tasks.
      this.pinnedTasks = [...this.pinnedTasks];

      // Add the task to the pinned tasks.
      this.unpinnedTasks = [...this.unpinnedTasks, ...task];
    }
  }
}
