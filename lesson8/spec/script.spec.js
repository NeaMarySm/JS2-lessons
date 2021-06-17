const script = require('../module-calc');
const calculator = script.calculator;

describe('Метод addition', () => {
    it('должна возвращать 5 при аргументах (3, 2)', () => {
        calculator.init(3, 2);
        expect(calculator.addition()).toBe(5);
    });
    it('должна возвращать 2 при аргументах (null, 2)', () => {
        calculator.init(null, 2);
        expect(calculator.addition()).toBe(2);
    });
    it('должна возвращать 2 при аргументах (2, null)', () => {
        calculator.init(2, null);
        expect(calculator.addition()).toBe(2);
    });
    it('должна возвращать строку "один из аргументов не определен" при аргументах (undefined, 2)', () => {
        calculator.init(undefined, 2);
        expect(calculator.addition()).toBe("один из аргументов не определен");
    });
    it('должна возвращать строку "один из аргументов не определен" при аргументах (2, undefined)', () => {
        calculator.init(2, undefined);
        expect(calculator.addition()).toBe("один из аргументов не определен");
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (3, string)', () => {
        calculator.init(3, 'str');
        expect(calculator.addition()).toBe("один из аргументов не является числом");
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (string, 3)', () => {
        calculator.init('str', 3);
        expect(calculator.addition()).toBe("один из аргументов не является числом");
    });

});
describe('Метод subtraction', () => {
    it('должна возвращать 7 при аргументах (8, 1)', () => {
        calculator.init(8, 1);
        expect(calculator.subtraction()).toBe(7);
    });
    it('должна возвращать -7 при аргументах (null, 7)', () => {
        calculator.init(null, 7);
        expect(calculator.subtraction()).toBe(-7);
    });
    it('должна возвращать 7 при аргументах (7, null)', () => {
        calculator.init(7, null);
        expect(calculator.subtraction()).toBe(7);
    });
    it('должна возвращать строку "один из аргументов не определен" при аргументах (undefined, 2)', () => {
        calculator.init(undefined, 2);
        expect(calculator.subtraction()).toBe("один из аргументов не определен");
    });
    it('должна возвращать строку "один из аргументов не определен" при аргументах (2, undefined)', () => {
        calculator.init(2, undefined);
        expect(calculator.subtraction()).toBe("один из аргументов не определен");
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (3, string)', () => {
        calculator.init(3, 'str');
        expect(calculator.subtraction()).toBe("один из аргументов не является числом");
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (string, 3)', () => {
        calculator.init('str', 3);
        expect(calculator.subtraction()).toBe("один из аргументов не является числом");
    });

});
describe('Метод multiplication', () => {
    it('должна возвращать 36 при аргументах (9, 4)', () => {
        calculator.init(9, 4);
        expect(calculator.multiplication()).toBe(36);
    });
    it('должна возвращать null при аргументах (null, 9)', () => {
        calculator.init(null, 9);
        expect(calculator.multiplication()).toBeNull();
    });
    it('должна возвращать null при аргументах (9, null)', () => {
        calculator.init(9, null);
        expect(calculator.multiplication()).toBeNull();
    });
    it('должна возвращать undefined при аргументах (undefined, 2)', () => {
        calculator.init(undefined, 2);
        expect(calculator.multiplication()).toBeUndefined();
    });
    it('должна возвращать undefined при аргументах (2, undefined)', () => {
        calculator.init(2, undefined);
        expect(calculator.multiplication()).toBeUndefined();
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (3, string)', () => {
        calculator.init(3, 'str');
        expect(calculator.multiplication()).toBe("один из аргументов не является числом");
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (string, 3)', () => {
        calculator.init('str', 3);
        expect(calculator.multiplication()).toBe("один из аргументов не является числом");
    });
});
describe('Метод division', () => {
    it('должна возвращать 4 при аргументах (8, 2)', () => {
        calculator.init(8, 2);
        expect(calculator.division(8, 2)).toBe(4);
    });
    it('должна возвращать null при аргументах (null, 7)', () => {
        calculator.init(null, 7);
        expect(calculator.division()).toBeNull();
    });
    it('должна возвращать null при аргументах (7, null)', () => {
        calculator.init(2, null);
        expect(calculator.division()).toBeNull();
    });
    it('должна возвращать undefined при аргументах (undefined, 2)', () => {
        calculator.init(undefined, 2);
        expect(calculator.multiplication()).toBeUndefined();
    });
    it('должна возвращать undefined при аргументах (2, undefined)', () => {
        calculator.init(2, undefined);
        expect(calculator.multiplication()).toBeUndefined();
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (3, string)', () => {
        calculator.init(3, 'str');
        expect(calculator.multiplication()).toBe("один из аргументов не является числом");
    });
    it('должна возвращать "один из аргументов не является числом" при аргументах (string, 3)', () => {
        calculator.init('str', 3);
        expect(calculator.multiplication()).toBe("один из аргументов не является числом");
    });
});