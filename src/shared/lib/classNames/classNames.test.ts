import { classNames } from './classNames';

describe('classNames', () => {
    test('with one first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2']
        )).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass hovered scrollable';
        expect(classNames('someClass',
            {hovered: true, scrollable: true},
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass hovered';
        expect(classNames('someClass',
            {hovered: true, scrollable: false},
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass scrollable';
        expect(classNames('someClass',
            {hovered: undefined, scrollable: true},
        )).toBe(expected);
    });

    test('with all parameters', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass',
            {hovered: true, scrollable: true},
            ['class1', 'class2']
        )).toBe(expected);
    });
});