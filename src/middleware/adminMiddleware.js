export default function checkAdmin(req, res, next){
    const {admin} = req.headers;

    if (admin) {
        next();
    } else {
        res.status(403).json({
            message: "Acesso não permitido!"
        })
    }
}