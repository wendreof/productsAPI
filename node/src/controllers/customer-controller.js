'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');
const emailService = require('../services/email-service');

exports.auth = async(req, res, next) => {
    try {
        const customer = await repository.auth({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        console.log('customer', customer)

        if (!customer) {
            res.status(404).send({
                message: 'Usuário e/ou senha inválidos!'
            });
            return;
        }

        const token = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.post = async(req, res, next) => {

    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'o nome deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.email, 3, 'o email deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.password, 6, 'a senha deve conter pelo menos 6 caracteres')

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            roles: ['user']
        })

        emailService.send(
            req.body.email,
            'Bem vindo ao Node Store do @wendreof',
            global.EMAIL_TMPL.replace('{0}', req.body.name)
        )

        res.status(201).send({
            message: 'Cliente cadastrado com scuesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        })
    }

};

exports.refreshToken = async(req, res, next) => {
    try {

        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const customer = await repository.getById(data.id);

        console.log('customer', customer)

        if (!customer) {
            res.status(404).send({
                message: 'Cliente não encontrado!'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};