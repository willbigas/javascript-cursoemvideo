let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log(`Engordou ${p}KGs`);
        this.peso += p;
    }
};
console.log(`${amigo.nome} pesava ${amigo.peso}KG Antes de engordar!`);
amigo.engordar(2);
console.log(`Agora ${amigo.nome} pesa ${amigo.peso}KG.`);
