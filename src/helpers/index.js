import crypto from 'crypto';
import config from '../backend/config/index.js';

export const saltPassword = password => {
  return crypto
    .pbkdf2Sync(password, config.salt, config.iterations, 512, 'sha512')
    .toString('base64');
};
