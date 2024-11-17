const dataSource = require('../database/models');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

class AuthServices {
  async login(dto) {
    let user;
    let userType;

    // Tenta buscar o usuário como professor
    user = await dataSource.Professor.findOne({
      attributes: ['id_professor', 'email', 'senha'],
      where: { email: dto.email }
    });

    // Define userType e userId com base no resultado da busca
    if (user) {
      userType = 'professor';
      user.id = user.id_professor;
    } else {
      // Se não encontrou como professor, busca como aluno
      user = await dataSource.Aluno.findOne({
        attributes: ['id_aluno', 'email', 'senha'],
        where: { email: dto.email }
      });

      if (!user) throw new Error('Usuário não cadastrado');
      
      userType = 'aluno';
      user.id = user.id_aluno;
    }

    const samePasswords = await compare(dto.senha, user.senha);
    if (!samePasswords) throw new Error('Usuário ou senha incorreto');

    const accessToken = sign(
      {
        id: user.id,
        email: user.email,
        userType // Inclui o tipo de usuário no token
      },
      process.env.SECRET, //secret gravado nas variáveies de ambiente
      { expiresIn: 86400 }
    );

    return { accessToken, userType };
  }
}

module.exports = AuthServices;
