import bcrypt from "bcrypt";

const hashPassword = (password:string, salt:number = 10):Promise<string> => bcrypt.hash(password, salt);

const comparePasswords = (incoming:string, present:string):Promise<boolean> => bcrypt.compare(incoming, present);


const hashing = { hashPassword, comparePasswords };

export default hashing