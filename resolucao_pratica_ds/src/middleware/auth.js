// Path: src/middleware/auth.js

import {verifyAccess} from '../utils/jwt.js'

export function auth(req, res, next) {
    // Rotas públicas que não precisam de autenticação
    const publicPaths = ['/auth/register', '/auth/login', '/ping', '/docs'];
    
    // Remove query string para comparação
    const pathWithoutQuery = req.path.split('?')[0];
    
    // Verificar se é rota pública
    const isPublic = publicPaths.includes(pathWithoutQuery) || 
                     pathWithoutQuery.startsWith('/auth/register') || 
                     pathWithoutQuery.startsWith('/auth/login');
    
    if (isPublic) {
        return next();
    }

    const hdr = req.headers.authorization;
    if (!hdr?.startsWith("Bearer "))
        return res.status(401).json({ error: "missing token" });
    try {
        const token = hdr.slice("Bearer ".length);
        const payload = verifyAccess(token);
        if (!payload) return res.status(401).json(
            { error: "invalid token" }
        );
        next();
    } catch {
        return res.status(401).json({ error: "invalid or expired token" });
    }
}
