const Lights = require('./Lights');

describe('Lights class', () => {
    const Xdimension = 1000;
    const Ydimension = 1000;
    const instanceLights = new Lights(Xdimension,Ydimension);

    beforeEach(() => {
      instanceLights.initArrayCoord();
    })

    describe('countOn()', () => {
      test('countOn() method should return toBeGreaterThanOrEqual(0)', () => {
        console.log('instanceLights.countOn() ',instanceLights.countOn())
        expect(instanceLights.countOn()).toBeDefined();
        expect(instanceLights.countOn()).toBeGreaterThanOrEqual(0);
      });
    });

    describe('initArrayCoord()', () => {
      test('initArrayCoord() method should return an Array', () => {
        expect(instanceLights.initArrayCoord()).toEqual(expect.arrayContaining([]));
      });
      test('initArrayCoord() method should return an object .length X*Y', () => {
        expect(instanceLights.initArrayCoord()).toHaveLength(Xdimension*Ydimension);
      });
      test("initArrayCoord()[1] toHaveProperty('x','y','ligth')", () => {
        expect(instanceLights.initArrayCoord()[0]).toHaveProperty('x','y','ligth');
      });
    });

    describe('turnOn()', () => {
      test('turnOn() method should return toBeDefined()', () => {
        expect(instanceLights.turnOn(1)).toBeDefined();
      });
      test('turnOn(1,1,1,1) method should return toEqual(1)', () => {
        expect(instanceLights.turnOn(1,1,1,1)).toEqual(1);
      });
      test('turnOn(0,0,999,999) method should return toEqual(1000000)', () => {
        expect(instanceLights.turnOn(0,0,999,999)).toEqual(1000000);
      });
      test('turnOn(0,0,999,0) method should return toEqual(1000)', () => {
        expect(instanceLights.turnOn(0,0,999,0)).toEqual(1000);
      });
    });

    describe('turnOff()', () => {
      test('turnOff() method should return toBeDefined()', () => {
        expect(instanceLights.turnOff()).toBeDefined();
      });
      test('turnOff(1,1,1,1) method should return toEqual(0)', () => {
        instanceLights.turnOn(1,1,1,1)
        expect(instanceLights.turnOff(1,1,1,1)).toEqual(0);
      });  
    });

    describe('toggle()', () => {
      test('toggle() method should return toBeDefined()', () => {
        expect(instanceLights.toggle()).toBeDefined();
      });
      test('toggle(1,1,1,1) method should return toEqual(0)', () => {
        instanceLights.turnOn(1,1,1,1)
        expect(instanceLights.toggle(1,1,1,1)).toEqual(0);
      });
      test('toggle(1,1,1,1) method should return toEqual(1)', () => {
        expect(instanceLights.toggle(1,1,1,1)).toEqual(1);
      });
    });
    describe('global test', () => {
      test('global expected 230022', () => {
        instanceLights.turnOn(887,9,959,629)
        instanceLights.turnOn(454,398,844,448)
        
        instanceLights.turnOff(539,243,559,965)
        instanceLights.turnOff(370,819,676,868)
        instanceLights.turnOff(145,40,370,997)
        instanceLights.turnOff(301,3,808,453)
        
        instanceLights.turnOn(351,678,951,908)

        instanceLights.toggle(720,196,897,994)
        instanceLights.toggle(831,394,904,860)

        expect(instanceLights.countOn()).toEqual(230022);
        
      });
    })
});