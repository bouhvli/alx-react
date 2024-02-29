import notifData from '../../../../notifications.json';
import { normalize, schema} from 'normalizr'
export default function getAllNotificationsByUser(userId) {
  return notifData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}