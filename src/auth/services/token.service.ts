const jwt = require('jsonwebtoken')
import { TokenRequest } from "../interfaces/refresh-token.request.interface";

class TokenService {
    private tokenLife = parseInt(`${process.env.TOKEN_LIFE}`);
    private refreshLife = parseInt(`${process.env.TOKEN_REFRESH_LIFE}`);
    private secret = process.env.TOKEN_SECRET;

    public async getToken(id: string, role: "user"): Promise<any> {
        const user = { id, role };
        const tokenOptions = { expiresIn: this.tokenLife };
        if (this.secret) {
            const token = jwt.sign(user, this.secret, tokenOptions);
            return {
                status: "Logged in",
                token
            }
        }
        else {
            throw new Error("Erro ao gerar token !")
        }
    }

    public async getRefreshToken(data: TokenRequest) {
        const id = data.userId
        const role = data.userType
        const user = { id, role };
        const refreshOptions = { expiresIn: this.refreshLife };

        if (this.secret) {
            const refreshToken = jwt.sign(user, this.secret, refreshOptions)
            return refreshToken
        }
        else {
            throw new Error("Erro ao gerar Refresh Token")
        }
    }


}

export { TokenService };
