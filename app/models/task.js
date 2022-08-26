import Model, { attr, hasMany } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string')
  name;

  @attr('string')
  description;

  @attr('boolean')
  isComplete;

  @attr('number')
  creator;

  @hasMany('user')
  users;
}
