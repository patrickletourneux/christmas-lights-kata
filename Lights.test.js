const Lights = require('./Lights');




describe('Lights class', () => {
    const Xdimension = 10;
    const Ydimension = 10;
    const countCases = Xdimension*Ydimension
    const instanceLights = new Lights(Xdimension,Ydimension);
    instanceLights.initArrayCoord()


    test('countOn() method should return toBeGreaterThanOrEqual(0)', () => {
      console.log('instanceLights.countOn() ',instanceLights.countOn())
      expect(instanceLights.countOn()).toBeDefined();
      expect(instanceLights.countOn()).toBeGreaterThanOrEqual(0);
    });
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
    test('turnOn() method should return toBeDefined()', () => {
      instanceLights.initArrayCoord();
      expect(instanceLights.turnOn(1)).toBeDefined();
    });
    test('turnOff() method should return toBeDefined()', () => {
      instanceLights.initArrayCoord();
      expect(instanceLights.turnOff()).toBeDefined();
    });
    test('toggle() method should return toBeDefined()', () => {
      instanceLights.initArrayCoord();
      expect(instanceLights.toggle()).toBeDefined();
    });
    test('turnOn(1,1,1,1) method should return toEqual(1)', () => {
      instanceLights.initArrayCoord();
      expect(instanceLights.turnOn(1,1,1,1)).toEqual(1);
    });
    test('turnOff(1,1,1,1) method should return toEqual(0)', () => {
      instanceLights.initArrayCoord();
      instanceLights.turnOn(1,1,1,1)
      expect(instanceLights.turnOff(1,1,1,1)).toEqual(0);
    });
    test('toggle(1,1,1,1) method should return toEqual(0)', () => {
      instanceLights.initArrayCoord();
      instanceLights.turnOn(1,1,1,1)
      expect(instanceLights.toggle(1,1,1,1)).toEqual(0);
    });
    test('toggle(1,1,1,1) method should return toEqual(8)', () => {
      instanceLights.initArrayCoord();
      instanceLights.turnOn(1,1,3,3)
      expect(instanceLights.toggle(1,1,1,1)).toEqual(8);
    });



});