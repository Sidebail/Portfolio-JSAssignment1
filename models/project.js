const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    teacher: String,
    courseCode: String,
    title: String
});

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;