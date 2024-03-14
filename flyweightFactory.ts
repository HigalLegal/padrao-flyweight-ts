import Flyweight from "./flyweight";
import ConcretFlyweight from "./concretFlyweight";

class FlyweightFactory {
    private flyweights: Map<string, Flyweight> = new Map();

    getFlyweight(key: string): Flyweight {
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, new ConcretFlyweight(key));
        }
        const flyweight = this.flyweights.get(key);
        if (flyweight === undefined) {
            throw new Error("Erro")
        }
        return flyweight;
    }

        getFlyweightsCount(): number {
        return this.flyweights.size;
    }
}


export default FlyweightFactory;