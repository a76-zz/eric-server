const initialState = require('./mock/initialState')
const { messageTypes } = require('eric-config')
const logger = require('./../logger')

function onSync (io, socket) {
  const event = messageTypes.sync
  logger.info({ event })

  return socket.emit(event, initialState)
}

function addListenersToSocket (io, socket) {
  socket.on(messageTypes.sync, () => onSync(io, socket))
}

module.exports.init = (io) => {
  io.on('connection', (socket) => addListenersToSocket(io, socket))
}
