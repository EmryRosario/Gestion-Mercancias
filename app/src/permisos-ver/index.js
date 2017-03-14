const page = require('page')
const autorizacion = require('../utils/autorizacion')
const loader = require('../loader')
const {menu, navbar} = require('../navbar')
const {buscarFuncionalidades, buscarTipoUsuarios} = require('./utils')
const template = require('./template')
const empty = require('empty-element')
page('/permisos/ver', autorizacion(4), loader, menu, navbar, buscarFuncionalidades, buscarTipoUsuarios, (ctx, next) => {
  let container = document.getElementById('main-container')
  empty(container).appendChild(template(ctx.params.tipoUsuarios, ctx.params.funcionalidades))
})
