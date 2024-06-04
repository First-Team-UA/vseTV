import HttpError from './HttpError';
import jwt from 'jsonwebtoken';

const signToken = (id: string) =>
  jwt.sign({ id }, process.env.JWT_SECRET ?? 'super-secret', {
    expiresIn: process.env.JWT_EXPIRES ?? '1d',
  });

export interface JwtPayload {
  id: string;
}

const checkToken = (token: string) => {
  if (!token) throw new HttpError(401, 'Not logged in..');

  try {
    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET ?? 'super-secret',
    ) as JwtPayload;

    return id;
  } catch (err) {
    throw new HttpError(401, 'Not logged in..');
  }
};

export default { checkToken, signToken };
