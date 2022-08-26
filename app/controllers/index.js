import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  // Variable to keep track of which task list is being displayed.
  @tracked activeTab = 'active';

  // Keep track of whether or not the filters are visible.
  @tracked showFilters = false;

  // Declare all the pinned tasks.
  @tracked pendingTasks = this.model.tasks.filter((task) => !task.isComplete);

  // Declare all the unpinned tasks.
  @tracked completedTasks = this.model.tasks.filter((task) => task.isComplete);

  /**
   * Return the count of completed tasks.
   *
   * @returns {number}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get completedTaskCount() {
    return this.completedTasks.length;
  }

  /**
   * Check if the current active tab is 'pending tasks'
   *
   * @returns {boolean}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get isPendingTab() {
    return this.activeTab === 'active';
  }

  /**
   * Check if the current active tab is 'completed tasks'
   *
   * @returns {boolean}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get isCompletedTab() {
    return this.activeTab === 'completed';
  }

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
   * Toggle the visibility of the filters.
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  /**
   * Only show the tasks associated with the given user ID.
   *
   * @param {number} userId User ID to get tasks from
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  filterTasks(userId) {
    console.dir(`Getting tasks for user ${userId}`);
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
    const index = this.model.tasks.findIndex((task) => task.id === id);

    // If the task exists, pin it.
    if (index !== -1) {
      this.model.tasks[index].isComplete = !this.model.tasks[index].isComplete;

      // Refresh the pending and completed task lists.
      this.pendingTasks = this.model.tasks.filter((task) => !task.isComplete);
      this.completedTasks = this.model.tasks.filter((task) => task.isComplete);
    }
  }
}
