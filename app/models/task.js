import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string')
  name;

  @attr('string')
  description;

  @attr('boolean')
  isComplete;

  @attr('number')
  creator;

  @attr('boolean')
  isPinned;
}
