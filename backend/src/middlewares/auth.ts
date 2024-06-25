import jwt from "jsonwebtoken";
import HttpError from "../helpers/HttpError";
import { Request, Response, NextFunction } from "express";
import { Client, getClientById } from "../services/database/clientsQueries";
import { JwtPayload } from "../helpers/JWTHandling";


const auth = async (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	// чи є хеадер?
	if (typeof authHeader === "undefined") {
        const err = new HttpError(404, "Not Found");
        next(err)
		return;
	}

	const [bearer, token] = authHeader.split(" ", 2);

	// чи є в заголовку беарер?
    if (bearer !== "Bearer") {
        const err = new HttpError(401, "Not authorized because of bearer")
		next(err);
	}
	const secretKey = process.env.JWT_SECRET || '';
	try {
		// чи валідний токен і є юзер в базі?
		const { id } = jwt.verify(token, secretKey) as JwtPayload;
		const data = await getClientById(Number(id)) as Client;
		const user = data.id === Number(id);
        if (!user) {
            const err = new HttpError(401, "Not authorized because of data")
			next(err);
		}
		req.user = { id };

		next();
    } catch {
        const err = new HttpError(401, "Not authorized different err")
		next(err);
	}
};

export default auth;