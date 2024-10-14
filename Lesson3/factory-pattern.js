class Transport{
    ride() {
        throw new Error('Method not implemented');
    }
    stop() {
        throw new Error('Method not implemented');
    }
}

class Car extends Transport{
    ride() {
        console.log('Car is riding');
    }
    stop() {
        console.log('Car is stopped');
    }
}

class Bike extends Transport{
    ride() {
        console.log('Bike is riding');
    }
    stop() {
        console.log('Bike is stopped');
    }
}

class TransportFactory{
    static getTransport(type) {
        switch (type) {
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
                throw new Error('Invalid transport type');
        }
    }
}

const car = TransportFactory.getTransport('car');
car.ride();
car.stop();

const bike = TransportFactory.getTransport('bike');
bike.ride();
bike.stop();