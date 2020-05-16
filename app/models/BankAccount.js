class BankAccount{
    constructor(){
        this.amount = 0
        this.historial = []
    }

    current(){
        return this.amount
    }

    append(amount){
        if(amount>0){
            this.amount += amount;
            this.historial.push({type:'append',amount:amount})
        }
    }

    sub(amount){
        if(amount>0){
            this.amount -= amount;
            this.historial.push({type:'sub',amount:amount})
        }
    }

    merge(account){
        this.amount += account.amount
        this.historial = this.historial.concat(account.historial)
    }

    history(){
        return this.historial
    }
}

module.exports = BankAccount