import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string')
  name;

  @attr('avatar')
  name;

  @attr('date', {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;

  @hasMany('task')
  tasks;
}
