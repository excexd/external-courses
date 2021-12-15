/* eslint-disable func-names */
class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isSwitchedOn = false;
  }

  switchOn() {
    this.isSwitchedOn = true;
  }

  switchOff() {
    this.isSwitchedOn = false;
  }
}

class Fan extends ElectricalAppliance {
  constructor(name, power, noise) {
    super(name, power);
    this.noise = noise;
  }
}

class Lamp extends ElectricalAppliance {
  constructor(name, power, constructionType) {
    super(name, power);
    this.construction = constructionType;
  }
}

class Television extends ElectricalAppliance {
  constructor(name, power, screenResolution) {
    super(name, power);
    this.screenResolution = screenResolution;
  }
}

ElectricalAppliance.calcPowerConsumption = function (array) {
  let powerConsumption = 0;

  array.forEach((element) => {
    console.log(element.isSwitchedOn);
    if (element.isSwitchedOn) {
      powerConsumption += element.power;
    }
  });

  return powerConsumption;
};

ElectricalAppliance.searchByName = function (array, searchName) {
  const searchResult = [];

  array.forEach((element) => {
    if (element.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1) {
      searchResult.push(element);
    }
  });

  return searchResult;
};

ElectricalAppliance.getNamesOfElements = function (array) {
  const names = [];

  array.forEach((element) => {
    names.push(element.name);
  });

  return names;
};

const fan = new Fan('Centek 3150', 30, 35);
const lamp = new Lamp('Camelion KD-313', 60, 'Настольный светильник');
const television = new Television('Samsung UE43', 130, '3840x2160');

lamp.switchOn();
television.switchOn();

const roomElectricalAppliances = [fan, lamp, television];
const powerConsumption = ElectricalAppliance.calcPowerConsumption(roomElectricalAppliances);

console.log(`Потребляемая мощность: ${powerConsumption} Ватт`);

const searchRequest = '31';
const searchResult = ElectricalAppliance.searchByName(roomElectricalAppliances, searchRequest);

console.log(`Поиск электроприборов по запросу ${searchRequest}`);
console.log(ElectricalAppliance.getNamesOfElements(searchResult));
