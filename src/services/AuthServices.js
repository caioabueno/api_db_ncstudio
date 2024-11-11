const dataSource = require('../database/models');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');


class AuthServices {
  async login(dto){
    const user = await dataSource.Aluno.findOne({
      attributes: ['id_aluno','email','senha'],
      where: {
       email: dto.email
      }
    })

    if (!user){
      throw new Error('Usuário não cadastrado')
    }

    const samePasswords = await compare(dto.senha, user.senha)

    if(!samePasswords) {
      throw new Error('Usuário ou senha incorreto')
    }

    const acessToken = sign({
      id: user.id_aluno,
      email: user.email
    }, 
    process.env.SECRET, //secret que se encontra nas variáveis de ambiente 
    { expiresIn: 86400 })

    return { acessToken }
  }
}

module.exports = AuthServices;