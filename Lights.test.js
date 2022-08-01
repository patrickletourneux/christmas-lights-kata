const Lights = require('./Lights');

describe('Lights class', () => {
    const Xdimension = 1000;
    const Ydimension = 1000;
    const instanceLights = new Lights(Xdimension,Ydimension);
    instanceLights.initArrayCoord()

    describe('countOn()', () => {
      test('countOn() method should return toBeGreaterThanOrEqual(0)', () => {
        console.log('instanceLights.countOn() ',instanceLights.countOn())
        expect(instanceLights.countOn()).toBeDefined();
        expect(instanceLights.countOn()).toBeGreaterThanOrEqual(0);
      });
    });

    describe('initArrayCoord()', () => {
      test('initArrayCoord() method should return an Array', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.initArrayCoord()).toEqual(expect.arrayContaining([]));
      });
      test('initArrayCoord() method should return an object .length X*Y', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.initArrayCoord()).toHaveLength(Xdimension*Ydimension);
      });
      test("initArrayCoord()[1] toHaveProperty('x','y','ligth')", () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.initArrayCoord()[0]).toHaveProperty('x','y','ligth');
      });
    });

    describe('turnOn()', () => {
      test('turnOn() method should return toBeDefined()', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.turnOn(1)).toBeDefined();
      });
      test('turnOn(1,1,1,1) method should return toEqual(1)', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.turnOn(1,1,1,1)).toEqual(1);
      });
      test('turnOn(0,0,999,999) method should return toEqual(1000000)', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.turnOn(0,0,999,999)).toEqual(1000000);
      });
      test('turnOn(0,0,999,0) method should return toEqual(1000)', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.turnOn(0,0,999,0)).toEqual(1000);
      });
    });

    describe('turnOff()', () => {
      test('turnOff() method should return toBeDefined()', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.turnOff()).toBeDefined();
      });
      test('turnOff(1,1,1,1) method should return toEqual(0)', () => {
        instanceLights.initArrayCoord();
        instanceLights.turnOn(1,1,1,1)
        expect(instanceLights.turnOff(1,1,1,1)).toEqual(0);
      });  
    });

    describe('toggle()', () => {
      test('toggle() method should return toBeDefined()', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.toggle()).toBeDefined();
      });
      test('toggle(1,1,1,1) method should return toEqual(0)', () => {
        instanceLights.initArrayCoord();
        instanceLights.turnOn(1,1,1,1)
        expect(instanceLights.toggle(1,1,1,1)).toEqual(0);
      });
      test('toggle(1,1,1,1) method should return toEqual(1)', () => {
        instanceLights.initArrayCoord();
        expect(instanceLights.toggle(1,1,1,1)).toEqual(1);
      });
    });
});