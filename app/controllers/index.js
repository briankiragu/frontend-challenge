import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  // Variable to keep track of which task list is being displayed.
  @tracked activeTab = 'active';

  // Declare all the pinned tasks.
  @tracked pendingTasks = this.model.filter((task) => !task.isComplete);

  // Declare all the unpinned tasks.
  @tracked completedTasks = this.model.filter((task) => task.isComplete);

  /**
   * Change the active tab displayed to the user.
   *
   * @param {'active'|'completed'} tab Tab to switch to
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  focusTab(tab) {
    this.activeTab = tab;
  }

  /**
   * Mark a task as either complete or incomplete.
   *
   * @param {number} id The ID of the task.
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  toggleCompleted(id) {
    // Find the index of the task by ID.
    const index = this.model.findIndex((task) => task.id === id);

    // If the task exists, pin it.
    if (index !== -1) {
      this.model[index].isComplete = !this.model[index].isComplete;
    }
  }
}
