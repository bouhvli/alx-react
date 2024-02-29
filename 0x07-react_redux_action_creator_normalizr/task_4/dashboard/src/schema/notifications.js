import notifData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalized = normalize(notifData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const sortie = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;
  for (const id in notifications) {
    if (notifications[id].autor === userId) {
      sortie.push(message[notifications[id].context]);
    }
  }
  return sortie;
}
export { normalized };
