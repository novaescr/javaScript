export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente.")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;


    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    sacar(valor) {
        throw new Error("O método Sacar é abstrato.")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado;
        }

        return;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
