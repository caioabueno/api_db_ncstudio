const { verify, decode } = require('jsonwebtoken');

module.exports = (requiredUserType) => {
  return async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send('Access token não informado');

    const [, accessToken] = token.split(" ");

    try {
      const decoded = verify(accessToken, process.env.SECRET);

      // Verifica se o userType do token corresponde ao tipo de usuário esperado
      if (decoded.userType !== requiredUserType) {
        return res.status(403).send('Acesso não autorizado para o tipo de usuário');
      }

      req.userId = decoded.id;
      req.userEmail = decoded.email;
      req.userType = decoded.userType;

      return next();
    } catch (error) {
      res.status(401).send('Usuário não autorizado');
    }
  };
};
