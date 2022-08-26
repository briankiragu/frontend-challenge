import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    // Create the users.
    const marley = this.store.createRecord('user', {
      id: 1,
      name: 'Marley',
      avatar: '/img/avatars/marley.png',
    });

    const annie = this.store.createRecord('user', {
      id: 2,
      name: 'Annie Kamau',
      avatar: '/img/avatars/annie.png',
    });

    const abgaye = this.store.createRecord('user', {
      id: 3,
      name: 'Agbaye James',
      avatar: '/img/avatars/agbaye.png',
    });

    const clint = this.store.createRecord('user', {
      id: 4,
      name: 'Clint West',
      avatar: '/img/avatars/clint.png',
    });

    const john = this.store.createRecord('user', {
      id: 5,
      name: 'John Jones',
      avatar: '/img/avatars/john.png',
    });

    // Create the tasks.
    const task1 = this.store.createRecord('task', {
      id: 1,
      name: 'Solve all github issues',
      description: "Solve the world's Github issues.",
      isComplete: false,
      creator: 2,
      users: [annie, marley],
    });

    const task2 = this.store.createRecord('task', {
      id: 2,
      name: 'A task',
      description: 'This is a task.',
      isComplete: false,
      creator: 2,
      users: [clint, abgaye, john],
    });

    const task3 = this.store.createRecord('task', {
      id: 3,
      name: 'Clean the kitchen',
      description: "It's filthy!",
      isComplete: false,
      creator: 2,
      users: [marley],
    });

    return {
      users: [marley, annie, abgaye, clint, john],
      tasks: [task1, task2, task3],
    };
  }
}
