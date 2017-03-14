const page = require('page')
const autorizacion = require('../utils/autorizacion')
const loader = require('../loader')
const {menu, navbar} = require('../navbar')
const {buscarAlmacenes} = require('./utils')
const template = require('./template')
const empty = require('empty-element')
page('/almacen/ver', autorizacion(1), loader, menu, navbar, buscarAlmacenes, (ctx, next) => {
  let container = document.getElementById('main-container')
  empty(container).appendChild(template(ctx.params.almacenes))
})