import Flyweight from "./flyweight";

class ConcretFlyweight implements Flyweight {
    private intrinsicState: string;

    constructor(intrinsicState: string) {
        this.intrinsicState = intrinsicState;
    }

    operation(state: string): void {
        console.log(`ConcreteFlyweight: Estado intríseco: (${this.intrinsicState}), Estado extrínseco: (${state})`);
    }
}

export default ConcretFlyweight;