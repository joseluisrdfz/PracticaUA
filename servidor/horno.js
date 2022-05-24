const Electro = require("./electro.js").Electro;

class Horno extends Electro {
	constructor(httpServer, debug) {
		var temp = 22; // temperatura por defecto

		// Inicializar las propiedades del horno
		super({ // sensores
			reloj: null,
			puertaAbierta: false,
			temperaturaInterior: temp,
			temperaturaSonda: 0,
			sondaConectada: false,
			presencia: false,
			consumo: 0
		}, { // actuadores
			resistenciaSuperior: false,
			resistenciaInferior: false,
			gratinador: false,
			ventilador: false,
			luz: false
		}, httpServer, debug);

		this.on("sondaConectada", val => {
			this.temperaturaSonda = val ? temp : 0;
		});

		setInterval(() => { // cada segundo
			this.reloj = new Date(); // actualizar la hora
			// Consumo
			var consumo = 0;
			if (this.resistenciaSuperior) consumo += 40;
			if (this.resistenciaInferior) consumo += 40;
			if (this.gratinador) consumo += 40;
			if (this.ventilador) consumo += 5;
			if (this.luz) consumo += 1;
			this.consumo += consumo;

			if (this.puertaAbierta) {
				this.temperaturaInterior = temp;
			} else {
				this.temperaturaInterior = Math.max(22, this.temperaturaInterior + (this.resistenciaSuperior ? 1 : 0) + (this.resistenciaInferior ? 1 : 0) + (this.gratinador ? 1 : 0) - 0.5);
			}
			if (this.sondaConectada) {
				if (this.temperaturaInterior > this.temperaturaSonda) this.temperaturaSonda += 0.5;
				if (this.temperaturaInterior < this.temperaturaSonda) this.temperaturaSonda -= 0.5;
			}

		}, 1000);
	}
}

exports.Horno = Horno;