const db = require('../db-config');

class Tutorial {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    static fetchAll() {
        return db.query('SELECT * FROM tutorials');
    }

    static findById(id) {
        return db.query('SELECT * FROM tutorials WHERE id = ?', [id]);
    }

    static create(newTutorial) {
        return db.query('INSERT INTO tutorials SET ?', newTutorial);
    }

    static update(id, updatedTutorial) {
        return db.query('UPDATE tutorials SET ? WHERE id = ?', [updatedTutorial, id]);
    }

    static delete(id) {
        return db.query('DELETE FROM tutorials WHERE id = ?', [id]);
    }
}

module.exports = Tutorial;
