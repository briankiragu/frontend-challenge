import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  // Set the user as trackable by the query param.
  queryParams = ['userId'];

  // When the query param changes, it will set the 'user' property.
  @tracked userId = null;

  // Keep track of changes to the model.
  @tracked model;

  // Variable to keep track of which task list is being displayed.
  @tracked activeTab = 'active';

  /**
   * Get the filtered tasks from the model instance.
   *
   * @returns {Array}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get filteredTasks() {
    // Get the selected user ID.
    const userId = this.userId;

    // Get the tasks from the model.
    const tasks = this.model.tasks;

    // If a userId was specified, filter the tasks by that user;
    if (userId) {
      return tasks.filter((tasks) => {
        // Resolve the users from the task.
        const users = tasks.users;

        // Get a map of the IDs.
        const ids = users.map((user) => user.id);

        // Return a check if whether any of the IDs match the userId.
        return ids.includes(userId);
      });
    }

    // Otherwise, return all tasks.
    return tasks;
  }

  /**
   * Get all the pending tasks from the model instance.
   *
   * @returns {Array}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get pendingTasks() {
    return this.filteredTasks.filter((task) => !task.isComplete);
  }

  /**
   * Get all the completed tasks from the model instance.
   *
   * @returns {Array}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get completedTasks() {
    return this.filteredTasks.filter((task) => task.isComplete);
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
   * Return the count of completed tasks.
   *
   * @returns {number}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  get completedTaskCount() {
    return this.completedTasks.length;
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
   * Mark a task as either complete or incomplete.
   *
   * @param {number} id The ID of the task.
   *
   * @returns {void}
   * @author Brian Kariuki <bkariuki@hotmail.com>
   */
  @action
  toggleCompleted(id) {
    // Get the tasks from the model.
    const tasks = this.model.tasks;

    // Find the index of the task by ID.
    const index = tasks.findIndex((task) => task.id === id);

    // If the task exists, pin it.
    if (index !== -1) {
      this.model.tasks[index].isComplete = !this.model.tasks[index].isComplete;
    }
  }
}
