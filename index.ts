import FlyweightFactory from "./flyweightFactory";
import Flyweight from "./flyweight";

const factory: FlyweightFactory = new FlyweightFactory();

const flyweight1: Flyweight = factory.getFlyweight('shared');
flyweight1.operation('state1');

const flyweight2: Flyweight = factory.getFlyweight('shared');
flyweight2.operation('state2');

console.log(`Total de Flyweights criados: ${factory.getFlyweightsCount()}`);
