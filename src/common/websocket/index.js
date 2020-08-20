import Vue from 'vue'
// URL connection
// const socket = new WebSocket("wss://dex.binance.org/api/ws/bnb1m4m9etgf3ca5wpgkqe5nr6r33a4ynxfln3yz4v");

// Or Subscribe method
const socket = new WebSocket('wss://dex.binance.org/api/ws')
socket.onopen = function(evt) {
    socket.send(JSON.stringify({ method: 'subscribe', topic: 'accounts', address: 'bnb1c5pqp2yn5g5nqd2ss9rdxjamvmr0xn42yk4svk' }))
}

// const socket = new WebSocket('wss://dex.binance.org/api/ws/bnb1c5pqp2yn5g5nqd2ss9rdxjamvmr0xn42yk4svk')
// const socket = new WebSocket('ws://localhost:8888/connect')

const emitter = new Vue({
    methods: {
        send(message) {
            if (1 === socket.readyState) socket.send(message)
        },
    },
})

socket.onmessage = function(msg) {
    emitter.$emit('message', msg.data)
}
socket.onerror = function(err) {
    emitter.$emit('error', err)
}

export default emitter
