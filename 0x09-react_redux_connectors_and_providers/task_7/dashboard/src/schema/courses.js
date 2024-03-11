import { normalize, schema } from 'normalizer';

const course = new schema.Entity('course');

export const courseNormalizer = (data) => {
  return normalize(data, [course]);
}