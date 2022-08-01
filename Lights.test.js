const Lights = require('./Lights');




describe('Lights class', () => {
    const Xdimension = 1000;
    const Ydimension = 1000;
    const countCases = Xdimension*Ydimension
    const instanceLights = new Lights(Xdimension,Ydimension);
    instanceLights.initArrayCoord()


    test('countOn() method should return toBeGreaterThanOrEqual(0)', () => {
      console.log('instanceLights.countOn() ',instanceLights.countOn())
      expect(instanceLights.countOn()).toBeDefined();
      expect(instanceLights.countOn()).toBeGreaterThanOrEqual(0);
    });
    test('initArrayCoord() method should return an Array', () => {
      instanceLights.initialize();
      expect(instanceLights.initArrayCoord()).toEqual(expect.arrayContaining([]));
    });
    test('initArrayCoord() method should return an object .length X*Y', () => {
      instanceLights.initialize();
      expect(instanceLights.initArrayCoord()).toHaveLength(Xdimension*Ydimension);
    });



});