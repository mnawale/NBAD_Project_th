const db = require('../util/database');

module.exports = class Budget {
  constructor(id,userId, title, value, month,tags,amount) {
    this.id=id;
    this.userId = userId;
    this.title = title;
    this.value = value;
    this.month = month;
    this.tags = tags;
    this.amount = amount;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM budget');
              
  }
  static fetchBudget(uid) {
    return db.execute('SELECT * FROM budget WHERE user_id = ?',[uid]);
              
  }
  static update(id,amount)  {
    return db.execute(
      'UPDATE  budget SET amount= ? WHERE id= ?',[amount,id]);
  }
  
  
  static save(budget) {
    return db.execute(
      'INSERT INTO budget (user_id,title, budget, month,tags) VALUES (?, ?, ?, ?, ?)',
      [budget.userId,budget.title, budget.value, budget.month,budget.tags]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM budget WHERE id = ?', [id]);
  }
};
