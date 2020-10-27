let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        const message = {
            id,
            text,
            time,
        }
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        messages[index] = {
            id: messages[index].id,
            text: req.body.text,
            time: messages[index].time,
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        messages.splice(index, 1);
        res.status(200).send(messages)
    },
}